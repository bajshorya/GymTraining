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
      <div className="bg-[#D8E4FF] flex justify-center font-poppins font-bold py-6 text-3xl ">
        MUSCLES
      </div>
      <section className="bg-[#D8E4FF]  flex justify-center items-center text-black p-10">
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
