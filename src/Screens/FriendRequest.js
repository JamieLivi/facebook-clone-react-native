import React, { Component } from 'react';
import ThumbnailPhoto from '../SmallComponent/ThumbnailPhoto'
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FriendRequest extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.friendRequestWrapper}>
                    <Text style={styles.FriendRequestText}> Friend Requests <Text style={styles.FriendRequestTextRed}>2</Text> </Text>
                </View>

                <View style={styles.friendRequestConfirm}>
                    <View style={styles.FriendRequestThumbnail}>
                        <ThumbnailPhoto characterImageThumb="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Joko_Widodo_2014_official_portrait.jpg/250px-Joko_Widodo_2014_official_portrait.jpg" />
                    </View>
                    <View style={styles.FriendRequestMutual}>
                        <Text style={styles.FriendRequestName}>Joko Widodo</Text>
                        <Text>3 mutual friends</Text>

                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity>
                                <View style={styles.buttonConfirm}>
                                    <Text style={styles.buttonConfirmText}>Confirm</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.buttonDelete}>
                                    <Text style={styles.buttonDeleteText}>Delete</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.friendRequestConfirm}>
                    <View style={styles.FriendRequestThumbnail}>
                        <ThumbnailPhoto characterImageThumb="https://ichef.bbci.co.uk/news/660/cpsprodpb/0C8F/production/_105151230_gettyimages-453234858.jpg" />
                    </View>
                    <View style={styles.FriendRequestMutual}>
                        <Text style={styles.FriendRequestName}>Prabowo</Text>
                        <Text>3 mutual friends</Text>

                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity>
                                <View style={styles.buttonConfirm}>
                                    <Text style={styles.buttonConfirmText}>Confirm</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.buttonDelete}>
                                    <Text style={styles.buttonDeleteText}>Delete</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: { backgroundColor: 'transparent', flex: 1, marginLeft: 10 },
    friendRequestWrapper: { justifyContent: 'center', height: 50 },
    FriendRequestText: { fontWeight: '500', fontSize: 18 },
    FriendRequestTextRed: { color: '#e54449' },
    friendRequestConfirm: { height: 100, flexDirection: 'row', marginBottom: 10 },
    FriendRequestThumbnail: { backgroundColor: 'transparent', flex: 0.8 },
    FriendRequestMutual: { backgroundColor: 'transparent', flex: 2, paddingLeft: 10, paddingTop: 10 },
    FriendRequestName: { fontSize: 18, fontWeight: '500' },
    buttonWrapper: { flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginRight: 20, marginTop: 5 },
    buttonConfirm: { marginRight: 5, alignItems: 'center', justifyContent: 'center', width: 100, height: 30, backgroundColor: '#1578ef', borderRadius: 5 },
    buttonConfirmText: { color: '#fff', fontWeight: '500' },
    buttonDelete: { alignItems: 'center', justifyContent: 'center', width: 100, height: 30, backgroundColor: '#e9edee', borderRadius: 5 },
    buttonDeleteText: { color: '#1e1e1e', fontWeight: '500' }





})