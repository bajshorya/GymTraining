import React from "react";

const MuscleCard = ({ muscleImage, muscleName }) => {
  return (
    <div className="p-10 hover:border-2  hover:shadow-xl hover:rounded-3xl hover:text-[#99A1A6] hover:bg-[#362A2A] hover:text-xl">
      <img
        src={muscleImage}
        alt={muscleName}
        className="bg-white p-3  "
        width={200}
      />
      <div className="flex justify-center font-poppins font-bold fill-stone-800 hover:font-semibold ">
        {muscleName}
      </div>
    </div>
  );
};

export default MuscleCard;
