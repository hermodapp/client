import {useState, useCallback} from 'react';
import {NavLink} from "react-router-dom";
import "tailwindcss/tailwind.css";
import { ReactComponent as HermodLogo } from "../../svgs/hermod.svg";
import {AiOutlineHome, AiOutlineQrcode, AiOutlineSetting, AiOutlineLogout, AiOutlineMenu, AiOutlineUser} from 'react-icons/ai'
import {HiOutlineChartSquareBar} from 'react-icons/hi'
import Dashboard from "../Navigations/Dashboard"

export default function Home() {
    return(
        <>
        <Dashboard/>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Home</title>
        </head>
        <body className="pl-24 h-screen border">
            <section className="container flex border justify-between justify-items-center h-3/5">
                <div className="border flex w-1/2 mx-2">
                    <h1 className="text-bold font-medium text-lg w-full">
                        Overview
                     </h1>
                </div>
                <div className="border flex w-1/2 mx-2">
                    <h1 className="text-bold font-medium text-lg w-full">
                        Statistics
                    </h1>
                </div>
            </section>
            <section className="container flex border justify-between justify-items-center h-2/5 mx-2">
                <div className="border flex w-full">
                    <h1 className="text-bold font-medium text-lg w-full">
                        Inbox
                    </h1>
                </div>
            </section>
        </body>
        </>
    )
}