import React from "react";
import TrainingCard from "../components/TrainingCard";

const Exercises = () => {
  return (
    <>
      <section className="flex w-full font-bold text-3xl min-h-screen bg-[#99A1A6]">
        <div>
          <div>
            <TrainingCard
              title="Back"
              description="Barbell Squats
Deadlifts
Bench Press
Pull-ups/Chin-ups
Dumbbell Rows
Dumbbell Lunges
Planks
Russian Twists
Leg Press
Cable Crunches"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Exercises;
