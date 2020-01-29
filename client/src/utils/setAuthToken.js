import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //Add to every request
    axios.defaults.headers.common["Authorisation"] = token;
  } else {
    //Delete auth header
    delete axios.defaults.headers.common["Authorisation"];
  }
};

export default setAuthToken;
