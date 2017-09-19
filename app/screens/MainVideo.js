import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class MainVideo extends Component {
    componentDidMount = () => {

    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 50}}>Main Video Capture</Text>
            </View>
        );
    }
}

const styles = EStyleSheet.create({

});

const mapStateToProps = (state) => {
    return {
        isFetching: state.LoginSignUp.isFetching,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainVideo);
