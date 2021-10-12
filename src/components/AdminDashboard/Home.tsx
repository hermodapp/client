import {useState, useCallback} from 'react';
import {NavLink} from "react-router-dom";
import "tailwindcss/tailwind.css";
import { ReactComponent as HermodLogo } from "../../svgs/hermod.svg";
import {AiOutlineHome, AiOutlineQrcode, AiOutlineSetting, AiOutlineLogout, AiOutlineMenu, AiOutlineUser} from 'react-icons/ai'
import {HiOutlineChartSquareBar} from 'react-icons/hi'

export default function Home() {
    return(
        <>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Home</title>
        </head>
        <body className="h-48 overflow-x-hidden">
            <div className="relative w-full">
                <div className="fixed w-72 h-full bg-nord9 border-l-4 border-nord4 transition duration-500 ease-in-out overflow-hidden">
                    <ul className="absolute w-full top-0 left-0">
                        <li className="relative w-full list-none mb-10 pointer-events-none">
                            <NavLink to="#" className="flex title-font font-medium items-center text-nord3 mb-4 md:mb-0">
                                <HermodLogo className="w-10 h-10 text-white p-0 rounded-full" />
                                <span className="ml-3 text-2xl">Hermod</span>
                            </NavLink>
                        </li>
                        <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-l-full">
                            <NavLink to="#">
                                <AiOutlineHome className="relative block h-8 w-8 leading-11 text-nord5 float-left ml-1"/>
                                <span className="text-nord5 text-base text-center h-8 leading-10">Home</span>
                            </NavLink>
                        </li>
                        <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-l-full">
                            <NavLink to="#">
                                <HiOutlineChartSquareBar className="relative block h-8 w-8 leading-11 text-nord5 float-left ml-1"/>
                                <span className="text-nord5 text-base text-center h-8 leading-10">Forms</span>
                            </NavLink>
                        </li>
                        <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-l-full">
                            <NavLink to="#">
                                <AiOutlineQrcode className="relative block h-8 w-8 leading-11 text-nord5 float-left ml-1"/>
                                <span className="text-nord5 text-base text-center h-8 leading-10">Generate QR</span>
                            </NavLink>
                        </li>
                        <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-l-full">
                            <NavLink to="#">
                                <AiOutlineSetting className="relative block h-8 w-8 leading-11 text-nord5 float-left ml-1"/>
                                <span className="text-nord5 text-base text-center h-8 leading-10">Setting</span>
                            </NavLink>
                        </li>
                        <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-l-full">
                            <NavLink to="#">
                                    <AiOutlineLogout className="relative block h-8 w-8 leading-11 text-nord5 float-left ml-1"/>
                                <span className="text-nord5 text-base text-ceneter h-8 leading-10">Sign Out</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="absolute w-11/12 ml-12 min-h-full">
                <div className="flex w-full h-10 justify-end justify-items-center ml-2">
                    <div className="relative overflow-hidden cursor-pointer">
                        <AiOutlineUser className="w-10 h-10 rounded-full bg-nord4 object-cover"/>
                    </div>
                </div>
            </div>
        </body>
        </>
    )
}