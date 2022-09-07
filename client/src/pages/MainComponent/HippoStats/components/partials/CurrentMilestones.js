import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CurrentMilestones = ({applications}) => {

  console.log(applications[0])

  const data = [];

  applications.map((app) => {
    let milestone = app.currentMilestone;
    let company = app.company;
    if (milestone === "Applied") {
      milestone = 1;
    } else if (milestone === "Phone Interview") {
      milestone = 2;
    } else if (milestone === "Phone Interview") {
      milestone = 3;
    } else if (milestone === "Technical Interview") {
      milestone = 4;
    } else if (milestone === "In Person Interview") {
      milestone = 5;
    } else if (milestone === "Job Offer") {
      milestone = 6;
    } else if (milestone === "Accepted") {
      milestone = 7;
    } else {
      milestone = 0;
    }
    data.push({
      appliedTo: company,
      currentMilestone: milestone,
    })
  })

  console.log(data)

  return (
    <ResponsiveContainer width="95%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <XAxis dataKey="appliedTo" />
        <YAxis interval={1}/>
        <Bar dataKey="currentMilestone" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CurrentMilestones;

// import React from 'react'

// const CurrentMilestones = () => {
//   return (
//     <div>
//       Current milestone for all applications data visual coming soon! 
//     </div>
//   )
// }

// export default CurrentMilestones
