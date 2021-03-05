//import data from the API
import axios from "axios";

function usersList() {
    return axios.get("https://randomuser.me/api/?results=100&nat=US");
  }

//export
export default {
    usersList
  };