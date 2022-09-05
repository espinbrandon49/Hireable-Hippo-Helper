import React from "react";
import Login from "../../Login";
import Auth from "../../../utils/auth";
import Subheader from "./components/Subheader";
import DataVisuals from "./components/DataVisual";

const HippoStats = ({applications}) => {
  return (
    <div className="column">
      {Auth.loggedIn() ? (
        <div className="box">
          <Subheader 
          applications={applications}
          />
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
