import React from 'react';
import { View, TextInput, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const InputText = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                underlineColorAndroid="transparent"
                style={styles.textInput}
                {...props}
            />
        </View>
    );
};

const styles = EStyleSheet.create({
    inputContainer: {
        borderBottomColor: '$inputBorder',
        height: 40,
        flexDirection: 'row',
        marginVertical: 11,
        borderBottomWidth: 2,
        width: '70%',
    },
    textInput: {
        flex: 1,
        height: 50,
        fontSize: 18,
        color: '$inputText',
    },
});

export default InputText;
