import React, { Component } from 'react';
import { Modal, Text, TouchableWithoutFeedback, TouchableOpacity, View, Alert, Image } from 'react-native';

export default class PostModal extends Component {
    constructor(props) {
        super(props)
        this.state ={
            modalVisible: this.props.visible
        }
        // console.log(`========> ${this.state.modalVisible}`)
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        const data = this.props.data
        const navigation = this.props.navigation
        return (
            <View style={{ marginTop: 10 }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.props.requestclose
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
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        );
    }
}