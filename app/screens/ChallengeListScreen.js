import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class ChallengeListScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={{fontSize: 50}}>Challenge List</Text>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
        '@media android': {
            marginTop: -StatusBar.currentHeight,
        }
    }
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
