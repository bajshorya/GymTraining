import React from "react";
import {
  leg,
  biceps,
  chest,
  back,
  shoulder,
  triceps,
} from "../assets/Vids&Pics";
import MuscleCard from "../components/MuscleCard";

const Workouts = () => {
  return (
    <>
      <hr />
      <div className="bg-black flex justify-center font-poppins text-white font-bold py-6 text-3xl ">
        MUSCLES
      </div>
      <hr />
      <section className="bg-black  flex justify-center items-center text-white p-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-48 relative z-10 mt-auto hover:cursor-pointer">
          <MuscleCard muscleImage={leg} muscleName="Legs" />
          <MuscleCard muscleImage={back} muscleName="Back" />
          <MuscleCard muscleImage={chest} muscleName="Chest" />
          <MuscleCard muscleImage={shoulder} muscleName="Shoulders" />
          <MuscleCard muscleImage={biceps} muscleName="Biceps" />
          <MuscleCard muscleImage={triceps} muscleName="Triceps" />
        </div>
      </section>
    </>
  );
};

export default Workouts;
