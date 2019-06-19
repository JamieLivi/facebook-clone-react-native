
import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity, Alert } from 'react-native';
import MenuTop from './MenuTop';
import { Icon } from 'react-native-elements'

const showAlert = () => {
    Alert.alert(
        'Maaf Belum Bisa Apa2'
    )
}

export default class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '##fff' }}>
                <ScrollView
                    stickyHeaderIndices={[0]}
                >
                    <MenuTop style={styles.menuFixed} />
                    <View style={styles.body}>
                        <View style={styles.banner}>
                            <Image style={styles.bannerImage} source={require('./android/app/src/main/assets/img/loginhead.png')} />
                        </View >
                        <View style={styles.profilePictureContainer}>
                            <View style={styles.profilePicture}>

                            </View>
                        </View>
                        <View style={styles.profileInformationContainer}>
                            <Text style={styles.profileInformation} style={{ fontWeight: '500', fontSize: 22 }}>Rahadian Permana</Text>
                            <Text style={styles.profileInformation}>Ini Status Saya, Bukan Status Anda, Atau Mereka</Text>
                        </View>
                        <View style={styles.profileMenuButton}>
                            <ButtonCircle buttonName='Add Story' name='add' type='material' color='#427df4' />
                            <ButtonCircle buttonName='View As' name='visibility' type='material' color='#1e1f21' />
                            <ButtonCircle buttonName='Edit Profile' name='user' type='font-awesome' color='#1e1f21' />
                            <ButtonCircle buttonName='More' name='dots-horizontal' type='material-community' color='#1e1f21' />
                        </View>
                        <View style={{flex: 1, backgroundColor: 'olive', height: 280}}>

                        </View>
                       
                    </View>
                </ScrollView>
            </View>
        );
    }
}

class ButtonCircle extends Component {
    render() {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={showAlert} style={{alignItems: 'center'}}>
                    <View style={styles.myCircleButton}>
                        <Icon
                            name={this.props.name}
                            type={this.props.type}
                            color={this.props.color}
                        />
                    </View>
                    <Text style={{ color: this.props.color}}>{this.props.buttonName}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        // backgroundColor: 'red',
        flex: 5,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,

    },
    banner: {
        height: 200,
        marginHorizontal: 15,
        marginTop: 15,
        justifyContent: 'flex-start'
    },
    bannerImage: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: '100%',
        width: '100%'

    },
    profilePictureContainer: {
        // backgroundColor: 'green',
        height: 110,
        position: 'relative'
    },
    profilePicture: {
        backgroundColor: 'white',
        height: 180,
        width: 180,
        position: 'absolute',
        borderRadius: 90,
        borderWidth: 6,
        borderColor: '#427df4',
        right: 0,
        left: 90,
        bottom: 0,
        top: -80
    },
    profileInformationContainer: {
        // backgroundColor: 'teal',
        height: 90,
        position: 'relative',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginHorizontal: 30
    },
    profileInformation: {
        textAlign: 'center',
    }, 
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    myCircleButton: {
        height: 60,
        width: 60,  //The Width must be the same as the height
        borderRadius: 80, //Then Make the Border Radius twice the size of width or Height   
        backgroundColor: '#efeff7',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    profileMenuButton : {
        flex: 1, 
        flexDirection: 'row', 
        marginHorizontal: 19
    }

})








