import React, { Component, useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../index.css";
import { ReactComponent as HermodLogo } from "../../svgs/hermod.svg";
import russ from "../../images/russ.png";
import Lois from "../../images/LoisGriffin.png";
import Header from "../Navigations/Header";
import Simon from "../../images/simon1.png";
import Jonathan from "../../images/jonathan.jpg";

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
      <Header/>
        <section className="text-gray-700 body-font bg-nord6">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Who We Are
              </h1>
              <p className="text-nord3 font-medium text-justify">
                Hermod is an automated customer interaction tool which
                streamlines communication between businesses and their
                customers. Customers simply scan a QR code printed in a public
                place to load a Hermod webform, which allows them to rapidly and
                seamlessly interact with the company with knowledge of the
                customer’s location (i.e. table at a restaurant, hotel room
                number, bathroom stall number) without disclosing personal
                information. After the webform is submitted, the application
                will dispatch an automated message on their behalf to the
                company. This message could be performed using a Twilio
                text-to-speech message, an SMS text message, email, or a push
                notification.
              </p>
              <div className="flex justify-center">
                <Link to="./Services">
                  <button className="mt-6 inline-flex text-nord1 bg-nord7 border-0 py-2 px-6 focus:outline-none hover:bg-nord8 hover:text-nord3 rounded text-lg">
                    Our Services
                  </button>
                </Link>
                <Link to="/">
                  <button className="mt-6 ml-4 inline-flex text-nord1 border border-nord3 py-2 px-6 hover:border-nord8 hover:text-nord8 rounded text-lg">
                    Start Here
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <HermodLogo className="object-cover object-center rounded" />
            </div>
          </div>
        </section>
        <section className="text-gray-700 body-font border-t border-gray-200">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Our Team
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                We are a group of seniors majoring in Computer Science at The
                University of Alabama.
              </p>
            </div>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={russ}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Russell Weas
                    </h2>
                    <p className="text-gray-500">Backend Developer</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={Jonathan}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Jonathan Pence
                    </h2>
                    <p className="text-gray-500">Backend Developer</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={Lois}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Do Thien An Duong
                    </h2>
                    <p className="text-gray-500">Frontend Developer</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={Simon}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Sanghyun Simon Jeon
                    </h2>
                    <p className="text-gray-500">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <NavLink
              to="/About"
              className="mt-3 text-nord7 font-medium inline-flex items-center"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </NavLink>
          </div>
        </section>
      </>
    );
  }
}
