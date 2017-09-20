import React from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const DrawerButton = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={()=> navigation.navigate('DrawerOpen')}>
            <Icon name="menu" size={30} style={styles.menuButton}/>
        </TouchableOpacity>
    );
};

const styles = EStyleSheet.create({

    menuButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },

});

export default DrawerButton;
