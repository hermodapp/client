import { ConsoleSqlOutlined } from "@ant-design/icons";
import axios from "axios";
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from "./types";
const base_url = "https://api.hermodapp.com/";

export function registerUser(dataToSubmit) {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const request = axios
    .post(base_url + "register", dataToSubmit, config)
    .then((response) => {
      console.log(response);
      return response.status;
    });

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .get(base_url + "login", dataToSubmit)
    .then((response) => response.status);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(base_url + "logout")
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}
