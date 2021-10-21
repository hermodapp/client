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
import Header from "./components/Navigations/Header";
import Footer from "./components/Navigations/Footer";
import Form from "./components/Forms/SubmitForm";
import Success from "./components/Forms/Success";
import Dashboard from "./components/AdminDashboard/Dashboard";
import "./App.css";
import "./index.css";
import QrCode from "./components/AdminDashboard/QrCodeGenerator";

import Auth from "./hoc/auth";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";

/* Auth options
null   Anyone can go inside
true   only logged in user can go inside
false  logged in user can't go inside
*/

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/qr_code" component={Auth(QrCode, true)} />
          <Route exact path="/register" component={Auth(Register, false)} />
          <Route exact path="/login" component={Auth(Login, false)} />
          <Route exact path="/submitform" component={Auth(Form, true)} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/dashboard" component={Auth(Dashboard, true)} />
          <Route
            path="/project"
            component={() => {
              window.location.replace(
                "https://project-website-ten.vercel.app/"
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
