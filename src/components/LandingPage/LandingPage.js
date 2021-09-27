import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css"

export default function LandingPage() {
  return (
    <>
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

          <p className="flex text-center text-2xl leading-5 mt-8">
            <code className="bg-nord5 rounded p-2">CS495 Project </code>
          </p>

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
    </>
  );
}