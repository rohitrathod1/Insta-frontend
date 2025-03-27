import React from "react";
import "../components/style.css";
import Middleside from "../components/Middleside";
import Rightside from "../components/Rightside";
import Leftside from "../components/Leftside";
import Footer from "../components/Footer";
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