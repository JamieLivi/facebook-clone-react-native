import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableOpacity, View, Alert, Image } from 'react-native';

export default class PostModal extends Component {
    constructor() {
        super()
        this.state ={
            modalVisible: false
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ marginTop: 10 }}>
                <Modal

                    animationType="slide"
                    transparent={false}
                    visible={this.props.visible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.props.visible)
                    }}>


                    <View style={{ flex: 1, backgroundColor: '#00000090' }}>
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
                {/* <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight> */}
            </View>
        );
    }
}