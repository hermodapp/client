import "tailwindcss/tailwind.css";
import React, { useState, useEffect } from "react";
import { withRouter, NavLink } from "react-router-dom";

import { ReactComponent as HermodLogo } from "../../svgs/hermod.svg";
import AuthService from "../services/authService";

function Header(props: any) {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logoutHandler = () => {
    AuthService.logout();
    props.history.push("/login");
    window.location.reload();
  };

  return (
    <header className="text-nord3 font-medium body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to="/"
          className="flex title-font font-medium items-center text-nord3 mb-4 md:mb-0"
        >
          <HermodLogo className="w-14 h-14 text-white p-0 rounded-full" />
          <span className="ml-3 text-2xl">Hermod</span>
        </NavLink>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {currentUser && (
            <div>
              <NavLink to="/home" className="mr-5 text-nord3 hover:bg-nord6">
                Dashboard
              </NavLink>
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
          {!currentUser && (
            <div>
              <a
                href="https://project-website-ten.vercel.app/"
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
