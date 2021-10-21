import axios from "axios";
import qs from "qs";

const API_URL = "https://api.hermodapp.com/";

const register = (username, password) => {
  const dataToSubmit = qs.stringify({
    username: username,
    password: password,
  });
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  return axios.post(API_URL + "register", dataToSubmit, config);
};

const login = (username, password) => {
  let dataToSubmit = {
    withCredentials: true,
    auth: {
      username: username,
      password: password,
    },
  };

  return axios.get(API_URL + "login", dataToSubmit).then((response) => {
    if (response.data && response.status === 200) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
