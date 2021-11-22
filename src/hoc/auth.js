/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Axios from "axios";
import axiosRetry from "axios-retry";
import authHeader from "../components/services/authHeader";

import AuthService from "../components/services/authService";
const API_URL = "https://test.hermodapp.com/";
axiosRetry(Axios, { retries: 3 });

export default function (SpecificComponent, option) {
  function AuthenticationCheck(props) {
    const user = AuthService.getCurrentUser();

    useEffect(() => {
      var res;
      if (option !== null) {
        Axios.get(API_URL + "whoami", { headers: authHeader() })
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
      }
    }, []);

    return <SpecificComponent {...props} user={user} />;
  }
  return AuthenticationCheck;
}
