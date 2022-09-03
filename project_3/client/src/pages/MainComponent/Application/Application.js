import React from "react";
import Auth from "../../../utils/auth";

const Application = () => {
  return (
    <div>
      {Auth.loggedIn() ? (
        <div>APPLICATION(SECTION9) Hello HippoWorld</div>
      ) : (
        <div>You must be logged in to see your APPLICATIONS</div>
      )}
    </div>
  );
};
export default Application;