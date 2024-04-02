import React from "react";

const TrainingCard = (props) => {
  return (
    <>
      <div class="max-w-md mx-auto bg-[#c3c9cd] rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0"></div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-4xl text-[#000000] font-semibold">
              {props.title}
            </div>
            <p class="mt-2 text-lg text-[#000000]">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingCard;
