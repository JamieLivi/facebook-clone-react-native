import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

class Story extends Component {
    render() {
        return (
            <View style={styles.wrapperStory}>
                <Image source={require('../../assets/img/anjay.jpg')} style={styles.imageStory} />
                <View style={styles.wrapperProfilePicture}>
                    <Text style={styles.addStory}>+</Text>
                </View>
            </View>
        );
    }
}

export default Story;

const styles = StyleSheet.create({
    wrapperStory: { height: '100%', width: 100, position: 'relative', marginRight: 7 },
    imageStory: { height: '100%', width: '100%', borderRadius: 10 },
    wrapperProfilePicture: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
        position: 'absolute',
        borderRadius: 50,
        top: 7,
        left: 7
    },
    addStory: { fontSize: 30, color: "#4167b0" }
})