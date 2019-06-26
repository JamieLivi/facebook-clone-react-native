import React, { Component } from 'react';
import ThumbnailPhoto from '../SmallComponent/ThumbnailPhoto'
import { Text, View } from 'react-native';

export default class FriendRequest extends Component {

    render() {
        return (
            <View style={{ backgroundColor: 'salmon', flex: 1 }}>
                <View style={{ justifyContent: 'center', height: 50 }}>
                    <Text style={{ fontWeight: '500', fontSize: 18 }}> Friend Requests <Text style={{ color: '#e54449' }}>5</Text> </Text>
                </View>

                <View style={{ height: 100, flexDirection: 'row'}}>
                    <View style={{backgroundColor: 'lavender', flex: 0.8}}>
                        <ThumbnailPhoto characterImageThumb="https://i.ibb.co/d2jWNRv/profile-Picture.jpg" />
                    </View>
                    <View style={{backgroundColor: 'seagreen', flex: 2}}>
                        
                    </View>
                </View>
            </View>
        );
    }
}