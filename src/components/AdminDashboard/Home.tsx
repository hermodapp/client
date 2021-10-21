import {useState, useCallback} from 'react';
import {NavLink} from "react-router-dom";
import "tailwindcss/tailwind.css";
import Dashboard from "../Navigations/Dashboard"

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
                    <div className="flex justify-center justify-items-center">
                            <h1 className="text-bold font-medium text-lg w-full row">
                                Overview
                            </h1>
                        </div>
                        <div className="flex border justify-center">
                            something
                        </div>
                    </div> 
                </div>
                <div className="border flex w-1/2 pl-4 ml-2 rounded-2xl shadow-md hover:shadow-2xl">
                    <div className="w-full">
                    <div className="flex justify-center justify-items-center">
                            <h1 className="text-bold font-medium text-lg w-full row">
                                Statistics
                            </h1>
                        </div>
                        <div className="flex">
                         
                        </div>
                    </div> 
                </div>
            </section>
            <section className="container flex justify-center justify-items-center h-2/5">
                <div className="border flex w-full rounded-2xl shadow-md hover:shadow-2xl">
                    <div className="w-full">
                    <div className="flex justify-center justify-items-center">
                            <h1 className="text-bold font-medium text-lg w-full row">
                                Inbox
                            </h1>
                        </div>
                        <div className="flex">
                         
                        </div>
                    </div> 
                </div>
            </section>
        </body>
        </>
    )
}