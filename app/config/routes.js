import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import DrawerButton from '../components/DrawerButton/DrawerButton';

import Entry from '../screens/Entry';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import AddContacts from '../screens/AddContacts';
import MainVideo from '../screens/MainVideo';
import ChallengeListScreen from '../screens/ChallengeListScreen';
import ViewFriendChallenges from '../screens/ViewFriendChallenges';
import Settings from '../screens/Settings';


const MainNavigator = TabNavigator(
    {
        ViewFriendChallenges: {
            screen: ViewFriendChallenges,
            navigationOptions: {
                tabBarLabel: 'Vote on\nFriends',
                tabBarIcon: () => {return ( <Icon name="check" size={20} color="white"/> ) },
            },
        },
        MainVideo: {
            screen: MainVideo,
            navigationOptions: {
                tabBarLabel: 'Record\nVideo',
                tabBarIcon: () => { return ( <SimpleLineIcons name="camrecorder" size={20} color="white"/> ) },
            },
        },
        ChallengeListScreen: {
            screen: ChallengeListScreen,
            navigationOptions: {
                tabBarLabel: 'View Your\nChallenges',
                tabBarIcon: () => { return ( <Icon name="list" size={20} color="white"/> ) },

            },
        },

    }, {
        mode: 'default', headerMode: 'none', swipeEnabled: true,
        animationEnabled: true, tabBarPosition: 'bottom',
        tabBarOptions: {
            inactiveBackgroundColor: '#2196F3', inactiveTintColor: '#FFFFFF',
            activeBackgroundColor: '#1565C0', activeTintColor: '#FFFFFF',
            labelStyle: {
                fontSize: 13,
            },
            style: { height: 80,  },
            showIcon: true,
        },
    }
);

const InnerStack = StackNavigator(
    {
        MainVideo: { screen: MainNavigator, banner: 'Home' },
        Settings: { screen: Settings, navigationOptions: { title: 'Settings' } },
        AddContacts: { screen: AddContacts, navigationOptions: { title: 'Add Contacts'} },
    },{
        mode: 'modal',
        navigationOptions: ({ navigation }) => ({
            headerRight: <DrawerButton navigation={navigation}/>,
        })
    }
);

const Drawer = DrawerNavigator({
    Home: { screen: InnerStack, navigationOptions: { drawerIcon: <Icon name="home" size={20} />} },
    Settings: { screen: InnerStack, navigationOptions: { drawerIcon: <Icon name="cog" size={20} /> } },
    AddContacts: { screen: InnerStack, navigationOptions: { drawerLabel: 'Add Contacts', drawerIcon: <Ionicon name="md-contacts" size={20} />, }, },
});



export default AppNavigator = StackNavigator(
    {
        Entry: { screen: Entry },
        Login: { screen: Login },
        SignUp: { screen: SignUp },
        MainVideo: { screen: Drawer },
        AddContacts: { screen: AddContacts },

    }, {
        mode: 'modal',
        headerMode: 'none',
    }
);
