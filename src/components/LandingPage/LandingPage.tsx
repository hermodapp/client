import React, {Component, useState, useRef, useEffect} from "react";
import { NavLink, Link} from "react-router-dom";
import "../../index.css"

export default class LandingPage extends React.Component{
  render() {
    return ( 
    <>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who We Are
            </h1>
            <p className="text-nord3 font-medium text-justify">
              Hermod is an automated customer interaction tool which streamlines
              communication between businesses and their customers. Customers
              simply scan a QR code printed in a public place to load a Hermod
              webform, which allows them to rapidly and seamlessly interact with
              the company with knowledge of the customer’s location (i.e. table
              at a restaurant, hotel room number, bathroom stall number) without
              disclosing personal information. After the webform is submitted,
              the application will dispatch an automated message on their behalf
              to the company. This message could be performed using a Twilio
              text-to-speech message, an SMS text message, email, or a push
              notification.
            </p>
            <div className="flex justify-center">
              <Link to="./Services">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-nord1 hover:text-nord6 rounded text-lg text-nord7">Our Services</button>
              </Link>
              <Link to="/">
                <button className="ml-4 inline-flex text-nord1 border-0 py-2 px-6 focus:outline-none hover:bg-nord8 rounded text-lg">Start Here</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are group of seniors in Computer Science at The University of Alabama.</p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80/edf2f7/a5afbd"/>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Russell Weas</h2>
                  <p className="text-gray-500">Backend Developer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84/edf2f7/a5afbd"/>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Jonathan Pence</h2>
                  <p className="text-gray-500">Backend Developer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88/edf2f7/a5afbd"/>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Thien An Duong Do</h2>
                  <p className="text-gray-500">Frontend Developer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90/edf2f7/a5afbd"/>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Sanghyun Simon Jeon</h2>
                  <p className="text-gray-500">Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/About" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </NavLink>
        </div>
      </section>
      {/* <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </section> */}
      {/* <section>
      <div className="flex flex-col min-h-screen justify-center items-center -mt-40">
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex m-0 text-center leading-5 text-6xl">
            <a
              className="text-nord8 hover:underline focus:underline active:underline"
              href="https://hermodapp.com"
            >
              Hermod
            </a>
          </h1>

          <div className="flex flex-row items-center justify-center flex-wrap max-w-screen-md mt-4">
            <div className="flex-grow m-4 p-6 text-left rounded-xl border-nord4 border-2 hover:border-nord1 focus:border-nord1 active:border-nord1 w-2/5 h-auto">
            <NavLink to="/about">
                <h3 className="mb-6 text-2xl text-nord7">About &rarr;</h3>
                <p className="m-0 text-xl">
                  Meet our team members and learn about who we are!
                </p>
            </NavLink>
            </div>

            <div className="flex-grow m-4 p-6 text-left rounded-xl border-nord4 border-2 hover:border-nord1 focus:border-nord1 active:border-nord1 w-2/5 h-auto">
            <NavLink to="/deliverables" >
                <h3 className="mb-6 text-2xl text-nord7">
                  Deliverables &rarr;
                </h3>
                <p className="m-0 text-xl">
                  Access our github and all other deliverable documentations!
                </p>
            </NavLink>
          </div>
          </div>
          <div className="flex flex-row items-center justify-center flex-wrap max-w-screen-md mt-0">
            <h3 className="mb-4 text-2xl text-nord10">Overview</h3>
            <p className="text-nord3 font-medium text-justify">
              Hermod is an automated customer interaction tool which streamlines
              communication between businesses and their customers. Customers
              simply scan a QR code printed in a public place to load a Hermod
              webform, which allows them to rapidly and seamlessly interact with
              the company with knowledge of the customer’s location (i.e. table
              at a restaurant, hotel room number, bathroom stall number) without
              disclosing personal information. After the webform is submitted,
              the application will dispatch an automated message on their behalf
              to the company. This message could be performed using a Twilio
              text-to-speech message, an SMS text message, email, or a push
              notification.
            </p>
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
  }
}