import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const StatusByPercent = ({ applications }) => {

  const appDates = applications.map((app) => {
    let applied = app.dateApplied
    for (let i = 0; i < applied.length; i++) {
      let indice = applied.indexOf('T')
      return applied.slice(0, indice)
    }
  })
  console.log(appDates)

  const data = [
    {
      Week: '08-28',
      Applied: 0,
      Phone: 0,
      Technical: 0,
      Inperson: 0,
      Offers: 0,
      Rejected: 0
    },
    {
      Week: '09-04',
      Applied: 0,
      Phone: 0,
      Technical: 0,
      Inperson: 0,
      Offers: 0,
      Rejected: 0
    },
    {
      Week: '09-11',
      Applied: 0,
      Phone: 0,
      Technical: 0,
      Inperson: 0,
      Offers: 0,
      Rejected: 0
    },
    {
      Week: '09-18',
      Applied: 0,
      Phone: 0,
      Technical: 0,
      Inperson: 0,
      Offers: 0,
      Rejected: 0
    },
    {
      Week: '09-25',
      Applied: 0,
      Phone: 0,
      Technical: 0,
      Inperson: 0,
      Offers: 0,
      Rejected: 0
    },
    {
      Week: '10-02',
      Applied: 0,
      Phone: 0,
      Technical: 0,
      Inperson: 0,
      Offers: 0,
      Rejected: 0
    },
  ]


  for (let i = 0; i < appDates.length; i++) {
    let bell = 0;
    function currMileData(dataIndex) {
      const currMile = applications[i].currentMilestone
      switch (currMile) {
        case "Applied":
          data[dataIndex].Applied++;
          break;
        case "Phone Interview":
          data[dataIndex].Phone++;
          break;
        case "Technical Interview":
          data[dataIndex].Technical++;
          break;
        case "In Person Interview":
          data[dataIndex].Inperson++;
          break;
        case "Job Offer":
          data[dataIndex].Offers++;
          break;
        case "Rejected":
          data[dataIndex].Rejected++;
          break;
        default:
          bell = 1;
      }
    }

    if (appDates[i] === "2022-09-01") {
      currMileData(0);
    } else if (appDates[i] === "2022-09-02") {
      currMileData(0);
    } else if (appDates[i] === "2022-09-03") {
      currMileData(0);
    } else if (appDates[i] === "2022-09-04") {
      currMileData(1);
    } else if (appDates[i] === "2022-09-05") {
      currMileData(1);
    } else if (appDates[i] === "2022-09-06") {
      currMileData(1);
    } else if (appDates[i] === "2022-09-07") {
      currMileData(1);
    } else if (appDates[i] === "2022-09-08") {
      currMileData(1);
    } else if (appDates[i] === "2022-09-09") {
      currMileData(1);
    } else if (appDates[i] === "2022-09-10") {
      currMileData(1);
    } else if (appDates[i] === "2022-09-11") {
      currMileData(2);
    } else if (appDates[i] === "2022-09-12") {
      currMileData(2);
    } else if (appDates[i] === "2022-09-13") {
      currMileData(2);
    } else if (appDates[i] === "2022-09-14") {
      currMileData(2);
    } else if (appDates[i] === "2022-09-15") {
      currMileData(2);
    } else if (appDates[i] === "2022-09-16") {
      currMileData(2);
    } else if (appDates[i] === "2022-09-17") {
      currMileData(2);
    } else if (appDates[i] === "2022-09-18") {
      currMileData(3);
    } else if (appDates[i] === "2022-09-19") {
      currMileData(3);
    } else if (appDates[i] === "2022-09-20") {
      currMileData(3);
    } else if (appDates[i] === "2022-09-21") {
      currMileData(3);
    } else if (appDates[i] === "2022-09-22") {
      currMileData(3);
    } else if (appDates[i] === "2022-09-23") {
      currMileData(3);
    } else if (appDates[i] === "2022-09-24") {
      currMileData(3);
    } else if (appDates[i] === "2022-09-25") {
      currMileData(4);
    } else if (appDates[i] === "2022-09-26") {
      currMileData(4);
    } else if (appDates[i] === "2022-09-27") {
      currMileData(4);
    } else if (appDates[i] === "2022-09-28") {
      currMileData(4);
    } else if (appDates[i] === "2022-09-29") {
      currMileData(4);
    } else if (appDates[i] === "2022-09-30") {
      currMileData(4);
    } else if (appDates[i] === "2022-10-01") {
      currMileData(4);
    } else if (appDates[i] === "2022-10-02") {
      currMileData(5);
    } else if (appDates[i] === "2022-10-03") {
      currMileData(5);
    } else if (appDates[i] === "2022-10-04") {
      currMileData(5);
    } else if (appDates[i] === "2022-10-05") {
      currMileData(5);
    } else if (appDates[i] === "2022-10-06") {
      currMileData(5);
    } else if (appDates[i] === "2022-10-07") {
      currMileData(5);
    } else if (appDates[i] === "2022-10-08") {
      currMileData(5);
    }
      console.log(bell)
    }

    const toPercent = (decimal, fixed = 2) => `${(decimal * 100).toFixed(2)}%`;

    const getPercent = (value, total) => {
      const ratio = total > 0 ? value / total : 0;

      return toPercent(ratio, 2);
    };

    const renderTooltipContent = (o) => {
      const { payload, label } = o;
      const total = payload.reduce((result, entry) => result + entry.value, 0);

      return (
        <div className="customized-tooltip-content">
          <p className="total">{`${label} (Total: ${total})`}</p>
          <ul className="list">
            {payload.map((entry, index) => (
              <li key={`item-${index}`} style={{ color: entry.color }}>
                {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
              </li>
            ))}
          </ul>
        </div>
      );
    };

    return (
      <>
        <h2 className='is-size-4 has-text-centered'>Weekly Milestones By Percent</h2>
        <ResponsiveContainer width="100%" height="90%">
          <AreaChart
            width={400}
            height={400}
            data={data}
            stackOffset="expand"
            margin={{
              top: 20,
              right: 20,
              left: 30,
              bottom: 0,
            }}
          >
            <Legend/>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Week" />
            <YAxis tickFormatter={toPercent} />
            <Tooltip content={renderTooltipContent} />
            <Area type="monotone" dataKey="Applied" stackId="1" stroke="blue" fill="blue" />
            <Area type="monotone" dataKey="Phone" stackId="1" stroke="green" fill="green" />
            <Area type="monotone" dataKey="Technical" stackId="1" stroke="yellow" fill="yellow" />
            <Area type="monotone" dataKey="Inperson" stackId="1" stroke="purple" fill="purple" />
            <Area type="monotone" dataKey="Offers" stackId="1" stroke="pink" fill="pink" />
            <Area type="monotone" dataKey="Rejected" stackId="1" stroke="red" fill="red" />
          </AreaChart>
        </ResponsiveContainer>
      </>
    )
  }

  export default StatusByPercent;