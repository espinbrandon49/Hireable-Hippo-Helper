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
    <>
    <h2 className="title has-text-centered mb3">Job Application Status</h2>
      <div className="is-flex is-justify-content-center is-align-self-center">
        <RadarChart outerRadius={200} width={650} height={450} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="company" />
          <PolarRadiusAxis />
          <Radar name="All Jobs" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </div>
    </>
  );
};
export default StatusBreakdown;



