import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class ThumbnailPhoto extends Component {
    render() {
        return (
            <View style={this.props.style}>
                <Image source={require("../assets/img/profilePicture.jpg")} style={styles.thumb} />
            </View>
        )
    }
}

export default ThumbnailPhoto;

const styles = StyleSheet.create({
    thumb: { width: '100%', height: '100%', borderRadius: 100 }
})
