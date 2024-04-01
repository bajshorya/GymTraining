import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="py-1 shadow bg-[#000000] text-white">
        <div className="container flex justify-around lg:justify-evenly  py-5 px-5">
          <Link
            className="text-2xl font-semibold m-1  py-5 px-2  rounded-2xl font-poppins font-thin shadow-md"
            to="/home "
          >
            <div className="m-1">Catalan Trainer</div>
          </Link>
          <Link
            className="navbar-brand mr-4  rounded-3xl py-5 px-2"
            to="/exercises"
          >
            Exercises
          </Link>
          <Link className="navbar-brand mr-4   py-5 px-2 " to="/diet">
            Diet
          </Link>
          <Link className="navbar-brand mr-4   py-5 px-2 " to="/routines">
            Routines
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
