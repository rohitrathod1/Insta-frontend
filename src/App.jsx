import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginform from "./components/Loginform";
import Home from "./Routes/Body.Route";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;