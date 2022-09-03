import React from "react";
import Auth from "../../utils/auth";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav className="navbar is-transparent mx-2">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/10964/hippopotamus-animal-clipart-md.png"
            alt="hippo"
          />
        </a>
        <div
          className="navbar-burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start mgr-medium">
          <a
            href="#Homepage"
            onClick={() => handlePageChange("Homepage")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={
              currentPage === "Homepage"
                ? "navbar-item active mx-2"
                : "navbar-item mx-2"
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
                  ? "navbar-item active mx-2"
                  : "navbar-item mx-2"
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
                  ? "navbar-item active mx-2"
                  : "navbar-item mx-2"
              }
            >
              Application
            </a>
            <a
              href="#AppForm"
              onClick={() => handlePageChange("AppForm")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "AppForm"
                  ? "navbar-item active mx-2"
                  : "navbar-item mx-2"
              }
            >
              AppForm
            </a>
          </div>
        </div>
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
                <button class="button is-outlined">
                  <a
                    href="#Login"
                    onClick={() => handlePageChange("Login")}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={
                      currentPage === "Login"
                        ? "nav-link active mx-2"
                        : "nav-link mx-2"
                    }
                  >
                    Login
                  </a>
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
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
