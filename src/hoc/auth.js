/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { loginUser } from "../_actions/user_actions";
import { useSelector, useDispatch } from "react-redux";

export default function (SpecificComponent, option) {
  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      //To know my current status, send Auth request
      dispatch(loginUser()).then((response) => {
        console.log(response);
        //Not Logged in Status
        if (response.payload !== 200) {
          if (option) {
            props.history.push("/login");
          }
          //Logged in status
        } else {
          //supposed to be Admin page, but not admin person wants to go inside
          if (option === false) {
            props.history.push("/");
          }
        }
      });
    }, []);

    return <SpecificComponent {...props} user={user} />;
  }
  return AuthenticationCheck;
}
