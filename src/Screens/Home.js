import React, { Component } from 'react';
import { Text, Button, View, ScrollView, Image, StyleSheet, FlatList, AsyncStorage } from 'react-native';
import Story from '../SmallComponent/Story';
import Post from '../SmallComponent/Post';
import axios from 'axios';
import ThumbnailPhoto from '../SmallComponent/ThumbnailPhoto'
import { withNavigation } from 'react-navigation'
import { ENV } from '../dummyData/variable'
import { TouchableOpacity } from 'react-native-gesture-handler';


const attachIcon = require('../assets/icon/attach.png')

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
            const headers = {
                'Authorization': 'Bearer ' + jwt
            };

            let { data: posts } = await axios.get(`${ENV.url}/posts`, {
                headers: headers
            })

            this.setState({
                jwt, posts,
                fullname: userData.fullname,
                user_id: userData.id,
                profile_image: userData.profile_img_url

            })
            console.log(`inside didmount ${jawet}`)

        } catch (error) {
            console.log(' Error: ' + error.message)
        }

    }

    render() {
        let { jwt, posts, user_id, profile_image } = this.state
        let jawet = this.props.navigation.getParam('jawet', 'No - Token');
        console.log(`inside render ${jawet}`)
        return (
            <ScrollView style={styles.scrollviewWrapper}>
                <View style={styles.mainWrapper}>

                    <View style={styles.menuPostStatus}>
                        <ThumbnailPhoto characterImageThumb={profile_image} style={{ width: 40 }} />
                        <TouchableOpacity style={{ flex: 1 }}
                            // passing parameter to createpost page
                            onPress={() => {
                                this.props.navigation.navigate('CreatePostScreen', {
                                    user_id, jwt, type: 'posts'
                                })
                            }} >
                            <View style={styles.placeholderWrapper}>
                                <Text style={styles.placholderText}>What's on your mind?</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.attachIconWrapper}>
                            <Image source={attachIcon} style={styles.attachIconImage} />
                        </View>
                    </View>

                    <View style={styles.storyWrapper}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 20 }}>
                            {
                                posts.map((data, i) => <Story data={data} key={i} />)
                            }
                        </ScrollView>
                    </View>

                    <FlatList
                        data={posts}
                        renderItem={({ item }) => <Post jwt={jwt} navigation={this.props.navigation} data={item} />}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollviewWrapper: { backgroundColor: '#dadee1' },
    mainWrapper: { flex: 1, backgroundColor: '#dadee1' },
    menuPostStatus: { flex: 1, backgroundColor: '#fff', marginTop: 2, flexDirection: 'row', height: 70, padding: 15, justifyContent: 'space-around', backgroundColor: '#fff' },
    placeholderWrapper: { alignItems: 'center', justifyContent: 'center', flex: 1, padding: 2, marginLeft: 7, width: 250, height: 40 },
    placholderText: { paddingTop: 7, paddingLeft: 20, height: 35, width: '100%', borderWidth: 1, borderRadius: 20, borderColor: '#959ca6' },
    attachIconWrapper: { width: 40, justifyContent: 'center', alignItems: 'center', marginTop: 3 },
    storyWrapper: { justifyContent: 'space-around', flex: 1, flexDirection: 'row', backgroundColor: '#fff', marginVertical: 15, height: 220 },
    attachIconImage: { width: '52%', height: '55%', marginBottom: 2 },


})

export default withNavigation(Home)
