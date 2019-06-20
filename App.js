/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Content, StyleProvider } from 'native-base';
import Login from './Login';
import Profile from './Component/Profile';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import { createStackNavigator, createAppContainer } from "react-navigation";

export default class App extends Component {

  render() {
    return (
      <StyleProvider style={getTheme(material)}>

        <AppContainer />
        
      </StyleProvider>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Profile: Profile
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions : {
      header: null
    }
  }
);
const AppContainer = createAppContainer(AppNavigator);




