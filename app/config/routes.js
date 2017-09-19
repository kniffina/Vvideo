import React from 'react';
import { StatusBar, Text } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Entry from '../screens/Entry';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import AddContacts from '../screens/AddContacts';
import MainVideo from '../screens/MainVideo';
import ChallengeListScreen from '../screens/ChallengeListScreen';
import ViewFriendChallenges from '../screens/ViewFriendChallenges';
import Settings from '../screens/Settings';

const DrawerIcon = ({ navigate }) => {
    return (
        <Icon
            name="md-menu"
            size={28}
            style={{ paddingLeft: 20 }}
            onPress={() => navigate('DrawerOpen')}
        />
    );
};

const Drawer = DrawerNavigator({
    AddContacts: { screen: AddContacts, },
    Settings: { screen: Settings , },
});

const MainNavigator = TabNavigator(
    {
        ViewFriendChallenges: {
            screen: ViewFriendChallenges,
            navigationOptions: {
                tabBarLabel: 'View Challenges',
            },
        },
        MainVideo: {
            screen: MainVideo,
            navigationOptions: {
                tabBarLabel: 'Record Video',
                // tabBarIcon: ({ tintColor }) => (
                //   <Image
                //     source={require('./notif-icon.png')}
                //     style={[styles.icon, {tintColor: tintColor}]}
                //   />
                // ),
            },
        },
        ChallengeListScreen: {
            screen: ChallengeListScreen,
            navigationOptions: {
                tabBarLabel: 'Watch Challenges',
            },
        },

    },
    {
        mode: 'default',
        headerMode: 'none',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            inactiveBackgroundColor: '#2196F3',
            inactiveTintColor: '#FFFFFF',
            activeBackgroundColor: '#1565C0',
            activeTintColor: '#FFFFFF',
            labelStyle: {
                fontSize: 14,
                padding: 5,

            },
            style: {
                height: 70,
            }
        },

    }
);



export default AppNavigator = StackNavigator(
    {
        Entry: { screen: Entry,  navigationOptions: { header: () => null, }, },
        Login: { screen: Login,  navigationOptions: { header: () => null, }, },
        SignUp: { screen: SignUp, navigationOptions: { header: () => null, }, },
        MainVideo: {
            screen: MainNavigator,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen') }>Menu</Text>,
            }),
        },
        AddContacts: {
            screen: AddContacts,
            header: () => null,
        },
        Drawer: {
            screen: Drawer,
        }
    },
    {
        mode: 'modal',
    },

);





