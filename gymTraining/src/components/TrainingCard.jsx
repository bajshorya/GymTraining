import React from "react";

const TrainingCard = (props) => {
  return (
    <>
      <div class="max-w-md mx-auto bg-[#362A2A] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0"></div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-white font-semibold">
              {props.title}
            </div>
            <p class="mt-2 text-gray-500">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingCard;
