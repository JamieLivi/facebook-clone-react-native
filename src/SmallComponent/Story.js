import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import ThumbnailPhoto from './ThumbnailPhoto';

export default class Story extends Component {
    
    render() {
        return (
            <View style={styles.wrapperStory}>
                <Image source={{uri: this.props.e.characterImageFull}} style={styles.imageStory} />
                <View style={styles.wrapperProfilePicture}>
                    {/* <ImageBackground imageStyle={{ borderRadius: 4 }} resizeMode='cover' style={{height: 50, width: 50, borderRadius: '50%'}} source={{ uri: this.props.e.characterImageFull }}></ImageBackground> */}
                    <ThumbnailPhoto characterImageThumb={this.props.e.characterImageFull} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapperStory: {
        height: '100%',
        width: 100,
        position: 'relative',
        marginRight: 7
    },
    imageStory: {
        height: '100%',
        width: '100%',
        borderRadius: 10
    },
    wrapperProfilePicture: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
        position: 'absolute',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#427df4',
        top: 7,
        left: 7
    },
    addStory: {
        fontSize: 30,
        color: "#4167b0"
    }
})