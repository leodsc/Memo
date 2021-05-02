import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const api_url= "http://localhost:8080/api/auth/";

class AuthService{

    register = (username, email, password)=>{
        axios.post(api_url + "signup",{
            username,
            email,
            password
        }).then(function(response){
            console.log(JSON.stringify(response));
        }).catch(function(error){
            console.log(JSON.stringify(error));
        })
    };
    
    login = (username, password) =>{
        return axios.post(api_url+ "singin", {
            username,
            password
        }).then((response)=>{
            if(response.data.accessToken){
                AsyncStorage.setItem("@user", JSON.stringify(response.data))
            }
            console.log(JSON.stringify(response.data))
            return response.data;
    
        })
    };
    
    logout = async ()=>{
        try {
            await AsyncStorage.removeItem("@user");
            return true;
        }
        catch(exception) {
            return false;
        }
    }
    
    getCurrentUser= async () =>{
        try{
            const value = await AsyncStorage.getItem('@user')
            if(value!==null){
                return value;
            }
        }
        catch(e){
            console.log(JSON.stringify(e))
    
        }
    }

}



export default new AuthService;