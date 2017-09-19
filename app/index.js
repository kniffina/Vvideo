import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppNavigator from './config/routes';
import store from './config/store';
import { Provider } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { AlertProvider } from './components/Alert';


EStyleSheet.build({
    $primaryBlue: '#2979FF',
    $white: '#FFFFFF',
    $secondaryRed: '#FF1744',
    $secondaryPurple: '#6A1B9A',

    $lightGray: '#F0F0F0',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $darkText: '#343434',
    $gray: '#616161',
    $inputBorder: '#9E9E9E',
    $darkerGray: '#424242'
});

const App = ({ dispatch, nav }) => (
    <AppNavigator
        navigation={addNavigationHelpers({
            dispatch,
            state: nav,
        })}
    />
);

const mapStateToProps = (state) => {
    return {
        nav: state.nav,
    }
};
const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
    <Provider store={store}>
        <AlertProvider>
            <AppWithNavigation />
        </AlertProvider>
    </Provider>
);
