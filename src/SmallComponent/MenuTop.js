import React, { Component } from 'react';
import { StyleSheet, TextInput, Image, View, TouchableOpacity } from 'react-native';

const cameraLightIcon = require('../assets/icon/camera-light.png')
const searchIcon = require('../assets/icon/search.png')
const drinkIcon = require('../assets/icon/drink.png')

export default class MenuTop extends Component {
    render() {
        return (
                    <View style={styles.searchbar}>

                        <View style={styles.searchBarItem}>
                            <TouchableOpacity>
                                <Image style={styles.logo} source={cameraLightIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.searchBarItemInput}>
                            <View style={styles.logoSearch}>
                                <Image style={styles.logoSearchImage} source={searchIcon} />
                            </View>
                            <TextInput style={styles.searchBarInput} placeholderTextColor="#a1b3d9" placeholder='Cari' />
                        </View>
                        <View style={styles.searchBarItem}>
                            <Image style={styles.logo} source={drinkIcon} />
                        </View>
                    </View>

        )
    }
}
const styles = StyleSheet.create({
    searchbar: {
        flexDirection: 'row',
        backgroundColor: '#4267b2ff',
        marginHorizontal: 0,

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
        paddingBottom: 2,
        paddingLeft: 10
    },
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
        width: 28,
        height: 28,

    },
    logoMenuBar: {
        width: 28,
        height: 28,

    },
    logoSearch: {
        marginTop: 7

    },
    logoSearchImage: {
        width: 20,
        height: 20

    }

})