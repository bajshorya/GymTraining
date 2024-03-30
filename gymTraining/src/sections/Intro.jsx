import React from "react";
import { anastasemaragos } from "../assets/Vids&Pics/index.js";
const Intro = () => {
  return (
    <section className="w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container bg-[#2D3142]">
      <div className="relative flex-1 flex justify-center items-center  ">
        <div className="w-full flex flex-col justify-center bg-[#708D81] text-white font-poppins p-20 text-center text-2xl">
          <div className="my-4 px-7">Workout Planner</div>
          <img src={anastasemaragos} alt="" className="flex" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
