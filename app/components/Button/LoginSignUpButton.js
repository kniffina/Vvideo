import React from 'react';
import { View, Text, TouchableOpacity} from  'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const LoginSignUpButton = ({ flexAmount, buttonText, onPress }) => {
    const buttonViewStyle = [styles.buttonView];

    if(flexAmount) {
        buttonViewStyle.push({flex: flexAmount})
    }

    return (
        <View style={buttonViewStyle}>
            <TouchableOpacity
                style={styles.buttonValue}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = EStyleSheet.create({
    buttonValue: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        width: 200,
        borderRadius: 100,
        backgroundColor: '$primaryBlue',
    },
    buttonText: {
        color: '$white',
        fontSize: 26,
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default LoginSignUpButton;
