

import React, { Component } from 'react'
import { Button, View, AsyncStorage, StyleSheet } from 'react-native'


class More extends Component {
    constructor() {
        super();
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <View style={[styles.container]}>
                <Button title="Sign me Out :)" onPress={this._signOutAsync} />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})


export default More;