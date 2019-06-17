/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Container, Header, Content, Left, Right, Body, Icon, Button, Item, Input, StyleProvider } from 'native-base';
import Login from './Login';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class Profile extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container style={{ flex: 1 }}>
                    {/* searchBar */}
                    <Header style={{backgroundColor: '#4267b2ff', height: 100, flexDirection: 'column', marginHorizontal: 0 }} noShadow>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Left style={{ flex: 1 }}>
                                <Button transparent>
                                    <Icon name='camera' />
                                </Button >
                            </Left>
                            <Body style={{ flex: 6 }}>
                                <Item >
                                    <Icon style={{ fontSize: 20, color: '#FFF' }} name='search' />
                                    <Input placeholder='Cari' placeholderTextColor="white" style={{ alignItems: 'center', height: 40, color: 'white' }} />
                                </Item>
                            </Body>
                            <Right style={{ flex: 1 }}>
                                <Button transparent>
                                    <Icon type="Ionicons" name='chatbubbles' />
                                </Button >
                            </Right>
                        </View>
                        <View style={{ alignItems: 'center', width: '106%', borderBottomWidth: 1, backgroundColor: 'white', flex: 1, flexDirection: 'row', marginHorizontal: -10 }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='camera' />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='camera' />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='camera' />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='camera' />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='camera' />
                            </View>
                        </View>
                    </Header>
                    <View style={{ flex: 1, backgroundColor: 'red' }}>
                        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
                        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
                    </View>

                    {/* Menubar*/}
                    <Content>
                       
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}








