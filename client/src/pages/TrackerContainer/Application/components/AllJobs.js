import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, LabelList } from "recharts";

const AllJobs = ({ allApplications }) => {
  const appsData = allApplications;

  const data = appsData.map((value, key) => {
    let mileValue;
    let color;
    switch (value.currentMilestone) {
      case "Applied":
        mileValue = 200;
        color = "red";
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
      name: `${value.company}^${value.currentMilestone}^${color}`,
      pv: mileValue,
      uv: value.company,
    };
  });

  console.log(data);

  const renderCustomizedLabel = (props, appsData) => {
    const { x, y, width, value } = props;
    return (
      <>
        <text x={x + width / 2} y={y + 12.5} fill={value.split("^")[2]} textAnchor="middle" dominantBaseline="middle">
          {value.split("^")[1]}
        </text>
      </>
    );
  };

  

  return (
    <BarChart width={700} height={1000} data={data} layout="vertical" margin={{ top: 0, right: 50, left: 0, bottom: 30 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number">
        <Label value="Pages of my website" offset={-20} position="insideBottom" />
      </XAxis>
      <YAxis dataKey="uv" type="category" width={150} />
      <Tooltip dataKey="uv" />

      <Bar dataKey="pv" fill="#8884d8" minPointSize={50}>
        <LabelList dataKey="name" content={renderCustomizedLabel} />
      </Bar>
    </BarChart>
  );
};

export default AllJobs;
