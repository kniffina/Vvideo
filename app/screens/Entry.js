import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { checkIfUserLoggedIn } from '../actions/LoginSignUp';



class Entry extends Component {

    componentWillMount = () => {
        this.props.checkIfUserLoggedIn(this.props.navigation);
    };

    navigateLogin = () => {
        this.props.navigation.navigate('Login');
    };

    navigateSignUp = () => {
        this.props.navigation.navigate('SignUp');
    };
    render() {
        return (
            this.props.isFetching ? <ActivityIndicator /> :
                <View style={styles.container}>
                    <View style={styles.loginContainer}>
                        <Text style={styles.entryText}>Vvideo</Text>
                    </View>
                    < TouchableOpacity style={styles.loginBackground} onPress={this.navigateLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUpBackground} onPress={this.navigateSignUp}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        '@media android': {
            marginTop: -StatusBar.currentHeight,
        }
    },
    loginContainer: {
        flex: .7,
        backgroundColor: '$primaryBlue',
        justifyContent: 'center',
        alignItems: 'center',

    },
    entryText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 65,
        color: '$white',
        fontWeight: 'bold'
    },
    loginBackground: {
        flex: .15,
        backgroundColor: '$secondaryRed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpBackground: {
        flex: .15,
        backgroundColor: '$secondaryPurple',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '$white',
        fontSize: 35,
        fontWeight: 'bold'


    },
});

const mapStateToProps = (state) => {
    return {
        isFetching: state.LoginSignUp.isFetching,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkIfUserLoggedIn: (navigation) => dispatch(checkIfUserLoggedIn(navigation)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
