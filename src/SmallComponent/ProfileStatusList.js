import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class ProfileStatusList extends Component {
    render() {
        return (
            <View style={styles.profileStatusContainer}>
                <View style={styles.profileStatusItem}>
                    <Icon name='home' type='font-awesome' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        Lives in <Text style={styles.profileStatusItemTextBold}>Bandung City</Text>
                    </Text>
                </View>
                <View style={styles.profileStatusItem}>
                    <Icon name='place' type='material' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        From <Text style={styles.profileStatusItemTextBold}>Daerah Khusus Ibu Kota Jakarta</Text>
                    </Text>
                </View>
                <View style={styles.profileStatusItem}>
                    <Icon name='heart' type='material-community' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        In Relationship with <Text style={styles.profileStatusItemTextBold}>Him Self</Text>
                    </Text>
                </View>
                <View style={styles.profileStatusItem}>
                    <Icon name='id-card' type='font-awesome' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        Followed By <Text style={styles.profileStatusItemTextBold}>13M People</Text>
                    </Text>
                </View>
                <View style={styles.profileStatusItem}>
                    <Icon name='instagram' type='material-community' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        itsmerahadian
                    </Text>
                </View>
                <View style={styles.profileStatusItem}>
                    <Icon name='github-circle' type='material-community' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        rahadian347
                    </Text>
                </View>
                <View style={styles.profileStatusItem}>
                    <Icon name='dots-horizontal' type='material-community' style={styles.justifyContent} />
                    <Text style={styles.profileStatusItemText} >
                        See Information About You
                    </Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({


    profileStatusContainer: {
        alignItems: 'flex-start',
        flex: 1
    },
    profileStatusItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 5,
    },
    profileStatusItemText: {
        marginHorizontal: 10,
        fontSize: 20,
    },
    profileStatusItemTextBold: {
        fontWeight: '500'
    },
})