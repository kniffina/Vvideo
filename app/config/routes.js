import { StatusBar, Animated, Easing } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import Entry from '../screens/Entry';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import AddContacts from '../screens/AddContacts';

import MainVideo from '../screens/MainVideo';
import ChallengeListScreen from '../screens/ChallengeListScreen';
import ViewFriendChallenges from '../screens/ViewFriendChallenges';

const drawerNavigator = DrawerNavigator(
    {
        AddContacts: {
            screen: AddContacts,
        }
    }
);

const MainNavigator = TabNavigator(
    {
        ViewFriendChallenges: {
            screen: ViewFriendChallenges,
            navigationOptions: {
                header: () => null,
                tabBarLabel: 'View Challenges',
            },
        },
        MainVideo: {
            screen: MainVideo,
            navigationOptions: {
                header: () => null,
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
                header: () => null,
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
        Entry: {
            screen: Entry,
            navigationOptions: {
                header: () => null,
            },
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: () => null,
            },
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                header: () => null,
            },
        },
        MainVideo: {
            screen: MainNavigator,
        },
        AddContacts: {
            screen: AddContacts,
            header: () => null,
        }

    },
    {
        mode: 'modal',
        cardStyle: { paddingTop: StatusBar.currentHeight },
    },

);


