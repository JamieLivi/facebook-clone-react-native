/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Image, View } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.searchbar}>
                    <View style={styles.searchBarItem}>
                        <Image style={styles.logo} source={require('./android/app/src/main/assets/icons/camera.png')} />
                    </View>
                    <View style={styles.searchBarItemInput}>
                        <View style={styles.logoSearch}>
                            <Image style={styles.logoSearchImage} source={require('./android/app/src/main/assets/icons/search.png')} />
                        </View>
                        <TextInput style={styles.searchBarInput} placeholderTextColor="#a1b3d9" placeholder='Cari' />
                    </View>
                    <View style={styles.searchBarItem}>
                        <Image style={styles.logo} source={require('./android/app/src/main/assets/icons/ngopi.png')} />
                    </View>
                </View>
                <View style={styles.menuBar}>
                    

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4267b2ff',
        height: 100,
        // flexDirection: 'column', 
        marginHorizontal: 0
    },
    searchbar: {
        flex: 1,
        flexDirection: 'row',

    },
    searchBarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBarItemInput: {
        flex: 5,
        flexDirection: 'row',
        borderColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 7,
        alignItems: 'center'
    },
    searchBarInput: {
        fontSize: 18,
        color: '#a1b3d9',
        height: 39,
        paddingBottom: 5,
        paddingLeft: 10
    },
    menuBar: {
        backgroundColor: 'white',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#a1b3d9'
    },
    logo: {
        width: 30,
        height: 30,

    },
    logoSearch: {
        marginTop: 7

    },
    logoSearchImage: {
        width: 20,
        height: 20

    }

})








