import React, { useState } from "react";
import "antd/dist/antd.css";
import "../../index.css";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../_actions/user_actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

const { Title } = Typography;

function LoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const initialUsername = localStorage.getItem("rememberMe")
    ? localStorage.getItem("rememberMe")
    : "";

  return (
    <Formik
      initialValues={{
        username: initialUsername,
        password: "",
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string()
          .min(4, "Password must be at least 4 characters")
          .required("Password is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            withCredentials: true,
            auth: {
              username: values.username,
              password: values.password,
            },
          };

          dispatch(loginUser(dataToSubmit))
            .then((response) => {
              if (response.payload === 200) {
                window.localStorage.setItem("userId", values.username);
                if (rememberMe === true) {
                  window.localStorage.setItem("rememberMe", values.username);
                } else {
                  localStorage.removeItem("rememberMe");
                }
                props.history.push("/");
              } else {
                setFormErrorMessage("Check out your Account or Password again");
              }
            })
            .catch((err) => {
              setFormErrorMessage("Check out your Account or Password again");
              setTimeout(() => {
                setFormErrorMessage("");
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app flex flex-col justify-center items-center">
            <Title
              className="flex justify-center items-center text-nord7"
              level={2}
            >
              Log In
            </Title>
            <Form
              onFinish={handleSubmit}
              style={{ width: "350px" }}
              size="large"
            >
              <Form.Item required className="mb-4">
                <Input
                  id="username"
                  prefix={<UserOutlined />}
                  placeholder="Enter your username"
                  type="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.username && touched.username
                      ? "text-input error hover:border-nord7"
                      : "text-input hover:border-nord7"
                  }
                />
                {errors.username && touched.username && (
                  <div className="input-feedback">{errors.username}</div>
                )}
              </Form.Item>

              <Form.Item required className="mb-2">
                <Input
                  id="password"
                  prefix={<LockOutlined />}
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password
                      ? "text-input error hover:border-nord7"
                      : "text-input hover:border-nord7"
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              {formErrorMessage && (
                <label>
                  <p
                    style={{
                      color: "#ff0000bf",
                      fontSize: "0.7rem",
                      border: "1px solid",
                      padding: "1rem",
                      borderRadius: "10px",
                    }}
                  >
                    {formErrorMessage}
                  </p>
                </label>
              )}

              <Form.Item className="flex flex-row flex-grow-0 justify-start">
                <Checkbox
                  className="float-left"
                  id="rememberMe"
                  onChange={handleRememberMe}
                  checked={rememberMe}
                >
                  Remember Me
                </Checkbox>
                <a
                  className=" login-form-forgot text-nord7 hover:text-nord4"
                  href="/reset_user"
                  style={{ float: "right" }}
                >
                  Forgot Password
                </a>
                <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-nord7 border-nord7 hover:bg-nord8 login-form-button my-2"
                    style={{ minWidth: "100%" }}
                    disabled={isSubmitting}
                    onSubmit={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
                Or{" "}
                <a href="/register" className="text-nord7 hover:text-nord4">
                  Register now!
                </a>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default withRouter(LoginPage);
