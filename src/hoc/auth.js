/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import axios from "axios";
import authHeader from "../components/services/authHeader";

import AuthService from "../components/services/authService";
const API_URL = "https://api.hermodapp.com/";

export default function (SpecificComponent, option) {
  function AuthenticationCheck(props) {
    const user = AuthService.getCurrentUser();

    useEffect(() => {
      var res;
      axios
        .get(API_URL + "whoami", { headers: authHeader() })
        .then((response) => {
          res = response;
          if (res && res.status === 200) {
            if (!option) {
              props.history.push("/");
            }
          }
        })
        .catch((error) => {
          if (option) {
            props.history.push("/login");
          }
        });
    }, []);

    return <SpecificComponent {...props} user={user} />;
  }
  return AuthenticationCheck;
}
