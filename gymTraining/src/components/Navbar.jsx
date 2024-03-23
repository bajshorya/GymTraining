import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="py-3 shadow bg-black">
        <div className="container flex justify-around lg:justify-evenly  py-5 px-5">
          <Link className="text-2xl mr-4 bg-blue-600 py-5 px-2 " to="/">
            Catalan Trainer
          </Link>
          <Link className="navbar-brand mr-4  py-5 px-2" to="/workouts">
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
