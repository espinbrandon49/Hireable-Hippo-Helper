import React from "react";
import Auth from "../utils/auth";
import icon from "../images/hippoIcon.png";


function NavBar({ currentPage,handleHippoStats, handleApplication, handlePageChange }) {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar nav-toggle is-light is-transparent mx-1 is-flex " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={icon} alt="hippo" height="56" />
        </a>
      </div>

      {/* <div className="navbar-menu"> */}
      <div className="navbar-start is-flex is-align-items-center ">

        <a href="/Main/#HippoStats"
          onClick={handleHippoStats}

          // Check to see if the currentPage is `HippoStats`, and if so we use the active link class. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "HippoStats"
              ? "navbar-item is-active mx-1"
              : "navbar-item mx-1"
          }
        >
          HippoStats
        </a>

        <a href="/Main/#Application"
          onClick={handleApplication}
          // Check to see if the currentPage is `Application`, and if so we use the active link class. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Application"
              ? "navbar-item is-active mx-1"
              : "navbar-item mx-1"
          }
        >
          My Applications
        </a>

        <a href="/AppForm"
          onClick={() => handlePageChange("AppForm")}
          // Check to see if the currentPage is `AppForm`, and if so we use the active link class. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "AppForm"
              ? "navbar-item is-active mx-1"
              : "navbar-item mx-1"
          }
        >
          Add New
        </a>
        {/* <Link to="/AppForm">Add New</Link> */}

        <div className="navbar-end ">
          <div className="navbar-item" >
            {Auth.loggedIn() ? (
              <div className="control buttons">
                <button
                  className="button is-outlined is-rounded"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="control buttons">
                <button className="button is-outlined">
                  <a
                    href="/Login"
                    onClick={() => handlePageChange("Login")}
                    // Check to see if the currentPage is `Login`, and if so we use the active link class. Otherwise, we set it to a normal nav-link
                    className={
                      currentPage === "Login"
                        ? "nav-link is-active mx-1"
                        : "nav-link mx-1"
                    }
                  >
                    Login
                  </a>
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;