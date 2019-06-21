import React, { Component } from 'react';
import { StyleSheet, TextInput, Image, View, TouchableOpacity } from 'react-native';

export default class MenuTop extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    {/* Header */}
                    <View style={styles.searchbar}>

                        <View style={styles.searchBarItem}>
                            <TouchableOpacity>
                                <Image style={styles.logo} source={require('../android/app/src/main/assets/icons/camera.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchBarItemInput}>
                            <View style={styles.logoSearch}>
                                <Image style={styles.logoSearchImage} source={require('../android/app/src/main/assets/icons/search.png')} />
                            </View>
                            <TextInput style={styles.searchBarInput} placeholderTextColor="#a1b3d9" placeholder='Cari' />
                        </View>
                        <View style={styles.searchBarItem}>
                            <Image style={styles.logo} source={require('../android/app/src/main/assets/icons/ngopi.png')} />
                        </View>
                    </View>

                    {/* Menu Bar */}
                    <View style={styles.menuBar}>
                        <View style={styles.menuBarItem}>
                            <Image style={styles.logoMenuBar} source={require('../android/app/src/main/assets/icons/news.png')} />
                        </View>
                        <View style={styles.menuBarItem}>
                            <Image style={styles.logoMenuBar} source={require('../android/app/src/main/assets/icons/group.png')} />
                        </View>
                        <View style={styles.menuBarItem}>
                            <Image style={styles.logoMenuBar} source={require('../android/app/src/main/assets/icons/video.png')} />
                        </View>
                        <View style={styles.menuBarItem}>
                            <Image style={styles.logoMenuBar} source={require('../android/app/src/main/assets/icons/profile-active.png')} />
                        </View>
                        <View style={styles.menuBarItem}>
                            <Image style={styles.logoMenuBar} source={require('../android/app/src/main/assets/icons/notif.png')} />
                        </View>
                        <View style={styles.menuBarItem}>
                            <Image style={styles.logoMenuBar} source={require('../android/app/src/main/assets/icons/hamburger.png')} />
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#606770'
    },
    header: {
        backgroundColor: '#4267b2ff',
        height: 100,
        // flexDirection: 'column', 
        marginHorizontal: 0,
        flex: 1
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
    menuBarItem: { flex: 1, alignItems: 'center'},
    logo: {
        width: 30,
        height: 30,

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