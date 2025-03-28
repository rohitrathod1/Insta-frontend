import React from "react";
import "../components/style.css";
import { Routes, Route } from "react-router-dom";
import Middleside from "../components/Middleside";
import Rightside from "../components/Rightside";
import Leftside from "../components/Leftside";
import Footer from "../components/Footer";
import BtnsRoute from "./Btns.Route"; 

const BodyRoute = () => {
  return (
    <div className="home-box">
      <Leftside />
      <Middleside />
      <Routes>
        <Route path="/*" element={<Rightside />} />
        <Route path="/buttons/*" element={<BtnsRoute />} /> {/* All Button Pages */}
      </Routes>
      <Footer />
    </div>
  );
};

export default BodyRoute;
