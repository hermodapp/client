import {useState, useCallback} from 'react';
import {NavLink} from "react-router-dom";
import "tailwindcss/tailwind.css";
import Dashboard from "../Navigations/Dashboard"
import Form from"../AdminDashboard/ManageForm"

export default function Home() {
    return(
        <>
        <Dashboard/>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Home</title>
        </head>
        <body className="pl-24 h-screen">
            <section className="container flex justify-between justify-items-center h-3/5 pb-4">
                <div className="border flex w-1/2 shadow-md hover:shadow-2xl rounded-2xl">
                    <div className="w-full">
                    <div className="flex justify-center justify-items-center bg-gradient-to-r from-nord8 via-nord9 to-nord10 rounded-t-2xl">
                        <h1 className="lg:text-2xl md:text-2xl sm:text-base pb-2 text-nord16 font-semibold mt-4">Overview</h1>
                        </div>
                        <div className="flex justify-center">

                        </div>
                    </div> 
                </div>
                <div className="border flex w-1/2 ml-2 rounded-2xl shadow-md hover:shadow-2xl">
                    <div className="w-full">
                    <div className="flex justify-center justify-items-center bg-gradient-to-r from-nord8 via-nord9 to-nord10 rounded-t-2xl">
                        <h1 className="lg:text-2xl md:text-2xl sm:text-base pb-2 text-nord16 font-semibold mt-4">Statistics</h1>
                        </div>
                        <div className="flex">
                         
                        </div>
                    </div> 
                </div>
            </section>
            <section className="container flex justify-center justify-items-center h-2/5 rounded-2xl">
                <div className="border flex w-full rounded-2xl shadow-md hover:shadow-2xl">
                    <div className="w-full">
                        <div className="flex flex-col justify-center justify-items-center  bg-gradient-to-r from-nord8 via-nord9 to-nord10 rounded-t-2xl">
                            <h1 className="lg:text-2xl md:text-2xl sm:text-base pb-2 text-nord16 font-semibold mt-4">Forms</h1>
                        </div>
                        <div className="flex flex-row h-full border-t border-nord0 w-full pl-4">
                            <div className="w-11/12">

                            </div>
                            <div className="mr-1">
                                <NavLink to="/manageform">
                                    <button className="border border-nord1 h-8 w-12 rounded-lg ml-2 mt-1 bg-nord3 text-nord6 md:mr-4 lg:mr-16">View</button>
                                </NavLink>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </body>
        </>
    )
}