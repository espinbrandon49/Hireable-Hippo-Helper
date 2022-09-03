import React from "react";
import Login from "../../Login";
import Auth from "../../../utils/auth";
import Subheader from "./components/subheader";
import DataMilestones from "./components/dataMilestones";
import DataVisuals from "./components/dataVisual";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_ALL_APPLICATION } from '../../../utils/queries'

const HippoStats = () => {

  // const { applicationId } = useParams()

  // const { loading, data } = useQuery(QUERY_SINGLE_APPLICATION, {
  //   variables: { applicationId: applicationId }
  // })

  const {loading, data} = useQuery(QUERY_ALL_APPLICATION)

   const users = data?.users || {};
   console.log("users" ,users)
   console.log("loading" , loading)
   console.log("data" , data)

  // console.log("users" ,users[1].applications[0]._id)

  if (loading) {

    return <div>Loading...</div>
  }

  return (
    <div>
      {Auth.loggedIn() ? (
        <div className="column">
          <Subheader />
          <DataMilestones />
          <DataVisuals
          users={users}
          />
          
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
