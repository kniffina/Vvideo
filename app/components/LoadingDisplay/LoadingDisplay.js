import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const LoadingDisplay = ({ loadingText, explainText }) => {
    return (
        <View style={styles.cotainer}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingContacts}>Loading {loadingText} .... </Text>
            { explainText ?  <Text style={styles.otherText}>This may take a moment</Text> : null }
        </View>
    );
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContacts: {
        fontSize: 60,
        padding: 5,
    },
    otherText: {
        fontSize: 40,
        padding: 5,
    }

});

export default LoadingDisplay;
