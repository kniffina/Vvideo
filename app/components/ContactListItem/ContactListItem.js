import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const ContactListItem = ({ fullName, buttonText, onPress}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>
                {fullName}
            </Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
                {buttonText}
            </TouchableOpacity>

        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    },
    nameText: {
        fontSize: 16,
    },
    buttonStyle: {
        backgroundColor: '$primaryBlue',
        borderRadius: 200,
        height: 30,
    },

});

export default ContactListItem;
