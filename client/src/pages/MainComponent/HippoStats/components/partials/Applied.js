import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Applied = ({applications}) => {
  const appliedFrom = {
    linkedIn: 0,
    indeed: 0,
    angelList: 0,
    handshake: 0,
    monster: 0,
    zipRecruiter: 0,
    jobFair: 0,
    website: 0,
    craigsList: 0,
    other: 0
  }

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
  })

  console.log(appliedFrom.linkedIn)

  const data = [
    {
      appliedFrom: 'LinkedIn',
      quantity: appliedFrom.linkedIn,
    },
    {
      appliedFrom: 'Indeed',
      quantity: appliedFrom.indeed,
    },
    {
      appliedFrom: 'AngelList',
      quantity: appliedFrom.angelList,
    },
    {
      appliedFrom: 'Handshake',
      quantity: appliedFrom.handshake,
    },
    {
      appliedFrom: 'Monster',
      quantity: appliedFrom.monster,
    },
    {
      appliedFrom: 'Zip Recruiter',
      quantity: appliedFrom.zipRecruiter,
    },
    {
      appliedFrom: 'Job Fair',
      quantity: appliedFrom.jobFair,
    },
    {
      appliedFrom: 'Company Website',
      quantity: appliedFrom.website,
    },
    {
      appliedFrom: 'Craigslist',
      quantity: appliedFrom.craigslist,
    },
    {
      appliedFrom: 'Other',
      quantity: appliedFrom.other,
    },
  ];


//     <div>
//       <h4>APPLIED</h4>
//       Linkedin: {appliedFrom.linkedIn} <br />
//       Indeed: {appliedFrom.indeed} <br />
//       AngelList: {appliedFrom.angelList} <br />
//       Handshake: {appliedFrom.handshake} <br />
//       Monster: {appliedFrom.monster} <br />
//       ZipRecruiter: {appliedFrom.zipRecruiter} <br />
//       Job Fair: {appliedFrom.jobFair} <br />
//       Company Website: {appliedFrom.website} <br />
//       Craigslist: {appliedFrom.craigslist} <br />
//       Other: {appliedFrom.other} <br />
//     </div>

  return (
    <ResponsiveContainer width="98%" height="80%">
      <BarChart width={150} height={40} data={data}>
        <XAxis dataKey="appliedFrom" />
        <YAxis interval={1}/>
        <Bar dataKey="quantity" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Applied;