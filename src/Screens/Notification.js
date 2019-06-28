import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { withNavigation } from 'react-navigation'

class Notification extends Component {


    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text>This Is Notification</Text>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="Click Me" >

                </Button>
            </View>
        );
    }
}
export default withNavigation(Notification)