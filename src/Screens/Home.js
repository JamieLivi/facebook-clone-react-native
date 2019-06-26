import React, { Component } from 'react';
import { Text,View, ScrollView, Image, TextInput, FlatList, AsyncStorage } from 'react-native';
import Story from '../SmallComponent/Story';
import Post from '../SmallComponent/Post';
import axios from 'axios';
import ThumbnailPhoto from '../SmallComponent/ThumbnailPhoto'
import data from '../dummyData/status.json';

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

    async componentDidMount() {
       try {
           const jwt = await AsyncStorage.getItem('token');
           const user = await AsyncStorage.getItem('user');
           const userData = JSON.parse(user)
           console.log(userData)
           const headers = {
               'Authorization': 'Bearer ' + jwt
           };

           let {data: posts} = await axios.get("http://192.168.0.27:5000/posts", {
               headers: headers
           })

        //    this.setState({
        //        user: {
        //            fullname: userData.fullname,
        //            user_id: userData.id,
        //            profile_img_url: userData.profile_img_url
        //        }})

           this.setState({ 
               jwt, posts ,
               fullname: userData.fullname,
               user_id: userData.id,
               profile_image: userData.profile_img_url
              
            })
            console.log(this.state.fullname)
           
       } catch (error) {
           console.log(' Error: ' + error.message)
       }

    }

    render() {
        let { jwt, posts, fullname, user_id, profile_image } = this.state
        return (
            <ScrollView style={{ backgroundColor: '#dadee1' }}>
                <View style={{ flex: 1, backgroundColor: '#dadee1' }}>

                    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 2, flexDirection: 'row', height: 70, padding: 15 }}>
                        <ThumbnailPhoto characterImageThumb={profile_image} style={{ width: 40 }} />
                        <View style={{ flex: 1, padding: 2, marginLeft: 7 }}>
                        <TouchableOpacity>

                            <TextInput editable={false} placeholder="What's on your mind?" style={{ paddingLeft: 20, paddingTop: 12, paddingRight: 40, borderWidth: 1, borderRadius: 20, borderColor: '#ebebeb' }} />
                        </TouchableOpacity>
                        </View>
                        <View style={{ width: 40, justifyContent: 'center', alignItems: 'center', marginTop: 3 }}>
                            <Image source={attachIcon} style={{ width: '52%', height: '55%', marginBottom: 2 }} />
                        </View>
                    </View>

                    <View style={{justifyContent: 'space-around', flex: 1, flexDirection: 'row', backgroundColor: '#fff', marginVertical: 15, height: 220 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 20 }}>
                            {
                                data.map((e,i) => <Story e={e} key={i} />)
                            }
                        </ScrollView>
                    </View>

                    <FlatList
                        data={this.state.posts}
                        renderItem={({ item }) => <Post data={item} />}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default Home;