import React, {Component, useState, useRef, useEffect} from "react";
import { NavLink, Link} from "react-router-dom";
import "tailwindcss/tailwind.css";
import Header from "../Navigations/Header";

export default class Success extends React.Component{
    render() {
      return (
          <>
          <Header/>
          <section className="py-36">
              <div>
                <h1>
                    Success! Your responses were submitted. You may now close the browers.
                </h1>
              </div>
          </section>
          </>
       )
    }
}
