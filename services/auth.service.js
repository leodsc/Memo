import axios from "axios";

const api_url= "http://localhost:8080/api/auth/";

const register = (username, email, password)=>{
    axios.post(api_url + "signup",{
        username,
        email,
        password
    }).then(function(response){
        console.log(response);
    }).catch(function(error){
        console.log(error);
    })
};

const login = (username, password) =>{
    return axios.post(api_url+"singin", {
        username,
        password
    }).then((response)=>{
        if(response.data.accessToken){
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data;

    })
}

const logout = ()=>{
    localStorage.removeItem("user");
}

const getCurrentUser= () =>{
    return JSON.parse(localStorage.getItem("user"))
}

export default{
    register,
    login,
    logout,
    getCurrentUser
}