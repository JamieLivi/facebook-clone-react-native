import React, { Component } from 'react';
import { StatusBar as Status } from 'react-native';

class StatusBar extends Component {
    render() {
        return (
            <Status barStyle="light-content" backgroundColor={this.props.color} />
        );
    }
}