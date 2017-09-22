import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const LoadingDisplay = ({ loadingText, explainText }) => {
    return (
        <View style={styles.cotainer}>
            <Text style={styles.loadingContacts}>Loading {loadingText}</Text>
            { explainText ?  <Text style={styles.otherText}>{ explainText }</Text> : null }
            <ActivityIndicator size="large" style={styles.activityLoader}/>
        </View>
    );
}

const styles = EStyleSheet.create({
    loadingContacts: {
        fontSize: 40,
        padding: 5,
    },
    otherText: {
        fontSize: 25,
        padding: 5,
    },
    activityLoader: {
        marginTop: 40,
    }

});

export default LoadingDisplay;
