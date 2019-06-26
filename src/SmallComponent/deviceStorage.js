import {AsyncStorage} from 'react-native';

const deviceStorage = {
    
    //save data to AsyncStorage
    async saveItem (key, value) {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (error) {console.log('AsyncStorage Error: ' + error.message)}
    },

    //get data from async storage
    async getJwt () {
        try {
            await AsyncStorage.getItem('token')            

        } catch(error) {console.log('AsyncStorage Error: ' + error.message)}
        return value
    }

}

export default deviceStorage