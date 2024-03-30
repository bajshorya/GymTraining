import React from "react";

const MuscleCard = ({ muscleImage, muscleName }) => {
  return (
    <div className="p-10 hover:border-2  hover:shadow-xl hover:rounded-xl hover:text-[#FE5D26] hover:bg-[#8D0801]">
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
