import React from 'react';
import { TouchableWithoutFeedback , Keyboard, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Container = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Container;
