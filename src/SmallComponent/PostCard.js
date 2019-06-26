import React, { Component } from 'react';
import { StyleSheet, Text, Image, View} from 'react-native';
import { Icon } from 'react-native-elements'


const likeEmoticon = require('../assets/icon/like-emot.png')
const profilePicture = require('../assets/img/profilePicture.jpg');

export default class PostCard extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: 10, flex: 1, height: 250 }}>
                <View style={{ flex: 0.7, flexDirection: 'row' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Image style={styles.buttonStatusImage} source={profilePicture} />
                    </View>
                    <View style={{ flex: 3.5, justifyContent: 'center' }}>
                        <View style={{ flex: 1, justifyContent: 'center', }}>
                            <Text style={styles.fontBoldStandard}>Rahadian Permana</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Text>Just Now • </Text>
                            <Icon name='lock' size={20} type='material-community' />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Icon name='dots-horizontal' size={23} type='material-community' />
                    </View>
                </View>
                <View style={{
                    borderColor: '#cecfd6', borderBottomWidth: 1, marginBottom: 5, flex: 1, paddingHorizontal: 5, justifyContent: 'center'
                }}>
                    <Text style={styles.font22}>Testing status</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ height: 20, width: 20 }} source={likeEmoticon} />
                            <Text> Jokowi dan 13 Lainnya</Text>
                        </View>
                        <View>
                            <Text>2 Komentar</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                color='#636973'
                                name='thumb-up-outline'
                                type='material-community' />
                            <Text> Suka</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                color='#636973'
                                name='message-outline'
                                type='material-community' />
                            <Text> Komentar</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                color='#636973'
                                name='share'
                                type='font-awesome' />
                            <Text> Bagikan</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({

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
    },
    buttonStatusImage: {
        marginHorizontal: 10,
        height: 50,
        width: 50,
        borderRadius: 90
    },



})