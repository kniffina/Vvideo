import React from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';

const DrawerHeader = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Icon name="cog" size={20} />
            </TouchableOpacity>
        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        position: 'absolute',
        left: 10,
        top: 20,
        right: 10,
        '@media ios': {
            paddingTop: StatusBar.currentHeight,
        },
    },
    button: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    icon: {
        width: 18,
    },
});

export default DrawerHeader;
