import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    EMAIL_CHANGE_TEXT,
    PASSWORD_CHANGE_TEXT,
    CONFIRM_PASSWORD_CHANGE_TEXT,
    SIGNUP_FAILED,
    SIGNUP_SUCCESS,
    IS_FETCHING_TRUE,
    IS_FETCHING_FALSE,
} from '../constants/constants';

const initialState = {
    email: "",
    password: "",
    userId: "",
    confirmPassword: "",
    isFetching: true,
    errors: {},
    successMessage: {},
};

const loginSignUp = (state = initialState, action) => {
    switch (action.type) {

        case EMAIL_CHANGE_TEXT:
            return {
                ...state,
                email: action.payload,
                errors: {},
                successMessage: {},
            };


        case PASSWORD_CHANGE_TEXT:
            return {
                ...state,
                password: action.payload,
                errors: {},
                successMessage: {},
            };


        case CONFIRM_PASSWORD_CHANGE_TEXT:
            return {
                ...state,
                confirmPassword: action.payload,
                errors: {},
                successMessage: {},
            };


        case LOGIN_SUCCESS:
            return {
                ...state,
                errors: {},
                userId: action.payload.uid,
                successMessage: { loginSuccess: 'Login Successful. You are now logged into your account.' },
            };

        case LOGIN_FAILED:
            return {
                ...state,
                errors: { loginFailed: 'The email and password combination does not match our records. Please check your spelling and try again.' },
                successMessage: {},
            };

        case SIGNUP_SUCCESS:
            return {
                ...state,
                userId: action.payload.uid,
                errors: {},
                successMessage: { signUpSuccess: 'Sign Up Successful. Your account has been created.' },
            };

        case SIGNUP_FAILED:
            return {
                ...state,
                errors: { signUpFailed: action.payload },
                successMessage: {},
            };

        case IS_FETCHING_TRUE:
            return {
                ...state,
                isFetching: true,
            };

        case IS_FETCHING_FALSE:
            return {
                ...state,
                isFetching: false,
            };

        default:
            return state;

    }
};

export default loginSignUp;
