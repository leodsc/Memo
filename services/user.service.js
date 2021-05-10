import axios from "axios";
import authHeader from "./auth-header";

const api_url= "https://testingtwilioapi232323.loca.lt/api/test/";

const getPublicContent = () => {
    return axios.get(api_url + "all");
  };
  
  const getUserBoard = () => {
    return axios.get(api_url + "user", { headers: authHeader() });
  };

  export default {
    getPublicContent,
    getUserBoard,
  };