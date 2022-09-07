import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    date: "09/10/2022",
    appsSent: 0,
    interview: 0,
  },
  {
    date: "09/11/2022",
    appsSent: 3,
    interview: 0,
  },
  {
    date: "09/12/2022",
    appsSent: 2,
    interview: 0,
  },
  {
    date: "09/13/2022",
    appsSent: 3,
    interview: 0,
  },
  {
    date: "09/14/2022",
    appsSent: 2,
    interview: 0,
  },
  {
    date: "09/15/2022",
    appsSent: 0,
    interview: 1,
  },
  {
    date: "09/16/2022",
    appsSent: 4,
    interview: 0,
  }
];

export default function App() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="appsSent"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="interview" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}


// import React from 'react'

// const AppliedTo = () => {
//   return (
//     <div>
//       Companies applied to data visual coming soon!
//     </div>
//   )
// }

// export default AppliedTo
