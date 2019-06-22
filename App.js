import { YellowBox } from 'react-native'
import React, { Component } from 'react';
import AppContainer from './src/Navigation/Route'

export default class App extends Component {

  render() {
    YellowBox.ignoreWarnings(['ViewPagerAndroid']);
    return (
        <AppContainer />
    );
  }
}




