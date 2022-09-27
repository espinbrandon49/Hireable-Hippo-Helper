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

  const data01 = [
    { name: 'Group Sunday', values: sunday },
    { name: 'Group Monday', values: monday },
    { name: 'Group Tuesday', values: tuesday },
    { name: 'Group Wednesday', values: wednesday },
    { name: 'Group Thursday', values: thursday },
    { name: 'Group Friday', values: friday },
    { name: 'Group Saturday', values: saturday },
    { name: 'Group Apply', values: apply },
  ];

  const data02 = [
    { name: 'Sunday', value: sunday },
    { name: 'Monday', value: monday },
    { name: 'Tuesday', value: tuesday },
    { name: 'Wednesday', value: wednesday },
    { name: 'Thursday', value: thursday },
    { name: 'Friday', value: friday },
    { name: 'Saturday', value: saturday },
    { name: 'Apply', value: apply },
  ];

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

  const colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'purple', 'green', 'gold']
  const styles = {
    red: {
      color: 'red',
      fontWeight: 'bold',
    },
    yellow: {
      color: 'yellow',
      fontWeight: 'bold',
    },
    blue: {
      color: 'blue',
      fontWeight: 'bold',
    },
    orange: {
      color: 'orange',
      fontWeight: 'bold',
    },
    pink: {
      color: 'pink',
      fontWeight: 'bold',
    },
    purple: {
      color: 'purple',
      fontWeight: 'bold',
    },
    green: {
      color: 'green',
      fontWeight: 'bold',
    },
    gold: {
      color: 'gold',
      fontWeight: 'bold',
    },
    redbox: {
      height: "20px",
      width: "20px",
      marginBottom: "15px",
      backgroundColor: "red",
    },
    yellowbox: {
      height: "20px",
      width: "20px",
      marginBottom: "15px",
      backgroundColor: "yellow",
    },
    bluebox: {
      height: "20px",
      width: "20px",
      marginBottom: "15px",
      backgroundColor: "blue",
    },
    orangebox: {
      height: "20px",
      width: "20px",
      marginBottom: "15px",
      backgroundColor: "orange",
    },
    pinkbox: {
      height: "20px",
      width: "20px",
      marginBottom: "15px",
      backgroundColor: "pink",
    },
    purplebox: {
      height: "20px",
      width: "20px",
      marginBottom: "15px",
      backgroundColor: "purple",
    },
    greenbox: {
      height: "20px",
      width: "20px",
      marginBottom: "15px",
      backgroundColor: "green",
    },
    goldbox: {
      height: "20px",
      width: "20px",
      marginBottom: "15px",
      backgroundColor: "gold",
    }
  };

  const renderLegend = (value, entry, index) => {
    return (
      <div className='is-flex is-flex-wrap-wrap is-justify-content-space-evenly'>
        <span style={styles.redbox}></span><span style={styles.red}>{data02[0].name + " "}</span>
        <span style={styles.yellowbox}></span><span style={styles.yellow}>{data02[1].name + " "}</span>
        <span style={styles.bluebox}></span><span style={styles.blue}>{data02[2].name + " "}</span>
        <span style={styles.orangebox}></span><span style={styles.orange}>{data02[3].name + " "}</span>
        <span style={styles.pinkbox}></span><span style={styles.pink}>{data02[4].name + " "}</span>
        <span style={styles.purplebox}></span><span style={styles.purple}>{data02[5].name + " "}</span>
        <span style={styles.greenbox}></span><span style={styles.green}>{data02[6].name + " "}</span>
        <span style={styles.goldbox}></span><span style={styles.gold}>{data02[7].name + " "}</span>
      </div>
    )

  };

  return (
    <>
      <h2 className='is-size-4 has-text-centered'>Applications By Day Of The Week</h2>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart width={800} height={800}>
          <Pie
            data={data01}
            dataKey="values"

            outerRadius={160}
            fill="#8884d8"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {
              data02.map((entry, index) => (
                <Cell key={index} fill={colors[index]} />
              ))
            }
          </Pie>
          <Pie
            dataKey="value"
            data={data02}

            innerRadius={180}
            outerRadius={220}
            label
          >
            {
              data02.map((entry, index) => (
                <Cell key={index} fill={colors[index]} />
              ))
            }
          </Pie>
          <Legend content={renderLegend} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default DayOfWeek;
