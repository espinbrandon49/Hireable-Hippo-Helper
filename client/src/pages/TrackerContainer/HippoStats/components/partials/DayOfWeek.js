import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DayOfWeek = ({ applications }) => {

  const appDates = applications.map((app) => {
    if (app.dateApplied) {
      let applied = new Date(app.dateApplied).toString()
      console.log(applied)
      for (let i = 0; i < applied.length; i++) {
        return applied.slice(0, 3)
      }
    }
  })

  let sunday = 0;
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let saturday = 0;
  let apply = 0;

  for (let i = 0; i < appDates.length; i++) {
    switch (appDates[i]) {
      case "Mon":
        monday++;
        break;
      case "Tue":
        tuesday++;
        break;
      case "Wed":
        wednesday++;
        break;
      case "Thu":
        thursday++;
        break;
      case "Fri":
        friday++;
        break;
      case "Sat":
        saturday++;
        break;
      default:
        apply++
    }
  }

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const data01 = [
    { name: 'Sunday', value: sunday },
    { name: 'Monday', value: monday },
    { name: 'Tuesday', value: tuesday },
    { name: 'Wednesday', value: wednesday },
    { name: 'Thursday', value: thursday },
    { name: 'Friday', value: friday },
    { name: 'Saturday', value: saturday },
    { name: 'Apply', value: apply },
  ];

  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 }
  ];

  const colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'purple', 'green']
  return (
    <>
      <h2 className='is-size-4 has-text-centered'>Applications By Day Of The Week</h2>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart width={800} height={800}>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={180}
            labelLine={false}
            label={renderCustomizedLabel}
            >
            {
              data.map((entry, index) => (
                <Cell key={index} fill={colors[index]} />
              ))
            }
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default DayOfWeek;
