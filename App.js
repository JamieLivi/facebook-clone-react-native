/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Container, Content, StyleProvider } from 'native-base';
import Login from './Login';
import Profile from './Profile';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
            <Profile />
      </StyleProvider>
    );
  }
}








