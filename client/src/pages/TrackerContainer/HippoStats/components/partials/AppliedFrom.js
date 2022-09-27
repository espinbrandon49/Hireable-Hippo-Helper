import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, LabelList } from "recharts";

const AppliedFrom = ({ applications }) => {
  const appliedFrom = {
    linkedIn: 0,
    indeed: 0,
    angelList: 0,
    handshake: 0,
    monster: 0,
    zipRecruiter: 0,
    jobFair: 0,
    website: 0,
    craigslist: 0,
    other: 0
  }
  console.log(applications)
  applications.map((app, i) => {
    app.appliedFrom === "LinkedIn" && appliedFrom.linkedIn++
    app.appliedFrom === "Indeed" && appliedFrom.indeed++
    app.appliedFrom === "AngelList" && appliedFrom.angelList++
    app.appliedFrom === "Handshake" && appliedFrom.handshake++
    app.appliedFrom === "Monster" && appliedFrom.monster++
    app.appliedFrom === "Zip Recruiter" && appliedFrom.zipRecruiter++
    app.appliedFrom === "Job Fair" && appliedFrom.jobFair++
    app.appliedFrom === "Company Website" && appliedFrom.website++
    app.appliedFrom === "Craigslist" && appliedFrom.craigslist++
    app.appliedFrom === "Other" && appliedFrom.other++
  });
  const colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'purple', 'green', 'gold', 'goldenrod', "turquoise"]

  const data = [
    {
      name: `LinkedIn^${appliedFrom.linkedIn}^${colors[0]}`,
      pv: 'LinkedIn',
      uv: appliedFrom.linkedIn,
    },
    {
      name: `Indeed^${appliedFrom.indeed}^${colors[1]}`,
      pv: 'Indeed',
      uv: appliedFrom.indeed,
    },
    {
      name: `AngelList^${appliedFrom.angelList}^${colors[2]}`,
      pv: 'AngelList',
      uv: appliedFrom.angelList,
    },
    {
      name: `Handshake^${appliedFrom.handshake}^${colors[3]}`,
      pv: 'Handshake',
      uv: appliedFrom.handshake,
    },
    {
      name: `Monster^${appliedFrom.monster}^${colors[4]}`,
      pv: 'Monster',
      uv: appliedFrom.monster,
    },
    {
      name: `Zip Recruiter^${appliedFrom.zipRecruiter}^${colors[5]}`,
      pv: 'Zip Recruiter',
      uv: appliedFrom.zipRecruiter,
    },
    {
      name: `Job Fair^${appliedFrom.jobFair}^${colors[6]}`,
      pv: 'Job Fair',
      uv: appliedFrom.jobFair,
    },
    {
      name: `Company Website^${appliedFrom.website}^${colors[7]}`,
      pv: 'Company Website',
      uv: appliedFrom.website,
    },
    {
      name: `Craigslist^${appliedFrom.craigslist}^${colors[8]}`,
      pv: 'Craigslist',
      uv: appliedFrom.craigslist,
    },
    {
      name: `Other^${appliedFrom.other}^${colors[9]}`,
      pv: 'Other',
      uv: appliedFrom.other,
    },
  ];

  const renderCustomizedLabel = (props: any) => {
    const { x, y, width, value } = props;
    const radius = 20;
    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill={value.split("^")[2]} />
        <text
          x={x + width / 2}
          y={y - radius}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value.split("^")[1]}
        </text>
      </g>
    );
  };

  const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
      } 
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
      }, ${y + height}
    Z`;
  };

  const TriangleBar: FunctionComponent<any> = (props: any) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <>
    <h2 className='title has-text-centered'>Job Application Portal</h2>
      <ResponsiveContainer width="95%" height="100%">
        <BarChart
          width="100%"
          height="100%"
          data={data}
          margin={{
            top: 50,
            right: 0,
            left: 0,
            bottom: 50
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="pv" />
          <YAxis tick={false} />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            <LabelList dataKey="name" content={renderCustomizedLabel} />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default AppliedFrom;