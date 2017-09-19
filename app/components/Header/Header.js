import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, Animated, Keyboard, Platform } from 'react-native';

const ANIMATION_DURATION = 250;
const TEXT_SIZE = 65;

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textSize: new Animated.Value(styles.$textSize),
        }
    }

    componentDidMount() {
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.keyboardDidShowListener = Keyboard.addListener(
            `keyboard${name}Show`,
            this.keyboardWillShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            `keyboard${name}Hide`,
            this.keyBoardWillHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardWillShow = () => {
        Animated.timing(this.state.textSize, {
            toValue: styles.$smallTextSize,
            duration: ANIMATION_DURATION,
        }).start();
    };

    keyBoardWillHide = () => {
        Animated.timing(this.state.textSize, {
            toValue: styles.$textSize,
            duration: ANIMATION_DURATION,
        }).start();
    };



    render() {
        const textStyle = [
            styles.text,
            { fontSize: this.state.textSize },
        ];
        const containerStyles = [styles.container,
            {flex: this.props.flexAmount}
        ];

        return (
            <View style={containerStyles}>
                <Animated.Text style={textStyle}>{this.props.displayText}</Animated.Text>
            </View>
        );

    }
}

const styles = EStyleSheet.create({
    $textSize: TEXT_SIZE,
    $smallTextSize: TEXT_SIZE / 2,

    container: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'baseline',
    },
    text: {
        color: '$gray',
        fontWeight: 'bold'
    }
});

export default Header;
