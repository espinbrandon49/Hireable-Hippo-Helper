import React from "react";
import Login from "../../Login";
import Auth from "../../../utils/auth";
import Subheader from "./components/subheader";
import DataMilestones from "./components/dataMilestones";
import DataVisuals from "./components/dataVisual";

const HippoStats = () => {
  return (
    <div>
      {Auth.loggedIn() ? (
        <div className="column">
          <Subheader />
          <DataMilestones />
          <DataVisuals />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default HippoStats;
