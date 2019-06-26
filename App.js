import { YellowBox } from 'react-native'
import React, { Component } from 'react';
import AppContainer from './src/Navigation/Route'

export default class App extends Component {

  render() {
    YellowBox.ignoreWarnings(['ViewPagerAndroid', 'Warning: Async Storage has been extracted from react-native core']);
    return (
        <AppContainer />
    );
  }
}




