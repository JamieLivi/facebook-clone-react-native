import React, { Component } from 'react';
import { Text, Button, View, ScrollView, Image, TextInput, FlatList, AsyncStorage } from 'react-native';
import Story from '../SmallComponent/Story';
import Post from '../SmallComponent/Post';
import axios from 'axios';
import ThumbnailPhoto from '../SmallComponent/ThumbnailPhoto'
import data from '../dummyData/status.json';
import { withNavigation } from 'react-navigation'

const attachIcon = require('../assets/icon/attach.png')

import deviceStorage from '../SmallComponent/deviceStorage'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Home extends Component {

    constructor() {
        super()
        this.state = {
            jwt: '',
            posts: [],
            fullname: '',
            user_id: null,
            profile_img: ''

        }

    }


    async componentWillMount() {
        try {
            const jwt = await AsyncStorage.getItem('token');
            const user = await AsyncStorage.getItem('user');
            const userData = JSON.parse(user)
            const headers = {
                'Authorization': 'Bearer ' + jwt
            };

            let { data: posts } = await axios.get("http://192.168.0.27:5000/posts", {
                headers: headers
            })

            this.setState({
                jwt, posts,
                fullname: userData.fullname,
                user_id: userData.id,
                profile_image: userData.profile_img_url

            })

        } catch (error) {
            console.log(' Error: ' + error.message)
        }

    }

    render() {
        let { jwt, posts, user_id, profile_image } = this.state
        return (
            <ScrollView style={{ backgroundColor: '#dadee1' }}>
                <View style={{ flex: 1, backgroundColor: '#dadee1' }}>

                    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 2, flexDirection: 'row', height: 70, padding: 15, justifyContent:'space-around' ,backgroundColor: '#fff' }}>
                        <ThumbnailPhoto characterImageThumb={profile_image} style={{ width: 40 }} />
                        <TouchableOpacity style={{ flex: 1 }}
                            // passing parameter to createpost page
                            onPress={() => { this.props.navigation.navigate('CreatePostScreen', {
                            user_id, jwt, type: 'newpost'
                        }) }} >
                            <View style={{ alignItems:'center',justifyContent:'center',flex: 1, padding: 2, marginLeft: 7,width: 250, height: 40 }}>
                                <Text style={{ paddingTop: 7,paddingLeft:20,height: 35 ,width: '100%' ,borderWidth: 1, borderRadius: 20, borderColor: '#959ca6' }}>What's on your mind?</Text> 
                            </View>
                        </TouchableOpacity>
                        <View style={{ width: 40, justifyContent: 'center', alignItems: 'center', marginTop: 3 }}>
                            <Image source={attachIcon} style={{ width: '52%', height: '55%', marginBottom: 2 }} />
                        </View>
                    </View>

                    <View style={{ justifyContent: 'space-around', flex: 1, flexDirection: 'row', backgroundColor: '#fff', marginVertical: 15, height: 220 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 20 }}>
                            {
                                data.map((e, i) => <Story e={e} key={i} />)
                            }
                        </ScrollView>
                    </View>

                    <FlatList
                        data={posts}
                        renderItem={({ item }) => <Post data={item} />}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default withNavigation(Home)
