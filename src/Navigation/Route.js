
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import TabIcon from '../SmallComponent/TabIcon';
import React, { Component } from 'react';
const homeIcon = require('../assets/icon/home.png')

const HomeTabIcon = ( ) => (
    <TabIcon icon={homeIcon} />
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
            screen: Profile,
            navigationOptions: { header: null, title: 'Friend' }
        },
        GroupScreen: {
            screen: Home,
            navigationOptions: { header: null, title: 'Group' }
        },

        ProfileScreen: {
            screen: Profile,
            navigationOptions: { header: null, title: 'Profile' }
        },
        NotificationScreen: {
            screen: Profile,
            navigationOptions: { header: null, title: 'Notification' }
        },
        MoreScreen: {
            screen: Profile,
            navigationOptions: { header: null, title: 'More' }
        },
       
    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
            // activeTintColor: AppStyles.colors.accentColor,
            // inactiveTintColor: AppStyles.colors.inactiveGreyColor,
            // pressColor: AppStyles.colors.lightGreyCOlor,
            showLabel : false,
            showIcon : true,
            labelStyle: {
                fontWeight: 'bold',
                // fontSize: Platform.OS === 'ios' ? 11 : 12,
                // fontFamily: AppStyles.fonts.FONT_MEDIUM
            },
            indicatorStyle: {
                // backgroundColor: AppStyles.colors.accentColor
            },
            style: {
                backgroundColor: '#fff'
            }
        }
    }
)

const AppNavigator = createStackNavigator(
    {
        LoginScreen: {
            screen: Login,
            navigationOptions: { gesturesEnabled: false, header: null }
        },
        MainScreen: {
            screen: MenuTopTabNavigation,
            navigationOptions: { gesturesEnabled: false, header: null }
        },
    },
    {
        initialRouteName: "LoginScreen",
        defaultNavigationOptions: {
            header: null
        }
    }
);



const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;