import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/LandingPage/About";
import Services from "./components/LandingPage/Services";
import Footer from "./components/Navigations/Footer";
import Form from "./components/Forms/SubmitForm";
import Success from "./components/Forms/Success";
import Home from "./components/AdminDashboard/Home";
import "./App.css";
import "./index.css";
import QrCode from "./components/AdminDashboard/QrCodeGenerator";

import Auth from "./hoc/auth";
import LoginPage from "./components/Authentication/LoginPage";
import RegisterPage from "./components/Authentication/RegisterPage";

function App() {
  return (
    <div className="App">
      <div style={{minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/qr_code" component={Auth(QrCode, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/submitform" component={Form} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/home" component={Home} />
          <Route
            path="/project"
            component={() => {
              window.location.replace(
                "https://project-website-plum.vercel.app/"
              );
              return null;
            }}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
