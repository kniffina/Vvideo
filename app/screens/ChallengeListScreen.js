import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class ChallengeListScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 50}}>Challenge List Screen</Text>
            </View>
        );
    }
}

const styles = EStyleSheet.create({

});

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeListScreen);
