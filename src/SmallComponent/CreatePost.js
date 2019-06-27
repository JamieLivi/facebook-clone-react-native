import React, { Component } from 'react';
import { Text, View, Modal, TouchableHighlight, Alert, Button, ScrollView } from 'react-native';
import ThumbnailPhoto from './ThumbnailPhoto'
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

class CreatePost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={{ paddingHorizontal: 15, height: 50, flexDirection: 'row', alignItems: 'center', backgroundColor: '#4167b2' }}>
                            <Icon
                                style={{ flex: 1 }}
                                name='arrow-left'
                                type='font-awesome'
                                color='#fff'
                                onPress={() => { this.props.navigation.navigate('MainScreen') }} />
                            <Text style={{ flex: 1, marginLeft: 20, fontSize: 20, color: '#fff' }}>Create Post</Text>
                            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <Text style={{ alignSelf: 'center', fontSize: 20, color: 'white' }}>POST</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ flex: 2.5, paddingTop: 15, paddingLeft: 10 }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 0.4, marginRight: 15 }}>
                                    <ThumbnailPhoto characterImageThumb="https://i.ibb.co/d2jWNRv/profile-Picture.jpg" />
                                </View>
                                <View style={{ flex: 2 }}>
                                    <Text style={{ fontSize: 17, fontWeight: '500', color: '#151515' }}>Lord Rahadian Of Buahbatu</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ marginRight: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderWidth: 1, borderRadius: 5, padding: 5, width: 100, borderColor: '#bdc1c5' }}>
                                            <Icon
                                                style={{}}
                                                size={20}
                                                name='lock'
                                                type='font-awesome'
                                                color='#bdc1c5' />
                                            <Text style={{ color: '#bdc1c5' }}>Only Me</Text>
                                            <Icon
                                                style={{}}
                                                size={19}
                                                name='caret-down'
                                                type='font-awesome'
                                                color='#bdc1c5' />

                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderWidth: 1, borderRadius: 5, padding: 5, width: 100, borderColor: '#bdc1c5' }}>
                                            <Icon
                                                style={{}}
                                                size={20}
                                                name='plus'
                                                type='font-awesome'
                                                color='#bdc1c5' />
                                            <Text style={{ color: '#bdc1c5' }}>Album</Text>
                                            <Icon
                                                style={{}}
                                                size={19}
                                                name='caret-down'
                                                type='font-awesome'
                                                color='#bdc1c5' />

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ height: 300 }}>
                        <TextInput style={{ paddingLeft: 15, fontSize: 25, color: '#151515' }}
                            placeholderTextColor="#bdc1c5" multiline={true}
                            placeholder="What's On Your Mind ?">
                        </TextInput>
                    </View>

                    <View style={{ flex: 1, backgroundColor: 'purple' }}>

                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default withNavigation(CreatePost)