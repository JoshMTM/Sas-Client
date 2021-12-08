import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomeApp";
import WelcomeApp from "./components/welcome/WelcomeApp";
import SignIn from "./components/homeComponents/authComponents/SignIn";
import SignUp from "./components/homeComponents/authComponents/SignUp";
import DreamCreation from "./components/homeComponents/authComponents/DreamCreation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomeApp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dreams/new" element={<DreamCreation />} />
      </Routes>
    </div>
  );
}

export default App;
