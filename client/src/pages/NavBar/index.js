import React from "react";
import Auth from "../../utils/auth";
import icon from "../../images/hippoIcon.png";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav className="navbar nav-toggle is-light is-transparent mx-1 block">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img
            src={icon}
            alt="hippo"
          />
        </a>

        <div className="navbar-start mgr-medium">
          <a
            href="#Homepage"
            onClick={() => handlePageChange("Homepage")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={
              currentPage === "Homepage"
                ? "navbar-item is-active mx-1"
                : "navbar-item mx-1"
            }
          >
            Home
          </a>
          
          <div className="navbar-item has-dropdown is-hoverable mgr-medium">
            <a
              href="#HippoStats"
              onClick={() => handlePageChange("HippoStats")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "HippoStats"
                  ? "navbar-item is-active mx-1"
                  : "navbar-item mx-1"
              }
            >
              HippoStats
            </a>
            <a
              href="#Application"
              onClick={() => handlePageChange("Application")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Application"
                  ? "navbar-item is-active mx-1"
                  : "navbar-item mx-1"
              }
            >
              My Applications
            </a>
            <a
              href="#AppForm"
              onClick={() => handlePageChange("AppForm")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "AppForm"
                  ? "navbar-item is-active mx-1"
                  : "navbar-item mx-1"
              }
            >
              Add New
            </a>
          </div>
        </div>
        
{/* 
        <div
          className="navbar-burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div> */}

      </div>

      {/* <div className="navbar-menu"> */}
        
        <div className="navbar-end">
          <div className="navbar-item">
            {Auth.loggedIn() ? (
              <p className="control">
                {/* <p>
                Hey there, {Auth.getProfile().data.username}!
              </p> */}
                <button
                  className="button is-outlined is-rounded"
                  onClick={logout}
                >
                  Logout
                </button>
              </p>
            ) : (
              <p className="control">
                <button className="button is-outlined">
                  <a
                    href="#Login"
                    onClick={() => handlePageChange("Login")}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={
                      currentPage === "Login"
                        ? "nav-link is-active mx-1"
                        : "nav-link mx-1"
                    }
                  >
                    Login
                  </a>
                </button>
              </p>
            )}
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
}



export default NavTabs;

// import React from 'react';
// import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';

// const NavBar = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return (
//     <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <div>
//           <Link className="text-light" to="/">
//             <h1 className="m-0">Hireable Hippo Helper</h1>
//           </Link>
//           <p className="m-0">Track Your Job Search Journey</p>
//         </div>
//         <div>
//           {Auth.loggedIn() ? (
//             <>
//               <span>Hey there, {Auth.getProfile().data.username}!</span>
//               <button className="btn btn-lg btn-light m-2" onClick={logout}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link className="btn btn-lg btn-info m-2" to="/login">
//                 Login
//               </Link>
//               <Link className="btn btn-lg btn-light m-2" to="/signup">
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NavBar;
