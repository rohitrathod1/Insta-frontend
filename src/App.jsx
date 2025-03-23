import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginform from "./components/Loginform"; // Import Login Page
import Home from "./components/Home"; // Import Home Page (with all components)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />   {/* Login Page */}
        <Route path="/home" element={<Home />} /> {/* Home Page with all components */}
      </Routes>
    </Router>
  );
}

export default App;
