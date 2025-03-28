import React from "react";
import "../components/style.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Buttons/Home";
import Search from "../Buttons/Search";
import Reels from "../Buttons/Reels";
import Message from "../Buttons/Message";
import Notification from "../Buttons/Notification";
import Create from "../Buttons/Create";
import Dashboard from "../Buttons/Dashboard";
import More from "../Buttons/More";
import Userid from "../Buttons/Userid";

const BtnsRoute = () => {
  return (
    <div className="middle-box">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/message" element={<Message />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/create" element={<Create />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/more" element={<More />} />
          <Route path="/Userid" element={<Userid />} />
        </Routes>
    </div>
  );
};

export default BtnsRoute;
