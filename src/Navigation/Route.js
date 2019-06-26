
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator, createSwitchNavigator } from "react-navigation";
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import More from '../Screens/More';
import Notification from '../Screens/Notification';
import TabIcon from '../SmallComponent/TabIcon';
import MenuTop from '../SmallComponent/MenuTop';
import AuthLoading from '../SmallComponent/AuthLoading'
import React, { Component } from 'react';
import FriendRequest from "../Screens/FriendRequest";

//Icons Courtesy By : Chandra Pack not Aqil Pack
const homeIcon = require('../assets/icon/home.png')
const homeActiveIcon = require('../assets/icon/home-active.png')
const friendIcon = require('../assets/icon/friend-request.png')
const friendActiveIcon = require('../assets/icon/friends-active.png')
const groupIcon = require('../assets/icon/group.png')
const groupActiveIcon = require('../assets/icon/group-active.png')
const profileIcon = require('../assets/icon/profile.png')
const profileActiveIcon = require('../assets/icon/profile-active.png')
const notifIcon = require('../assets/icon/notification.png')
const notifActiveIcon = require('../assets/icon/notification-active.png')
const moreIcon = require('../assets/icon/more.png')
const moreActiveIcon = require('../assets/icon/more-active.png')

const HomeTabIcon = ({ focused }) => (
    <TabIcon icon={focused ? homeActiveIcon : homeIcon} />
);
const FriendTabIcon = ({ focused }) => (
    <TabIcon icon={focused ? friendActiveIcon : friendIcon} />
);
const GroupTabIcon = ({ focused }) => (
    <TabIcon icon={focused ? groupActiveIcon : groupIcon} />
);
const ProfileTabIcon = ({ focused }) => (
    <TabIcon icon={focused ? profileActiveIcon : profileIcon} />
);
const NotifTabIcon = ({ focused }) => (
    <TabIcon icon={focused ? notifActiveIcon : notifIcon} />
);
const MoreTabIcon = ({ focused }) => (
    <TabIcon icon={focused ? moreActiveIcon : moreIcon} />
);
// const SearchBar = ( ) => (
//     <Testo />
// );
const SearchBar = () => (
    <MenuTop />
);

const MenuTopTabNavigation = createMaterialTopTabNavigator(
    {
        HomeScreen: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: HomeTabIcon
            }
        },

        FriendScreen: {
            screen: FriendRequest,
            navigationOptions: {
                tabBarIcon: FriendTabIcon
            }
        },
        GroupScreen: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: GroupTabIcon
            }
        },

        ProfileScreen: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ProfileTabIcon
            }
        },
        NotificationScreen: {
            screen: Notification,
            navigationOptions: {
                tabBarIcon: NotifTabIcon
            }
        },
        MoreScreen: {
            screen: More,
            navigationOptions: {
                tabBarIcon: MoreTabIcon
            }
        },

    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            indicatorStyle: {
                backgroundColor: 'transparent'
            },
            style: {
                backgroundColor: '#fff'
            }
        }
    }
)

const AppStack = createStackNavigator(
    {
        MainScreen: {
            screen: MenuTopTabNavigation,
            navigationOptions: { gesturesEnabled: false }
        },
    },
    {
        initialRouteName: "MainScreen",
        defaultNavigationOptions: {
            header: SearchBar,
            headerStyle: {
                backgroundColor: '#FF5733',
                flex: 0.2
            },

        }
    }
);

const AuthStack = createStackNavigator(
    {
        LoginScreen: {
            screen: Login,
            navigationOptions: { gesturesEnabled: false, header: null }
        }
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
)



const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: AuthStack,
        App: AppStack,
    },
    {

        initialRouteName: 'AuthLoading',
        resetOnBlur: true,
    }
));

export default AppContainer;