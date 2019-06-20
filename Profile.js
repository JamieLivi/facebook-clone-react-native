
import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Image, ImageBackground, View, TouchableOpacity, Alert, Button } from 'react-native';
import MenuTop from './MenuTop';
import { Icon } from 'react-native-elements'

const showAlert = () => {
    Alert.alert(
        'Maaf Belum Bisa Apa2'
    )
}

const userData = require('./dummyData/user.json')
const friendlistData = require('./dummyData/friendList.json')

export default class Profile extends Component {
   
    render() {
        return (

            <View style={styles.Container}>
                <ScrollView
                    stickyHeaderIndices={[0]}
                >
                    <MenuTop style={styles.stickMenuTop} />
                    <View style={styles.body}>
                        <View style={styles.banner}>
                            <Image style={styles.bannerImage} source={require('./android/app/src/main/assets/img/loginhead.png')} />
                        </View >
                        <View style={styles.profilePictureContainer}>
                            <View style={styles.profilePicture}>

                            </View>
                        </View>
                        <View style={styles.profileInformationContainer}>
                            <Text style={[styles.profileInformation, styles.fontBold22]} >
                                Rahadian Permana
                                </Text>
                            <Text style={styles.profileInformation}>Ini Status Saya, Bukan Status Anda, Atau Mereka</Text>
                        </View>
                        <View style={styles.profileMenuButton}>
                            <ButtonCircleText buttonName='Add Story' name='add' type='material' color='#427df4' />
                            <ButtonCircleText buttonName='View As' name='visibility' type='material' color='#1e1f21' />
                            <ButtonCircleText buttonName='Edit Profile' name='user' type='font-awesome' color='#1e1f21' />
                            <ButtonCircleText buttonName='More' name='dots-horizontal' type='material-community' color='#1e1f21' />
                        </View>
                        <View style={styles.profileStatusWrapper}>
                            <ProfileStatus />
                        </View>
                        <View style={styles.groupImageItemWrapper}>
                            {userData.map((item, key) => {
                                return (
                                    <ImageBackground
                                        key={key}
                                        resizeMode='cover'
                                        style={styles.groupImageItem}
                                        source={{ uri: item.avatar }}>
                                        <Text style={styles.groupImageItemText}>Group</Text>
                                        <ButtonCircle name='users' type='font-awesome' color='#1e1f21' />
                                    </ImageBackground >
                                );
                            })}
                        </View>
                    </View>
                    <View style={styles.buttonEditProfileWrapper}>
                        <ButtonEditProfile />
                    </View>
                    <VerticalLine />
                    
                    <View style={styles.friendsCardWrapper}>
                        <View style={[styles.friendsCardHeader]}>
                            <Text style={styles.fontBold22}>Teman</Text>
                            <Text style={[styles.fontBold22, { color: '#1879f7' }]}>Cari Teman</Text>
                        </View>
                        <View style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            marginTop: 5
                        }}>
                            <Text style={[styles.font22, { flexDirection: 'row' }]}>500 Teman</Text>
                        </View>
                        <View style={{justifyContent: 'space-around', alignContent: 'flex-start' ,flexDirection: 'row' ,flex :1, flexWrap: 'wrap',marginHorizontal: 0}}>
                            {friendlistData.results.slice(0, 6).map((item, key) => {
                                
                                return (
                                    <View key={key} style={{justifyContent: 'center'}}>
                                        <ImageBackground
                                            
                                            resizeMode='cover'
                                            style={[styles.friendImageItem]}
                                            source={{ uri: item.picture.medium }}>

                                        </ImageBackground >
                                        <Text style={[styles.friendImageItemText,{fontSize: 20,textAlign: 'center'}]}>{item.name.first}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

class ButtonCircle extends Component {
    render() {
        return (
            <TouchableOpacity onPress={showAlert} style={{ alignItems: 'center' }}>
                <View style={styles.myCircleButtonGroup}>
                    <Icon
                        name={this.props.name}
                        type={this.props.type}
                        color={this.props.color}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}

const VerticalLine = () => {
    return (
        <View style={{
            width: '100%',
            backgroundColor: '#e3e3e3',
            height: 3,
            flexDirection: 'row',
            marginTop: 9
        }}></View>
    )
}

const ButtonEditProfile = () => {
    return (
        <TouchableOpacity onPress={() => {/* do this */ }}>
            <View style={{
                backgroundColor: '#e7f3ff', alignItems: 'center',
                justifyContent: 'center', borderRadius: 15, flex: 1, width: 340, height: 50
            }}
            >
                <Text style={{ fontSize: 20, color: '#1879f7' }}>Edit Public Detail</Text>
            </View>
        </TouchableOpacity>
    )
}
class ButtonCircleText extends Component {
    render() {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={showAlert} style={{ alignItems: 'center' }}>
                    <View style={styles.myCircleButton}>
                        <Icon
                            name={this.props.name}
                            type={this.props.type}
                            color={this.props.color}
                        />
                    </View>
                    <Text style={{ color: this.props.color }}>{this.props.buttonName}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

class ProfileStatus extends Component {
    render() {
        return (
            <View style={styles.profileStatusContainer}>
                <View style={styles.profileStatusItem}>
                    <Icon name='home' type='font-awesome' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        Tinggal di <Text style={styles.profileStatusItemTextBold}>Kota Bandung</Text>
                    </Text>
                </View>
                <View style={styles.profileStatusItem}>
                    <Icon name='place' type='material' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        Dari <Text style={styles.profileStatusItemTextBold}>Daerah Khusus Ibu Kota Jakarta</Text>
                    </Text>
                </View>
                <View style={styles.profileStatusItem}>
                    <Icon name='heart' type='material-community' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        Berpacaran dengan <Text style={styles.profileStatusItemTextBold}>Dirinya Sendiri</Text>
                    </Text>
                </View>
                <View style={styles.profileStatusItem}>
                    <Icon name='id-card' type='font-awesome' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        Diikuti oleh <Text style={styles.profileStatusItemTextBold}>13 Juta Orang</Text>
                    </Text>
                </View>
                <View style={styles.profileStatusItem}>
                    <Icon name='instagram' type='material-community' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        itsmerahadian
                    </Text>
                </View>
                <View style={styles.profileStatusItem}>
                    <Icon name='github-circle' type='material-community' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        rahadian347
                    </Text>
                </View>
                <View style={styles.profileStatusItem}>
                    <Icon name='dots-horizontal' type='material-community' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        See Information About You
                    </Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    body: {
        // backgroundColor: 'red',
        flex: 5,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,

    },
    banner: {
        height: 200,
        marginHorizontal: 15,
        marginTop: 15,
        justifyContent: 'flex-start'
    },
    bannerImage: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: '100%',
        width: '100%'

    },
    profilePictureContainer: {
        // backgroundColor: 'green',
        height: 110,
        position: 'relative'
    },
    profilePicture: {
        backgroundColor: 'white',
        height: 180,
        width: 180,
        position: 'absolute',
        borderRadius: 90,
        borderWidth: 6,
        borderColor: '#427df4',
        right: 0,
        left: 90,
        bottom: 0,
        top: -80
    },
    profileInformationContainer: {
        // backgroundColor: 'teal',
        height: 80,
        position: 'relative',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginHorizontal: 30
    },
    profileInformation: {
        textAlign: 'center',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginBottom: 20
    },
    myCircleButton: {
        height: 60,
        width: 60,  //The Width must be the same as the height
        borderRadius: 80, //Then Make the Border Radius twice the size of width or Height   
        backgroundColor: '#efeff7',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    myCircleButtonGroup: {
        height: 35,
        width: 35,  //The Width must be the same as the height
        borderRadius: 20, //Then Make the Border Radius twice the size of width or Height   
        backgroundColor: '#efeff7',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    profileMenuButton: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 19
    },
    profileStatusWrapper: {
        flex: 1, marginHorizontal: 15
    },
    profileStatusContainer: {
        alignItems: 'flex-start',
        flex: 1
    },
    profileStatusItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 5,
    },
    profileStatusItemText: {
        marginHorizontal: 10,
        fontSize: 20,
    },
    profileStatusItemTextBold: {
        fontWeight: '500'
    },
    justifyContent: {
        justifyContent: 'center'
    },
    groupImageItemWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 120,
        backgroundColor: 'transparent'
    },
    groupImageItem: {
        width: 95,
        height: 95,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 5,
        paddingBottom: 5
    },
    groupImageItemText: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    buttonEditProfileWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    friendsCardWrapper: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    friendsCardHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
    },

    friendImageItem: {
        width: 95,
        height: 95,
    },
    friendImageItemText: {
        // color: '#fff',
        fontWeight: '400',
        fontSize: 20,
        // flex: 1,
    },
    fontBold22: {
        fontWeight: '500', fontSize: 22
    },
    font22: {
        fontSize: 22
    },
    fontBold20: {
        fontWeight: '500', fontSize: 220
    }

})








