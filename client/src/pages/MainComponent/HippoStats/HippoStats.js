import React from "react";
import Login from "../../Login";
import Auth from "../../../utils/auth";
import Subheader from "./components/subheader";
import DataMilestones from "./components/dataMilestones";
import DataVisuals from "./components/dataVisual";

const HippoStats = ({applications}) => {

  return (
    <div className="column">
      {Auth.loggedIn() ? (
        <div className="box">
          <Subheader />
          <DataMilestones />
          <DataVisuals
            applications={applications}
          />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default HippoStats;
