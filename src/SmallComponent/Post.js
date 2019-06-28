import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import ThumbnailPhoto from './ThumbnailPhoto';
import { ENV } from '../dummyData/variable'
import axios from 'axios'
import { withNavigation } from 'react-navigation'
import TimeAgo from 'react-timeago'
// import PostModal from './PostModal'

const likeReaction = require('../assets/icon/reaction-like.png');
const loveReaction = require('../assets/icon/reaction-love.png');
const wowReaction = require('../assets/icon/reaction-wow.png');

class Post extends Component {

    constructor() {
        super()
        this.state = {
            modalVisible: false,
        };
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    handleDelete = (id, jwt) => {
        const headers = {
            'Authorization': 'Bearer ' + jwt
        };

        axios.delete(`${ENV.url}/posts/${id}`,{
            headers: headers
        })
            .then(response => {
                this.props.navigation.navigate('AuthLoading')
            })
            .catch(err => {
                console.log("send data failed")
                alert('post failed')
            })
    }

    render() {
        // console.log(`parent ${this.state.modalVisible}`)
        const data = this.props.data
        const navigation = this.props.navigation

        return (
            <View style={styles.container}>
                {/* <PostModal visible={this.state.modalVisible} /> */}

                {/* Modal EDIT DELETE POST */}
                <View style={{ marginTop: 10 }}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(!this.state.modalVisible)
                        }}>
                        <TouchableOpacity
                            style={{ flex: 1, backgroundColor: '#00000090' }}
                            onPressOut={() => { this.setModalVisible(false) }}>

                            <View>
                                <TouchableWithoutFeedback style={{ flex: 1 }}>
                                    <View style={{ paddingLeft: 20, paddingTop: 10, backgroundColor: 'white', marginTop: 280, height: 300 }}>
                                        <View>
                                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image style={{ height: 30, width: 30, marginRight: 10 }} source={require('../assets/icon/postIcon/save.png')} />
                                                    <View>
                                                        <Text style={{ fontSize: 20 }}>Save Post</Text>
                                                        <Text>Add this to your saved item</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {
                                                navigation.navigate('CreatePostScreen', {
                                                    jwt: this.props.jwt,
                                                    content: data.content,
                                                    post_id: data.id,
                                                    type: 'update'
                                                }), this.setModalVisible(false)
                                            }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 9 }}>
                                                    <Image style={{ height: 30, width: 30, marginRight: 10 }} source={require('../assets/icon/postIcon/pencil.png')} />
                                                    <View>
                                                        <Text style={{ fontSize: 20 }}>Edit</Text>
                                                    </View>
                                                </View>

                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={()=> {this.handleDelete(data.id, this.props.jwt)}}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image style={{ height: 30, width: 30, marginRight: 10 }} source={require('../assets/icon/postIcon/delete.png')} />
                                                    <View>
                                                        <Text style={{ fontSize: 20 }}>Delete</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </View>
                {/* Modal End Code */}


                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>. */}
                <View style={styles.wrapperTopPart}>
                    <ThumbnailPhoto characterImageThumb={data.user.profile_img_url} style={styles.wrapperPhotoProfile} />

                    <View style={styles.wrapperProfileName}>
                        <Text style={styles.profileName}>{data.user.fullname}</Text>
                        {/* <TimeAgo date={this.props.data.createdAt} /> */}
                        <Text style={styles.timePost}>
                            {data.createdAt}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                        <View style={styles.btnMore}>
                            <Icon size={20} name='dots-horizontal' type='material-community' />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.wrapperMiddlePart}>

                    <View style={[styles.wrapperPost, { flex: 1 }]}>
                        <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
                            <Text style={[styles.postText, { flex: 1, flexDirection: 'row' }]}>
                                {data.content}
                            </Text>
                        </View>

                        <View style={[styles.wrapperInfoPart, { flex: 3, flexDirection: 'row' }]}>

                            <View style={[styles.InfoPart, { flexDirection: 'row' }]}>
                                <View style={styles.wrapperIcon}>
                                    <Image source={likeReaction} style={{ height: 20, width: 20 }} />
                                </View>
                                <View style={[{ marginLeft: -8 }, styles.wrapperIcon]}>
                                    <Image source={loveReaction} style={{ height: 20, width: 20 }} />
                                    <Image source={wowReaction} style={{ height: 20, width: 20 }} />
                                </View>
                                <Text style={styles.infoText}>
                                    5 orang menyukai</Text>
                            </View>

                            <View style={[styles.wrapperComment, { justifyContent: 'flex-end', alignItems: 'center', flex: 1, flexDirection: 'row' }]}>
                                <Text style={[styles.comment, { paddingBottom: 6, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }]}>
                                    5 Comments</Text>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={styles.wrapperButtonAction}>
                    <View style={styles.wrapperButtonLike}>
                        <Icon size={20} name='thumb-up-outline' type='material-community' />
                        <Text style={styles.textButtonLike}>Like</Text>
                    </View>

                    <View style={styles.wrapperButtonComment}>
                        <Icon size={20} name='comment' type='material-community' />
                        <Text style={styles.textButtonComment}>Comment</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default withNavigation(Post)

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', marginBottom: 10 },
    wrapperTopPart: { flex: 1, flexDirection: 'row', paddingHorizontal: 5, paddingVertical: 3 },
    wrapperPhotoProfile: { width: 50, height: 50, padding: 5 },
    photoProfile: { width: '100%', height: '100%', borderRadius: 100 },
    wrapperProfileName: { flex: 1, height: 50, marginTop: 5 },
    profileName: { fontSize: 20, color: '#000', fontWeight: 'bold' },
    timePost: { fontSize: 10, marginTop: -2 },
    btnMore: { justifyContent: 'center', alignItems: 'center', width: 40, height: 50, padding: 5 },
    wrapperMiddlePart: {
        paddingHorizontal: 10,
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#ebebeb',
        alignItems: 'flex-start',
        flex: 1
    },
    wrapperPost: { flex: 1 },
    postText: { fontSize: 15, color: '#000', marginBottom: 15, flexDirection: 'row' },
    wrapperInfoPart: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
    infoPart: { flex: 1, flexDirection: 'row' },
    wrapperIcon: {
        backgroundColor: 'transparent',
        padding: 3,
        borderRadius: 50,
        flexDirection: 'row',
        // borderWidth: 1,
        borderColor: '#fff'
    },
    infoText: { marginLeft: 5, paddingTop: 3 },
    wrapperComment: {},
    comment: { marginTop: 5 },
    wrapperButtonAction: { flex: 1, flexDirection: 'row', padding: 10 },
    wrapperButtonLike: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    textButtonLike: { fontSize: 12, marginLeft: 4, marginTop: 5 },
    wrapperButtonComment: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    textButtonComment: { fontSize: 12, marginLeft: 4 }
})