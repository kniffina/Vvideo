import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    PASSWORD_CHANGE_TEXT,
    EMAIL_CHANGE_TEXT,
    CONFIRM_PASSWORD_CHANGE_TEXT,
    SIGNUP_FAILED,
    SIGNUP_SUCCESS,
    IS_FETCHING_TRUE,
    IS_FETCHING_FALSE,
} from '../constants/constants';
import { NavigationActions } from 'react-navigation';
import { firebaseRef } from '../services/Firebase';
import * as Firebase from 'firebase';

export const getContacts = () => {
    return function(dispatch) {

    }
};

export const checkIfUserLoggedIn = (navigation) => {
    return function (dispatch) {
        firebaseRef.auth().onAuthStateChanged(function (user) {
            if (user) {
                dispatch(sendUserToMain(navigation));
            }
            else {
                dispatch(setFetchingFalse());
            }
        });
        // dispatch(setFetchingFalse());
    }
};

export const attemptUserLogin = (email, password, navigation) => {
    return function(dispatch) {
        dispatch(setFetchingTrue());
        firebaseRef.auth().signInWithEmailAndPassword(email, password)
            .then(function(response) {
                dispatch(loginSuccess(response));
            })
            .then(function() {
                dispatch(sendUserToMain(navigation));
            })
            .catch(function(error) {
                dispatch(loginFailed(error));
                dispatch(setFetchingFalse());
            });
    }
};

export const sendUserToMain = (navigation) => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'MainVideo'}),
        ]
    });
    return navigation.dispatch(resetAction);

};

export const sendUserAddContacts = (navigation) => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'AddContacts'}),
        ]
    });
    return navigation.dispatch(resetAction);
};

export const userSignUp = (email, password, navigation) => {
    return function(dispatch) {

        dispatch(setFetchingTrue());
        firebaseRef.auth().createUserWithEmailAndPassword(email, password)
            .then(function(response) {
                Firebase.database().ref('users/' + response.uid).set({
                    email: email,
                    password: password,
                    userId: response.uid,
                    contacts: [],
                });
                dispatch(signUpSuccess(response));
            })
            .then(function() {
                dispatch(sendUserAddContacts(navigation));
            })
            .catch(function(error) {
                dispatch(signUpFailed(error));
                dispatch(setFetchingFalse());
            });
        }
};

export const signUpFailed = (error) => {
    return {
        type: SIGNUP_FAILED,
        payload: error,
    }
};

export const signUpSuccess = (response) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: response,
    }
};

export const loginSuccess = (response) => {
    return {
        type: LOGIN_SUCCESS,
        payload: response,
    }
};

export const loginFailed = (error) => {
    return {
        type: LOGIN_FAILED,
        payload: error,
    }
};


export const emailChangeText = (payload) => {
    return {
        type: EMAIL_CHANGE_TEXT,
        payload: payload,
    }
};

export const passwordChangeText = (payload) => {
    return {
        type: PASSWORD_CHANGE_TEXT,
        payload: payload,
    }
};

export const confirmPasswordChangeText = (payload) => {
    return {
        type: CONFIRM_PASSWORD_CHANGE_TEXT,
        payload: payload,
    }
};

export const setFetchingTrue = () => {
    return {
        type: IS_FETCHING_TRUE,
    }
};

export const setFetchingFalse = () => {
    return {
        type: IS_FETCHING_FALSE,
    }
};
