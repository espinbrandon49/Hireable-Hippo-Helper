import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from "recharts";

const StatusBreakdown = ({ applications }) => {
  const appsData = applications;
  // console.log(appsData);

  const data = appsData.map((value, key) => {
    let mileValue;
    switch (value.currentMilestone) {
      case "Applied":
        mileValue = 200;
        break;
      case "Phone Interview":
        mileValue = 300;
        break;
      case "Technical Interview":
        mileValue = 400;
        break;
      case "In Person Interview":
        mileValue = 500;
        break;
      case "Job Offer":
        mileValue = 600;
        break;
      case "Accepted":
        mileValue = 700;
        break;
      case "Rejected":
        mileValue = 800;
        break;
      default:
        mileValue = 100;
    }
    return {
      company: value.company,
      A: mileValue,
    };
  });

  return (
    <div>
      <RadarChart cx={350} cy={300} outerRadius={200} width={900} height={900} data={data}>
        <Legend />
        <PolarGrid />
        <PolarAngleAxis dataKey="company" />
        <PolarRadiusAxis />
        <Radar name="All Jobs" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};
export default StatusBreakdown;



