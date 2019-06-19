/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import { Container, Content, StyleProvider } from 'native-base';
import Login from './Login';
import Profile from './Profile';
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

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details')
          }}
        />
      </View>
    );
  }
}
class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => {
            this.props.navigation.navigate('Home')
          }}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Details: DetailsScreen,
    Home: HomeScreen,
    Profile: Profile
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions : {
      header: null
    }
  }
);
const AppContainer = createAppContainer(AppNavigator);




