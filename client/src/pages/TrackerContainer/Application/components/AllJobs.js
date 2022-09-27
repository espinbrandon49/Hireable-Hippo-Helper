import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Label, LabelList, ResponsiveContainer } from "recharts";
const dateFormat = require('../../../../utils/dateFormat');

const AllJobs = ({ allApplications }) => {
  const appsData = allApplications;
  const today = Date.now()
  const data = appsData.map((value, key) => {
    let mileValue;
    let color;
    switch (value.currentMilestone) {
      case "Applied":
        mileValue = 200;
        color = "purple";
        break;
      case "Phone Interview":
        mileValue = 300;
        color = "blue";
        break;
      case "Technical Interview":
        mileValue = 400;
        color = "gold";
        break;
      case "In Person Interview":
        mileValue = 500;
        color = "green";
        break;
      case "Job Offer":
        mileValue = 600;
        color = "pink";
        break;
      case "Accepted":
        mileValue = 700;
        color = "orange";
        break;
      case "Rejected":
        mileValue = 800;
        color = "gray";
        break;
      default:
        mileValue = 50;
        color = "yellow";
    }
    return {
      name: `${value.company}^${value.currentMilestone}^${color}^${dateFormat(value.dateApplied)}`,
      pv: mileValue,
      uv: value.company,
      px: today / 86400000 - (new Date(value.dateApplied).getTime()) / 86400000
    };
  });

  const renderCustomizedLabelMilestone = (props, appsData) => {
    const { x, y, width, value } = props;
    return (
      <>
        <text x={x + width / 2} y={y + 12.5} fill={value.split("^")[2]} textAnchor="middle" dominantBaseline="middle">
          {value.split("^")[1]}
        </text>
      </>
    );
  };

  const renderCustomizedLabelDateApplied = (props, appsData) => {
    const { x, y, width, value } = props;
    return (
      <>
        <text x={x + width / 2} y={y + 12.5} fill="red" textAnchor="middle" dominantBaseline="middle">
          {value.split("^")[3]}
        </text>
      </>
    );
  };

  return (
    <>
      <BarChart width={600} height={1000} data={data} layout="vertical" margin={{ top: 10, right: 50, left: 0, bottom: 30 }} label={"barchart"}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis dataKey="uv" type="category" width={150} />
        <XAxis type="number" xAxisId="top" orientation="top" stroke="#82ca9d" tick={false}>
        <Label value={`Days Since Applied (${dateFormat(today)}  - date applied)`} offset={-20} position="top" fontSize={20} offset={-5} />
        </XAxis>
        <XAxis type="number" xAxisId="bottom" orientation="bottom" stroke="#8884d8" >

        </XAxis>
        {/* <Tooltip dataKey="uv" /> */}

        <Bar dataKey="pv" fill="#8884d8" minPointSize={50} xAxisId="top" >
          <LabelList dataKey="name" content={renderCustomizedLabelMilestone} />
        </Bar>
        <Bar dataKey="px" fill="#82ca9d" xAxisId="bottom" >
          <LabelList dataKey="name" content={renderCustomizedLabelDateApplied} />
        </Bar>
      </BarChart>
    </>
  );
};

export default AllJobs;
