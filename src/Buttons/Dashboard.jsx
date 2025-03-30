import React, { useState } from "react";
import "./Style.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Insights");

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Professional dashboard</h2>
      <div className="dashboard-tabs">
        <button
          className={activeTab === "Insights" ? "active-tab" : ""}
          onClick={() => setActiveTab("Insights")}
        >
          Insights
        </button>
        <button
          className={activeTab === "Ad tools" ? "active-tab" : ""}
          onClick={() => setActiveTab("Ad tools")}
        >
          Ad tools
        </button>
      </div>

      <div className="dashboard-content">
        <div className="manage-ads">
          <h3>Manage ads</h3>
          <p>Let more people see what you're creating</p>
          <p>Boost your content into ads.</p>
          <button className="boost-button">Boost content</button>
        </div>

        <div className="create-ad">
          <h3>Create your next ad</h3>
          <button className="create-ad-button">+</button>
          <p>Create ad</p>
        </div>

        <div className="other-tools">
          <h3>Other tools</h3>
          <p>💳 Payment Settings</p>
        </div>
      </div>

      <footer className="dashboard-footer">
        <p>Meta © 2025 Instagram from Meta</p>
      </footer>
    </div>
  );
};

export default Dashboard;
