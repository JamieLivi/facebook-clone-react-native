import React, { Component } from 'react';
import { Text, View, Modal, TouchableHighlight, Alert, Button } from 'react-native';
import {withNavigation} from 'react-navigation'

class Notification extends Component {


    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text>This Is Notification</Text>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="Click Me" >

                </Button>
                {/* <View style={{ marginTop: 22 }}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View>
                                <Text>Hello World!</Text>

                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>

                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <Text>Show Modal</Text>
                    </TouchableHighlight>
                </View> */}
            </View>
        );
    }
}
export default withNavigation(Notification)