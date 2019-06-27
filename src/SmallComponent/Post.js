import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import ThumbnailPhoto from './ThumbnailPhoto';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PostModal from './PostModal'
// import moment from 'moment'

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

    render() {
        return (
            <View style={styles.container}>

                {/* Modal EDIT DELETE POST */}
                {/* <PostModal visible={this.state.modalVisible} /> */}
               
                <View style={{ marginTop: 10 }}>
                    <Modal

                        animationType="slide"
                        transparent={false}
                        visible={this.state.visible}
                        onRequestClose={() => {
                            this.setModalVisible(!this.state.visible)
                        }}>


                        <View style={{ flex: 1, backgroundColor: '#orange' }}>
                            <View style={{ paddingLeft: 20, paddingTop: 10, backgroundColor: 'white', marginTop: 180, height: 800 }}>

                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ height: 30, width: 30, marginRight: 10 }} source={require('../assets/icon/postIcon/save.png')} />
                                        <View>
                                            <Text style={{ fontSize: 20 }}>Save Post</Text>
                                            <Text>Add this to your saved item</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 9 }}>
                                        <Image style={{ height: 30, width: 30, marginRight: 10 }} source={require('../assets/icon/postIcon/pencil.png')} />
                                        <View>
                                            <Text style={{ fontSize: 20 }}>Edit</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ height: 30, width: 30, marginRight: 10 }} source={require('../assets/icon/postIcon/delete.png')} />
                                        <View>
                                            <Text style={{ fontSize: 20 }}>Delete</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Modal>
                </View>

                <View style={styles.wrapperTopPart}>
                    <ThumbnailPhoto characterImageThumb={this.props.data.user.profile_img_url} style={styles.wrapperPhotoProfile} />

                    <View style={styles.wrapperProfileName}>
                        <Text style={styles.profileName}>{this.props.data.user.fullname}</Text>
                        <Text style={styles.timePost}>{this.props.data.createdAt}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                        <View style={styles.btnMore}>
                            <Icon size={20} name='dots-horizontal' type='material-community' />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.wrapperMiddlePart}>

                    <View style={[styles.wrapperPost, { flex: 1 }]}>
                        <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>

                            <Text style={[styles.postText, { flex: 1, flexDirection: 'row' }]}>{this.props.data.content}</Text>
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

export default Post;

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