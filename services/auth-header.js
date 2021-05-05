import AsyncStorage from '@react-native-async-storage/async-storage';


export default async function authHeader(){
    const user = JSON.parse(await AsyncStorage.getItem("@user"))

    if(user && user.accessToken){
        return {'x-access-token': user.accessToken}
    }else{
        return{};
    }
}