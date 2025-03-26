import React from "react";
import "./style.css";
import Middleside from "./Middleside";
import Rightside from "./Rightside";
import Leftside from "./Leftside";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="home-box">
      <Leftside />
      <Middleside />
      <Rightside />
      <Footer />
    </div>

  );
};

export default Home;
