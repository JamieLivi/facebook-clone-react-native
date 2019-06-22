import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';




export default class TabIcon extends Component {
    render () {
        return (
        <View style={styles.menuBarItem} >
            <Image style={styles.logoMenuBar} source={this.props.icon} />
        </View >

        )
    }

}

const styles = StyleSheet.create({
    menuBar: {
        backgroundColor: 'white',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#a1b3d9',
        alignItems: 'center',
        flexDirection: 'row'
    },
    menuBarItem: { flex: 1, alignItems: 'center' },
    logo: {
        width: 30,
        height: 30,

    },
    logoMenuBar: {
        width: 28,
        height: 28,

    },
})