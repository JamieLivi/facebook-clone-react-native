
import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Alert } from 'react-native';
import { Container, Content, Form, Item, Input, Button, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import axios from 'axios';
import {ENV} from '../dummyData/variable'
import { withNavigation } from 'react-navigation'
import deviceStorage from '../SmallComponent/deviceStorage'


// variable initialization
const images = {
	image1: require('../assets/img/loginhead.png'),
	image2: require('../assets/img/loginhead-white.png')
}

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			jwt: null,
			password: '',
			error: '',
			loading: false,
			image: images.image1
		}
	}

	onChangePictureFocus = () => {
		this.setState({
			image: images.image2
		})
	}
	onChangePictureBlur = () => {
		this.setState({
			image: images.image1
		})
	}

	handleUserLogin=(e) => {
		const { username, password } = this.state
		// console.log(ENV.url)
		axios.post(`${ENV.url}/login`, {
			username, password
		})
			.then(response => {
				let jwt = response.data.token
				let userData = JSON.stringify(response.data.data)
				this.setState({ error: '', loading: true, jwt: jwt })
				if (jwt !== null) {
					this.setState({
						loading: false
					})
					deviceStorage.saveItem("token", response.data.token)
					deviceStorage.saveItem("user", userData)
					this.props.navigation.navigate('AuthLoading', {
						jawet: response.data.token
					})
				} else {
					e.preventDefault()
				}
			
			})
			.catch(err => {
				this.setState({
					error: 'Login Failed..',
					loading: false
				})
				alert('Login Failed')
			})
	}

	render() {

		return (
			<StyleProvider style={getTheme(material)}>
				<Container style={styles.container}>

					<Content>
						<View style={styles.header}>
							<Image
								style={styles.logo}
								source={this.state.image}
								resizeMode='cover'
							/>
							<Text style={{ textAlign: 'center', marginTop: 5 }}>Bahasa Indonesia • English • More..</Text>
						</View>
						<View style={styles.body}>

							<Form onFocus={this.onChangePictureFocus}>
								<Item fixedLabel style={styles.item}>
									<Input onChangeText={(username) => { this.setState({ username }) }}
										placeholder="Email or Phone"
										onBlur={this.onChangePictureFocus}
										value={this.state.username} />
								</Item>
								<Item fixedLabel style={styles.item}>
									<Input onBlur={this.onChangePictureBlur}
										onChangeText={(password) => { this.setState({ password }) }}
										secureTextEntry={true}
										placeholder="Password" value={this.state.password} />
								</Item>
							</Form>
							<Button block style={styles.buttonLogin} onPress={this.handleUserLogin}>
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

export default withNavigation(Login)


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
		height: 165,
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
		flexDirection: 'row'
	},
	buttonSignup: {
		backgroundColor: '#07A007',
		marginBottom: 20,
		width: '90%'
	},
})






