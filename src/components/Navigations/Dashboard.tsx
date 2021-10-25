import {useState, useCallback, useEffect} from 'react';
import "tailwindcss/tailwind.css";
import { ReactComponent as HermodLogo } from "../../svgs/hermod.svg";
import {AiOutlineHome, AiOutlineQrcode, AiOutlineSetting, AiOutlineLogout, AiOutlineUnorderedList, AiOutlineUser, AiOutlineForm} from 'react-icons/ai'
import {HiOutlineChartSquareBar} from 'react-icons/hi'
import AuthService from "../services/authService";
import { withRouter, NavLink } from "react-router-dom";

export default function Dashboard() {
    const [toggled, setToggle] = useState(true);

    const handleEnter = useCallback(() => {
        setToggle(false);
    }, []);

    const handleLeave = useCallback(() => {
        setToggle(true);
    }, []);
    

    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
      const user = AuthService.getCurrentUser();
      if (user) {
        setCurrentUser(user);
      }
    }, []);
  
    const logoutHandler = () => {
      AuthService.logout();
      window.location.reload();
    };

    return(
        <>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Dashboard</title>
        </head>
        <body className="h-24 overflow-x-hidden">
            <div className="sticky w-full" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                {toggled === false &&
                    <>
                        <div className="fixed w-72 h-full bg-nord9 border-l-2 border-nord4 duration-500 transition ease-in-out overflow-hidden">
                            <ul className="relative w-full top-0 left-0">
                                <li className="relative w-full list-none mb-10 pointer-events-none">
                                    <div className="flex title-font font-medium items-center text-nord3 mb-4 md:mb-0">
                                        <HermodLogo className="w-10 h-10 text-white p-0 rounded-full" />
                                        <span className="ml-3 text-2xl">Hermod</span>
                                    </div>
                                </li>
                                <NavLink to="/home">
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-l-full">
                                    <AiOutlineHome className="relative block h-8 w-8 leading-11 text-nord5 float-left ml-1"/>
                                    <span className="text-nord5 text-base text-center h-8 leading-10">Home</span>
                                </li>
                                </NavLink>
                                <NavLink to="/form">
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-l-full">
                                    <AiOutlineForm className="relative block h-8 w-8 leading-11 text-nord5 float-left ml-1"/>
                                    <span className="text-nord5 text-base text-center h-8 leading-10">Generate Forms</span>
                                </li>
                                </NavLink>
                                <NavLink to="/manageform">
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-l-full">
                                    <HiOutlineChartSquareBar className="relative block h-8 w-8 leading-11 text-nord5 float-left ml-1"/>
                                    <span className="text-nord5 text-base text-center h-8 leading-10">Manage Forms</span>
                                </li>
                                </NavLink>
                                <NavLink to="/qr_code">
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-l-full">
                                    <AiOutlineQrcode className="relative block h-8 w-8 leading-11 text-nord5 float-left ml-1"/>
                                    <span className="text-nord5 text-base text-center h-8 leading-10">Generate QR</span>
                                </li>
                                </NavLink>
                                <NavLink to="/manageqr">
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-l-full">
                                    <AiOutlineUnorderedList className="relative block h-8 w-8 leading-11 text-nord5 float-left ml-1"/>
                                    <span className="text-nord5 text-base text-center h-8 leading-10">Manage QR</span>
                                </li>
                                </NavLink>
                                <NavLink to="/settings">
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-l-full">
                                    <AiOutlineSetting className="relative block h-8 w-8 leading-11 text-nord5 float-left ml-1"/>
                                    <span className="text-nord5 text-base text-center h-8 leading-10">Settings</span>
                                </li>
                                </NavLink>
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-l-full cursor-pointer" onClick={logoutHandler}>
                                    <AiOutlineLogout className="relative block h-8 w-8 leading-11 text-nord5 float-left ml-1"/>
                                    <span className="text-nord5 text-base text-ceneter h-8 leading-10">Sign Out</span>
                                </li>
                            </ul>
                        </div>
                    </>
                }
                {toggled === true &&
                    <>
                        <div className="fixed w-12 h-full bg-nord9 border-l-2 border-nord4 transition duration-500 ease-in-out overflow-hidden rounded-r-lg">
                            <ul className="relative w-full top-0 left-0">
                                <li className="relative w-full list-none mb-10 pointer-events-none">
                                    <NavLink to="#" className="flex title-font font-medium items-center text-nord3 mb-4 md:mb-0">
                                        <HermodLogo className="w-10 h-10 text-white p-0 rounded-full" />
                                        </NavLink>
                                </li>
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-full">
                                    <NavLink to="/home">
                                        <AiOutlineHome className="relative block h-8 w-8 leading-11 text-nord5 ml-1"/>
                                        </NavLink>
                                </li>
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-full">
                                    <NavLink to="/form">
                                        <AiOutlineForm className="relative block h-8 w-8 leading-11 text-nord5 ml-1"/>
                                        </NavLink>
                                </li>
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-full">
                                    <NavLink to="/manageform">
                                        <HiOutlineChartSquareBar className="relative block h-8 w-8 leading-11 text-nord5 ml-1"/>
                                        </NavLink>
                                </li>
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-full">
                                    <NavLink to="/qr_code">
                                        <AiOutlineQrcode className="relative block h-8 w-8 leading-11 text-nord5 ml-1"/>
                                        </NavLink>
                                </li>
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-full">
                                    <NavLink to="/manageqr">
                                        <AiOutlineUnorderedList className="relative block h-8 w-8 leading-11 text-nord5 ml-1"/>
                                        </NavLink>
                                </li>
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-full">
                                    <NavLink to="settings">
                                        <AiOutlineSetting className="relative block h-8 w-8 leading-11 text-nord5 ml-1"/>
                                        </NavLink>
                                </li>
                                <li className="block w-full list-none hover:bg-nord2 mb-4 rounded-full cursor-pointer">
                                    <AiOutlineLogout className="relative block h-8 w-8 leading-11 text-nord5 ml-1" onClick={logoutHandler}/>
                                </li>
                            </ul>
                        </div>
                    </>
                }
            </div>
            <div className="flex w-full bg-nord6 overflow-x-hidden">
                <div className="flex w-full h-10 justify-end justify-items-center ml-2">
                    <div className="relative overflow-hidden cursor-pointer">
                        <NavLink to="/settings">
                            <AiOutlineUser className="w-10 h-10 rounded-full bg-nord2 object-cover"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </body>
        </>
    )
}