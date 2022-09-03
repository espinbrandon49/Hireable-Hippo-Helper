import React from "react";
import Login from "../../Login";
import Auth from "../../../utils/auth";
import Subheader from "./components/subheader";
import DataMilestones from "./components/dataMilestones";
import DataVisuals from "./components/dataVisual";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_APPLICATION } from '../../../utils/queries'

const HippoStats = () => {

  // const { applicationId } = useParams()

  // const { loading, data } = useQuery(QUERY_SINGLE_APPLICATION, {
  //   variables: { applicationId: applicationId }
  // })

  const {loading, data} = useQuery(QUERY_SINGLE_APPLICATION)

   const users = data?.users || {};
   console.log(users)

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {Auth.loggedIn() ? (
        <div className="column">
          <Subheader />
          <DataMilestones />
          <DataVisuals />
          {users}
          {/* {
            `applicationId: ${application.applicationId}
            jobURL: ${application.jobURL}
            milestones: ${application.milestones}
            `
          } */}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default HippoStats;

// const HippoStats = () => {
//   return (
//     <div>
//       {Auth.loggedIn() ? (
//         <div className="column">
//           <Subheader />
//           <DataMilestones />
//           <DataVisuals />
//         </div>
//       ) : (
//         <Login />
//       )}
//     </div>
//   );
// };
