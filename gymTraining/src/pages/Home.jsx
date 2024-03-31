import React from "react";
import Intro from "../sections/Intro";
import Workouts from "../sections/Workouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Intro />
      <Workouts />
    </>
  );
}

export default Home;
