import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Diet from "./pages/Diet";
import Routines from "./pages/Routines";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/routines" element={<Routines />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
