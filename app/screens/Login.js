import React, { Component } from 'react';
import {  KeyboardAvoidingView, View, ActivityIndicator } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { connectAlert } from '../components/Alert';
import { attemptUserLogin, passwordChangeText, emailChangeText } from '../actions/LoginSignUp';
import Container from '../components/Container/Container';
import InputText from '../components/TextInput/InputText';
import LoginSignUpButton from '../components/Button/LoginSignUpButton';
import Header from '../components/Header/Header';

class Login extends Component {
    componentWillReceiveProps = (nextProps) => {
        if(nextProps.errors.loginFailed) {
            this.props.alertWithType('error', 'Error', nextProps.errors.loginFailed);
        }

        //now check if success message
        if(nextProps.successMessage.loginSuccess) {
            this.props.alertWithType('success', 'Success', nextProps.successMessage.loginSuccess)
        }
    };

    render() {
        return (
            <Container>
                <Header
                    displayText="Login"
                    flexAmount={.25}
                />
                <KeyboardAvoidingView behavior="padding" style={styles.inputView}>

                    <InputText
                        onChangeText={this.props.emailChangeText}
                        textColor='$inputText'
                        editable={true}
                        value={this.props.email}
                        placeholder="EMAIL"
                    />
                    <View style={{marginTop: 20}}/>
                    <InputText
                        onChangeText={this.props.passwordChangeText}
                        textColor='$inputText'
                        editable={true}
                        value={this.props.password}
                        placeholder="PASSWORD"
                        secureTextEntry={true}
                    />
                </KeyboardAvoidingView>


                { this.props.isFetching ? <ActivityIndicator /> :
                    <LoginSignUpButton
                        flexAmount={.3}
                        buttonText="Submit"
                        onPress={() => this.props.attemptUserLogin(this.props.email, this.props.password, this.props.navigation)}
                    />
                }
            </Container>
        );
    }
}

const styles = EStyleSheet.create({
    inputView: {
        flex: .40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mapStateToProps = (state) => {
    return {
        email: state.LoginSignUp.email,
        password: state.LoginSignUp.password,
        isFetching: state.LoginSignUp.isFetching,
        errors: state.LoginSignUp.errors,
        successMessage: state.LoginSignUp.successMessage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        attemptUserLogin: (email, password, navigation) => dispatch(attemptUserLogin(email, password, navigation)),
        emailChangeText: (payload) => dispatch(emailChangeText(payload)),
        passwordChangeText: (payload) => dispatch(passwordChangeText(payload)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(connectAlert(Login));
