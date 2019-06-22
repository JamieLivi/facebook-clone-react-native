import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import ThumbnailPhoto from './ThumbnailPhoto';

class Post extends Component {
   
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapperTopPart}>
                    <ThumbnailPhoto style={styles.wrapperPhotoProfile} />

                    <View style={styles.wrapperProfileName}>
                        <Text style={styles.profileName}>{this.props.data.name}</Text>
                        <Text style={styles.timePost}>{this.props.data.minute}</Text>
                    </View>

                    <View style={styles.btnMore}>
                        <Icon size={20} name='dots-horizontal' type='material-community' />
                    </View>
                </View>

                <View style={styles.wrapperMiddlePart}>
                    <View style={styles.wrapperPost}>
                        <Text style={styles.postText}>{this.props.data.text}</Text>
                        <View style={styles.wrapperInfoPart}>
                            <View style={[styles.InfoPart, { flexDirection: 'row' }]}>
                                {
                                    this.props.data.like && this.props.data.like != 0 ?
                                        <View style={styles.wrapperIcon}>
                                            <Icon size={15} color="#fff" name='thumb-up' type='material-community' />
                                        </View>
                                        :
                                        <View></View>
                                }

                                {
                                    this.props.data.love ?
                                        <View style={[{ marginLeft: -8 }, styles.wrapperIcon]}>
                                            <Icon size={15} color="#ff0000" name='heart' type='material-community' />
                                        </View>
                                        :
                                        <View></View>
                                }

                                <Text style={styles.infoText}>{this.props.data.like}
                                    {this.props.data.like && !this.props.data.love ? " orang menyukai" : ""}</Text>
                            </View>

                            <View style={styles.wrapperComment}>
                                <Text style={styles.comment}>
                                    {this.props.data.comments} {this.props.data.comments > 1 ? "Comments" : "Comment"}</Text>
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
        alignItems: 'flex-start'
    },
    wrapperPost: { flex: 1 },
    postText: { fontSize: 15, color: '#000', marginBottom: 15 },
    wrapperInfoPart: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
    infoPart: { flex: 1, flexDirection: 'row' },
    wrapperIcon: {
        backgroundColor: '#2196f3',
        padding: 3,
        borderRadius: 50,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#fff'
    },
    infoText: { marginLeft: 5, paddingTop: 3 },
    wrapperComment: { flex: 1, alignItems: 'flex-end' },
    comment: { marginTop: 5 },
    wrapperButtonAction: { flex: 1, flexDirection: 'row', padding: 10 },
    wrapperButtonLike: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    textButtonLike: { fontSize: 12, marginLeft: 4, marginTop: 5 },
    wrapperButtonComment: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    textButtonComment: { fontSize: 12, marginLeft: 4 }
})