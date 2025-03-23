import React from "react";
import "./style.css";
import Middleside from "./Middleside";
import Rightside from "./Rightside";
import Leftside from "./Leftside";

const Home = () => {
  return (
    <div className="home-box">
      <Leftside />
      <Middleside />
      <Rightside />
    </div>

  );
};

export default Home;
