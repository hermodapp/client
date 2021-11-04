import React from "react";
import "antd/dist/antd.css";
import { Formik } from "formik";
import * as Yup from "yup";
import AuthService from "../services/authService";
import Header from "../Navigations/Header";

import { Form, Input, Button, Typography } from "antd";
const { Title } = Typography;

function Register(props) {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Please confirm your password"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          AuthService.register(values.username, values.password).then(
            () => {
              props.history.push("/login");
              window.location.reload();
            },
            (error) => {
              alert("Register Failed");
            }
          );
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
          <>
            <Header />
            <div className="app py-24 flex flex-col justify-center items-center">
              <Title
                className="flex justify-center items-center text-nord7"
                level={2}
              >
                Sign Up
              </Title>
              <Form
                style={{ minWidth: "375px" }}
                size={"large"}
                onFinish={handleSubmit}
              >
                <Form.Item required label="Username">
                  <Input
                    id="username"
                    placeholder="Enter your name"
                    type="text"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.username && touched.username
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.username && touched.username && (
                    <div className="input-feedback">{errors.username}</div>
                  )}
                </Form.Item>

                <Form.Item
                  required
                  label="Password"
                  hasFeedback
                  validateStatus={
                    errors.password && touched.password ? "error" : "success"
                  }
                >
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Confirm" hasFeedback>
                  <Input
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="input-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-nord7 border-nord7 hover:bg-nord8 login-form-button "
                    style={{ minWidth: "100%" }}
                    disabled={isSubmitting}
                    onSubmit={handleSubmit}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </>
        );
      }}
    </Formik>
  );
}

export default Register;
