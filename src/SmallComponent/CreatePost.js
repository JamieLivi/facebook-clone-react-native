import React, { Component } from 'react';
import { Text, TextInput, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ThumbnailPhoto from './ThumbnailPhoto'
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import axios from 'axios'
import { ENV } from '../dummyData/variable'

class CreatePost extends Component {

    constructor(props) {

        super(props)
        const content = this.props.navigation.getParam('content', '');
        this.state = {
            content: content,
            user_id: '',
            type: ''
        }

    }

   
    handlePost = (user_id, jwt, type, post_id,) => {
        if (user_id || jwt || type !== null) {

            const headers = {
                'Authorization': 'Bearer ' + jwt
            };

            let data
            if (type === 'posts') {

                data = {
                    content: this.state.content,
                    user_id: user_id
                }
                axios.post(`${ENV.url}/posts`, data, {
                    headers: headers
                })
                    .then(response => {
                        this.props.navigation.navigate('AuthLoading')
                    })
                    .catch(err => {
                        console.log("send data failed")
                        alert('post failed')
                    })
            } else if (type === 'update') {
                data = {
                    content: this.state.content
                }
                const url = `${ENV.url}/posts/${post_id}`
                axios.put(url, data, {
                    headers: headers
                })
                    .then(response => {
                        this.props.navigation.navigate('AuthLoading')
                    })
                    .catch(err => {
                        console.log("send data failed")
                        alert('update status failed')
                    })
            }


        }
    }


    render() {
        const navigation = this.props.navigation;
        const user_id = navigation.getParam('user_id', 'NO-User-ID');
        const type = navigation.getParam('type', 'No - type');
        const jwt = navigation.getParam('jwt', 'No - Token');
        const content = navigation.getParam('content', '');
        const post_id = navigation.getParam('post_id', 'No - POST-ID');

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={styles.headerWrapper}>
                            <Icon
                                style={{ flex: 1 }}
                                name='arrow-left'
                                type='font-awesome'
                                color='#fff'
                                onPress={() => { navigation.navigate('MainScreen') }} />

                            <Text style={styles.createPostTitle}>{type === 'posts' ? `Create Post` : `Update Post` }</Text>
                            <TouchableOpacity
                                onPress={() => { this.handlePost(user_id, jwt, type,post_id) }}
                                style={styles.buttonWrapper}>
                                <Text style={styles.buttonPost}>{type === 'posts' ? `POST` : `SAVE`}</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.profileWrapper}>
                            <View style={styles.profileName}>
                                <View style={styles.profileThumbnail}>
                                    <ThumbnailPhoto characterImageThumb="https://i.ibb.co/d2jWNRv/profile-Picture.jpg" />
                                </View>
                                <View style={styles.buttonMenuWrapper}>
                                    <Text style={styles.profileFullName}>Lord Rahadian Of Buahbatu</Text>
                                    <View style={styles.flexDirRow}>
                                        <View style={styles.buttonOnlyMe}>
                                            <Icon
                                                style={{}}
                                                size={20}
                                                name='lock'
                                                type='font-awesome'
                                                color='#bdc1c5' />
                                            <Text style={{ color: '#bdc1c5' }}>Only Me</Text>
                                            <Icon
                                                style={{}}
                                                size={19}
                                                name='caret-down'
                                                type='font-awesome'
                                                color='#bdc1c5' />

                                        </View>
                                        <View style={styles.buttonAlbum}>
                                            <Icon
                                                style={{}}
                                                size={20}
                                                name='plus'
                                                type='font-awesome'
                                                color='#bdc1c5' />
                                            <Text style={{ color: '#bdc1c5' }}>Album</Text>
                                            <Icon
                                                style={{}}
                                                size={19}
                                                name='caret-down'
                                                type='font-awesome'
                                                color='#bdc1c5' />

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.textInputWrapper}>
                        <TextInput style={styles.textInputs}
                            placeholderTextColor="#bdc1c5" multiline={true}
                            onChangeText={(content) => this.setState({ content })}
                            value={this.state.content}
                            placeholder="What's On Your Mind ?">
                        </TextInput>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    headerWrapper: { paddingHorizontal: 15, height: 50, flexDirection: 'row', alignItems: 'center', backgroundColor: '#4167b2' },
    createPostTitle: { flex: 1, marginLeft: 20, fontSize: 20, color: '#fff' },
    buttonWrapper: { flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' },
    buttonPost: { alignSelf: 'center', fontSize: 20, color: 'white' },
    profileWrapper: { flex: 2.5, paddingTop: 15, paddingLeft: 10 },
    profileName: { flex: 1, flexDirection: 'row' },
    profileThumbnail: { flex: 0.4, marginRight: 15 },
    buttonMenuWrapper: { flex: 2 },
    profileFullName: { fontSize: 17, fontWeight: '500', color: '#151515' },
    flexDirRow: { flexDirection: 'row' },
    buttonOnlyMe: { marginRight: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderWidth: 1, borderRadius: 5, padding: 5, width: 100, borderColor: '#bdc1c5' },
    buttonAlbum: { alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderWidth: 1, borderRadius: 5, padding: 5, width: 100, borderColor: '#bdc1c5' },
    textInputWrapper: { height: 300 },
    textInputs: { paddingLeft: 15, fontSize: 25, color: '#151515' }



})

export default withNavigation(CreatePost)