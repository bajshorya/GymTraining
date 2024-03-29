import React from "react";
import {
  leg,
  biceps,
  chest,
  back,
  shoulder,
  triceps,
} from "../assets/Vids&Pics";

const Workouts = () => {
  return (
    <section className="bg-white w-full flex justify-center items-center h-screen ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-48 relative z-10 mt-auto">
        <div>
          <img
            src={leg}
            alt="leg"
            className="bg-white p-3 hover:shadow-2xl hover:border-2 border-gray-500"
            width={200}
          />
        </div>
        <div>
          <img
            src={back}
            alt="back"
            className="bg-white p-3 hover:shadow-2xl hover:border-2 border-gray-500"
            width={200}
          />
        </div>
        <div>
          <img
            src={chest}
            alt="chest"
            className="bg-white p-3 hover:shadow-2xl hover:border-2 border-gray-500"
            width={200}
          />
        </div>
        <div>
          <img
            src={shoulder}
            alt="shoulder"
            className="bg-white p-3 hover:shadow-2xl hover:border-2 border-gray-500"
            width={200}
          />
        </div>
        <div>
          <img
            src={biceps}
            alt="biceps"
            className="bg-white p-3 hover:shadow-2xl hover:border-2 border-gray-500"
            width={200}
          />
        </div>
        <div>
          <img
            src={triceps}
            alt="triceps"
            className="bg-white p-3 hover:shadow-2xl hover:border-2 border-gray-500"
            width={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Workouts;
