import React, { Component } from 'react';
import { View, ScrollView, Image, TextInput, FlatList } from 'react-native';
import Story from '../SmallComponent/Story';
import Post from '../SmallComponent/Post';
import ThumbnailPhoto from '../SmallComponent/ThumbnailPhoto'
import data from '../dummyData/status.json';

const attachIcon = require('../assets/icon/attach.png')

class Home extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#dadee1' }}>

                <View style={{ flex: 1, backgroundColor: '#dadee1' }}>

                    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 2, flexDirection: 'row', height: 70, padding: 15 }}>
                        <ThumbnailPhoto characterImageThumb={data[0].characterImageThumb} style={{ width: 40 }} />
                        <View style={{ flex: 1, padding: 2, marginLeft: 7 }}>
                            <TextInput placeholder="What's on your mind?" style={{ paddingLeft: 20, paddingTop: 12, paddingRight: 40, borderWidth: 1, borderRadius: 20, borderColor: '#ebebeb' }} />
                        </View>
                        <View style={{ width: 40, justifyContent: 'center', alignItems: 'center', marginTop: 3 }}>
                            <Image source={attachIcon} style={{ width: '52%', height: '55%', marginBottom: 2 }} />
                        </View>
                    </View>

                    <View style={{justifyContent: 'space-around', flex: 1, flexDirection: 'row', backgroundColor: '#fff', marginVertical: 15, height: 220 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 20 }}>
                            {
                                data.slice(0,6).map((e,i) => <Story e={e} key={i} />)
                            }
                        </ScrollView>
                    </View>

                    <FlatList
                        data={data}
                        renderItem={({ item }) => <Post data={item} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default Home;