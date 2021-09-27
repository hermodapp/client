import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage"
import About from "./components/LandingPage/About"
import Services from "./components/LandingPage/Services";
import Header from "./components/Navigations/Header";
import Footer from "./components/Navigations/Footer";
import "./App.css";
import "./index.css"

function App() {
  return (
    <div className="App">
      <Header/>
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/about" component={About} /> 
          </Switch>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
