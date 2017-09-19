import React, { Component } from 'react';
import { KeyboardAvoidingView, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import InputText from '../components/TextInput/InputText';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import LoginSignUpButton from '../components/Button/LoginSignUpButton';
import {
    emailChangeText,
    passwordChangeText,
    confirmPasswordChangeText,
    userSignUp,
    signUpFailed,
} from '../actions/LoginSignUp';
import { connectAlert } from '../components/Alert';


class SignUp extends Component {

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.errors.signUpFailed) {
            this.props.alertWithType('error', 'Error', nextProps.errors.signUpFailed);
        }

        //now check if success message
        if(nextProps.successMessage.signUpSuccess) {
            this.props.alertWithType('success', 'Success', nextProps.successMessage.signUpSuccess);
        }
    };

    checkPasswordsMatch = () => {
        if(this.props.password != this.props.confirmPassword) {
            this.props.signUpFailed('Your passwords do not match. Please check spelling and try again.');
        }
        else if(this.props.password.length < 6) {
            this.props.signUpFailed('Your password must be at least 6 characters. Please fix the error and submit.');
        }
        else {
            this.props.userSignUp(this.props.email, this.props.password, this.props.navigation);
        }
    };

    render() {
        return (
            <Container>
                <Header
                    flexAmount={.10}
                    displayText="Sign Up"
                />
                <KeyboardAvoidingView behavior="padding" style={styles.inputView}>
                    <InputText
                        onChangeText={this.props.emailChangeText}
                        textColor='$inputText'
                        editable={true}
                        value={this.props.email}
                        placeholder="EMAIL"
                    />
                    <View style={{marginTop: 5}} />
                    <InputText
                        onChangeText={this.props.passwordChangeText}
                        textColor='$inputText'
                        editable={true}
                        value={this.props.password}
                        secureTextEntry={true}
                        placeholder="PASSWORD"
                    />
                    <View style={{marginTop: 5 }} />
                    <InputText
                        onChangeText={this.props.confirmPasswordChangeText}
                        textColor='$inputText'
                        editable={true}
                        value={this.props.confirmPassword}
                        secureTextEntry={true}
                        placeholder="CONFIRM PASSWORD"
                    />
                </KeyboardAvoidingView>

                { this.props.isFetching ? <ActivityIndicator />:
                    <LoginSignUpButton
                        onPress={this.checkPasswordsMatch}
                        flexAmount={.20}
                        buttonText="Submit"
                    />
                }

            </Container>
        );
    }
}
const styles = EStyleSheet.create({
    inputView: {
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mapStateToprops = (state) => {
    return {
        email: state.LoginSignUp.email,
        password: state.LoginSignUp.password,
        confirmPassword: state.LoginSignUp.confirmPassword,
        isFetching: state.LoginSignUp.isFetching,
        errors: state.LoginSignUp.errors,
        successMessage: state.LoginSignUp.successMessage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        userSignUp: (email, password, navigation) => dispatch(userSignUp(email, password, navigation)),
        emailChangeText: (payload) => dispatch(emailChangeText(payload)),
        confirmPasswordChangeText: (payload) => dispatch(confirmPasswordChangeText(payload)),
        passwordChangeText: (payload) => dispatch(passwordChangeText(payload)),
        signUpFailed: (error) => dispatch(signUpFailed(error)),
    }
};

export default connect(mapStateToprops,mapDispatchToProps)(connectAlert(SignUp));
