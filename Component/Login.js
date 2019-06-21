/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Alert } from 'react-native';
import { Container, Content, Form, Item, Input, Button, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

// variable initialization
const images = {
	image1: require('../android/app/src/main/assets/img/loginhead.png'),
	image2: require('../android/app/src/main/assets/img/facebookLogo.png')
}

onChangePicture = () => {
	// this.setState({
	// 	image: images.image2
	// })
	Alert.alert(
		'Maaf Belum Bisa Apa2'
	)
}


export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: 'rahadian.permana',
			password: '12345678',
			image : images.image1
		}
	}

	render() {

		return (
			<StyleProvider style={getTheme(material)}>
				<Container style={styles.container}>

					<Content>
						<View style={styles.header}>
							<Image
								style={styles.logo}
								// resizeMode="contain"
								source={this.state.image}
							/>
							<Text style={{ textAlign: 'center', marginTop: 5 }}>Bahasa Indonesia • English • More..</Text>
						</View>
						<View style={styles.body}>

							<Form >
								<Item onFocus={this.onChangePicture} fixedLabel style={styles.item}>
									<Input onFocus={this.onChangePicture} placeholder="Email or Phone" value={this.state.username} />
								</Item>
								<Item fixedLabel style={styles.item}>
									<Input secureTextEntry={true} placeholder="Password" value={this.state.password} />
								</Item>
							</Form>
							<Button block style={styles.buttonLogin} onPress={() => {
								this.props.navigation.navigate('Profile')
							}}>
								<Text style={{ color: '#fff' }}>Log In</Text>
							</Button>
							<Text style={styles.forgotPass}>Forgot Password ?</Text>
							<View style={styles.wrapperLine}>
								<View style={styles.halfLine}>
									<View styles={styles.line} />
								</View>
								<View style={styles.orLine}>
									<Text>OR</Text>
								</View>
								<View style={styles.halfLine}>
									<View styles={styles.line} />
								</View>
							</View>
							<View style={styles.wrapperButtonSignup}>
								<Button block style={styles.buttonSignup}>
									<Text style={{ color: '#fff' }}>Create New Account</Text>
								</Button>
							</View>
						</View>
					</Content>
				</Container>
			</StyleProvider>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		height: 200,
		width: '100%'
	},
	body: {
		flex: 1,
		marginHorizontal: 25,
		marginTop: 20,
	},
	item: {
		marginBottom: 20,
		backgroundColor: '#fff',
		marginLeft: 0,

	},
	buttonLogin: {
		backgroundColor: '#223b73',
		marginBottom: 20,
		alignItems: 'center',
		justifyContent: 'center'

	},
	forgotPass: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#223b73',
		textAlign: 'center'
	},
	wrapperLine: {
		flex: 1,
		flexDirection: 'row',
		marginVertical: 20
	},
	halfLine: {
		width: '45%',
		backgroundColor: '#e3e3e3',
		height: 3,
		marginTop: 9

	},
	orLine: {
		width: '10%',
		textAlign: 'center',
		alignItems: 'center'
	},
	wrapperButtonSignup: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	buttonSignup: {
		backgroundColor: '#07A007',
		marginBottom: 20,
		width: '90%'
	},
})






