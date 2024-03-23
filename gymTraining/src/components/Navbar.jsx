import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="py-3 shadow bg-gray-500">
        <div className="container flex justify-between py-5 px-5">
          <Link className="text-lg" to="/">
            Catalan Trainer
          </Link>
          <Link className="navbar-brand" to="/workouts">
            Workouts
          </Link>
          <Link className="navbar-brand" to="/meal">
            Meal
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
