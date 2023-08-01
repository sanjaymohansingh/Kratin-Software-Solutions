import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ExerciseVideos from "./components/ExerciseVideos";
import HealthyRecipes from "./components/HealthyRecipes";
import Reminders from "./components/Reminders";
import EmergencyContact from "./components/EmergencyContact";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgetPassword from "./components/ForgetPassword";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <CustomNavbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise-videos" element={<ExerciseVideos />} />
          <Route path="/healthy-recipes" element={<HealthyRecipes />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/emergency-contact" element={<EmergencyContact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
