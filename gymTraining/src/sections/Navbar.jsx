import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="py-3 shadow bg-[#D8E4FF]">
        <div className="container flex justify-around lg:justify-evenly  py-5 px-5">
          <Link
            className="text-2xl text-black font-semibold mr-4 bg-[#FE5D26] py-5 px-2  rounded-2xl font-poppins font-thin shadow-md"
            to="/home"
          >
            Catalan Trainer
          </Link>
          <Link
            className="navbar-brand mr-4  rounded-3xl py-5 px-2"
            to="/workouts"
          >
            Workouts
          </Link>
          <Link className="navbar-brand mr-4   py-5 px-2 " to="/diet">
            Diet
          </Link>
          <Link className="navbar-brand mr-4   py-5 px-2 " to="/weekPlan">
            Week Plan
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
