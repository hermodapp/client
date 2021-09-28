import "tailwindcss/tailwind.css";
import React from "react";
import { withRouter, NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
const base_url = "https://api.hermodapp.com/";

function Header(props: any) {
  const user = useSelector((state: any) => state.user);
  const logoutHandler = () => {
    axios.get(base_url + "logout").then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  return (
    <header className="text-nord3 font-medium body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to="/"
          className="flex title-font font-medium items-center text-nord3 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-2xl">Hermod</span>
        </NavLink>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {user.loginSucces === 200 && (
            <div>
              <NavLink to="/qr_code" className="mr-5 text-nord3 hover:bg-nord6">
                Generate QR Code
              </NavLink>
              <a
                onClick={logoutHandler}
                className="mr-5 text-nord3 hover:bg-nord6"
              >
                Logout
              </a>
            </div>
          )}
          {user.loginSucces !== 200 && (
            <div>
              <a
                href="https://project-website-9u2ah230n-hermod.vercel.app"
                className="mr-5 text-nord3 hover:bg-nord6"
              >
                Project Website
              </a>
              <NavLink to="/about" className="mr-5 text-nord3 hover:bg-nord6">
                About
              </NavLink>
              <NavLink
                to="/services"
                className="mr-5 text-nord3 hover:bg-nord6"
              >
                Services
              </NavLink>
              <NavLink to="/login" className="mr-5 text-nord3 hover:bg-nord6">
                Login
              </NavLink>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default withRouter(Header);
