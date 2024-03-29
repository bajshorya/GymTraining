import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Home />
        </Router>
      </div>
    </>
  );
}

export default App;
