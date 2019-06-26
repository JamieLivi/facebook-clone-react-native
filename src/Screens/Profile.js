
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, ScrollView, Image, ImageBackground, View, TouchableOpacity, Alert, Button } from 'react-native';

import { Icon } from 'react-native-elements'
import ProfileStatusList from '../SmallComponent/ProfileStatusList.js';
import PostCard from '../SmallComponent/PostCard'

const showAlert = () => {
    Alert.alert(
        'Maaf Belum Bisa Apa2'
    )
}

const users = require('../dummyData/user.json')
const friends = require('../dummyData/friendList.json')
const profilePicture = require('../assets/img/profilePicture.jpg');

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Whats on your mind ?' };
    }

    render() {
        return (

            <View style={styles.Container}>
                <ScrollView >
                    <View style={styles.body}>
                        <View style={styles.banner}>
                            <Image style={styles.bannerImage} source={require('../assets/img/loginhead.png')} />
                        </View >
                        <View style={styles.profilePictureContainer}>
                            <Image style={styles.profilePicture} resizeMode='cover' source={profilePicture} />
                        </View>
                        <View style={styles.profileInformationContainer}>
                            <Text style={[styles.profileInformation, styles.fontBold22]} >
                                Lord Rahadian of Westeros
                            </Text>
                            <Text style={styles.profileInformation}>Ini Status Saya, Bukan Status Anda, Atau Mereka</Text>
                        </View>
                        <View style={styles.profileMenuButton}>
                            <ButtonCircleText
                                buttonName='Add Story'
                                name='add'
                                type='material'
                                color='#427df4' />
                            <ButtonCircleText
                                buttonName='View As'
                                name='visibility'
                                type='material'
                                color='#1e1f21' />
                            <ButtonCircleText
                                buttonName='Edit Profile'
                                name='user'
                                type='font-awesome'
                                color='#1e1f21' />
                            <ButtonCircleText
                                buttonName='More'
                                name='dots-horizontal'
                                type='material-community'
                                color='#1e1f21' />
                        </View>
                        <View style={styles.profileStatusWrapper}>
                            <ProfileStatusList />
                        </View>
                        <View style={styles.groupImageItemWrapper}>
                            {users.map((user, key) => {
                                return (
                                    <ImageBackground
                                        key={key}
                                        imageStyle={{ borderRadius: 4 }}
                                        resizeMode='cover'
                                        style={styles.groupImageItem}
                                        source={{ uri: user.avatar }}>
                                        <Text style={styles.groupImageItemText}>Group</Text>
                                        <ButtonCircle name='users' type='font-awesome' color='#1e1f21' />
                                    </ImageBackground >
                                );
                            })}
                        </View>
                        <ButtonVertical
                            textColor='#1879f7'
                            buttonName='Edit Public Profile'
                            buttonColor='#e7f3ff' />

                        <View style={styles.friendsCardWrapper}>
                            <VerticalLine height={2} />
                            <View style={[styles.friendsCardHeader]}>
                                <Text style={styles.fontBold22}>Friends</Text>
                                <Text style={[styles.font22, { color: '#1879f7' }]}>Find Friends</Text>
                            </View>
                            <View style={styles.friendCardItem}>
                                <Text style={[styles.font22, { flexDirection: 'row' }]}>
                                    500 Friends
                                </Text>
                            </View>
                            <View style={styles.friendImageWrapper}>

                                {friends.results.slice(0, 6).map((friend, key) => {
                                    return (
                                        <View key={key} style={{ justifyContent: 'center' }}>
                                            <ImageBackground
                                                imageStyle={{ borderRadius: 5 }}
                                                resizeMode='cover'
                                                style={[styles.friendImageItem]}
                                                source={{ uri: friend.picture.medium }}>

                                            </ImageBackground >
                                            <Text style={styles.friendImageItemText}>{friend.name.first}</Text>
                                        </View>
                                    );
                                })}

                            </View>
                            <ButtonVertical
                                buttonName='See All Friends'
                                buttonColor='#efeff7' />
                            <VerticalLine height={2} />
                        </View>
                        <View style={styles.storiesHighlight}>
                            <Text style={styles.fontBold20}>Story Highlights</Text>
                            <Text style={styles.font20Blue}>Add New</Text>
                        </View>
                        <VerticalLine height={10} />
                        <View style={styles.storiesHighlight}>
                            <Text style={[styles.fontBold20, { flex: 2 }]}>Timelines</Text>
                            <View style={styles.timlineWrapper}>
                                <ButtonAdjust name='tune' />
                                <ButtonAdjust name='settings' />
                            </View>
                        </View>
                        {/* button status */}
                        <View>
                            <View style={styles.buttonStatusWrapper}>
                                <Image style={styles.buttonStatusImage} source={profilePicture} />
                                <TextInput
                                    style={{ marginLeft: 10 }}
                                    value={this.state.text}
                                    onChangeText={(text) => this.setState({ text })} />
                            </View>
                            <View style={styles.buttonStatusMenu}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon
                                        color='#f73c39'
                                        name='video'
                                        type='material-community' />
                                    <Text> Live</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon
                                        color='#84be4a'
                                        name='image-multiple'
                                        type='material-community' />
                                    <Text> Photo</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon
                                        color='#42599c'
                                        name='flag'
                                        type='material-community' />
                                    <Text> Life Event</Text>
                                </View>
                            </View>
                            <VerticalLine height={10} />
                            <View style={{ height: 180}}>
                                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                                    <View style={{ marginLeft: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                       
                                        {users.map((user, key) => {
                                            return (
                                                <ImageBackground
                                                    imageStyle={{ borderRadius: 20 }}
                                                    key={key}
                                                    style={styles.groupStoriesItem}
                                                    source={{ uri: user.avatar }}>
                                                    <Text style={styles.groupStoriesItemText}>Stories</Text>
                                                </ImageBackground >
                                            );
                                        })}
                                   
                                    </View>
                                </ScrollView>
                                <VerticalLine height={10} />
                            </View>
                            <PostCard />
                            <PostCard />
                            <PostCard />
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

class ButtonAdjust extends Component {
    render() {
        return (
            <View style={styles.buttonAdjust}>
                <Icon name={this.props.name} type='material-community' />
            </View>
        )
    }

}

class VerticalLine extends Component {
    render() {

        return (
            <View style={{
                width: '100%',
                backgroundColor: '#e3e3e3',
                height: this.props.height,
                flexDirection: 'row',
                marginTop: 9,
            }}></View>
        )
    }
}

class ButtonVertical extends Component {
    render() {
        return (
            <View style={styles.buttonEditProfileWrapper}>
                <TouchableOpacity onPress={() => {/* do this */ }}>
                    <View style={{
                        backgroundColor: this.props.buttonColor, alignItems: 'center',
                        justifyContent: 'center', borderRadius: 15, flex: 1, width: 340, height: 50
                    }}
                    >
                        <Text style={{ fontSize: 20, color: this.props.textColor }}>{this.props.buttonName}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }
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






const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    body: {
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
        marginBottom: 20,

    },
    friendsCardWrapper: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    friendsCardHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
    },
    friendCardItem: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 5
    },
    friendImageWrapper: {
        marginBottom: 20,
        justifyContent: 'space-around',
        alignContent: 'flex-start',
        flexDirection: 'row',
        flex: 1, flexWrap: 'wrap',
        marginHorizontal: 0
    },
    friendImageItem: {
        width: 95,
        height: 95,
    },
    friendImageItemText: {
        // color: '#fff',
        fontWeight: '400',
        fontSize: 20,
        textAlign: 'center'
        // flex: 1,
    },
    storiesHighlight: {
        marginHorizontal: 10,
        marginVertical: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonAdjust: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efeff7',
        height: 50,
        width: 50
    },
    timlineWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonStatusWrapper: {
        paddingBottom: 5,
        borderColor: '#e3e3e3',
        borderBottomWidth: 1,
        marginBottom: 5,
        marginHorizontal: 0,
        flex: 1,
        flexDirection: 'row'
    },
    buttonStatusImage: {
        marginHorizontal: 10,
        height: 50,
        width: 50,
        borderRadius: 90
    },
    buttonStatusMenu: {
        marginHorizontal: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    groupStoriesItem: {
        height: 150,
        width: 150,
        marginRight: 10,
        borderRadius: 90, justifyContent: 'flex-end',
        alignContent: 'flex-end',
    },
    groupStoriesItemText: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 20,

        paddingLeft: 5
    },
    font22: {
        fontSize: 22
    },
    font22Blue: {
        fontSize: 22,
        color: '#1879f7'
    },
    fontBold22: {
        fontWeight: '500', fontSize: 22
    },
    fontBold22Blue: {
        fontWeight: '500', fontSize: 22,
        color: '#1879f7'
    },
    font20: {
        fontSize: 20
    },
    fontBold20: {
        fontWeight: '500',
        fontSize: 20
    },
    font20Blue: {
        fontSize: 20,
        color: '#1879f7'
    },
    fontBold20Blue: {
        fontWeight: '500', fontSize: 220,
        color: '#1879f7'
    },
    fontBoldStandard: {
        fontWeight: '500'
    }

})