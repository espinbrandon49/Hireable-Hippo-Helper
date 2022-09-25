import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DayOfWeek = ({ applications }) => {

  const appDates = applications.map((app) => {
    if (app.dateApplied) {
      let applied = app.dateApplied
      for (let i = 0; i < applied.length; i++) {
        let indice = applied.indexOf('T')
        return applied.slice(0, indice)
      }
    }
  })
  console.log(appDates)

  let sunday = 0;
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let saturday = 0;

  for (let i = 0; i < appDates.length; i++) {
    if (appDates[i] === "2022-09-01") {
      thursday++
    } else if (appDates[i] === "2022-09-02") {
      friday++
    } else if (appDates[i] === "2022-09-03") {
      saturday++
    } else if (appDates[i] === "2022-09-04") {
      sunday++
    } else if (appDates[i] === "2022-09-05") {
      monday++
    } else if (appDates[i] === "2022-09-06") {
      tuesday++
    } else if (appDates[i] === "2022-09-07") {
      wednesday++
    } else if (appDates[i] === "2022-09-08") {
      thursday++
    } else if (appDates[i] === "2022-09-09") {
      friday++
    } else if (appDates[i] === "2022-09-10") {
      saturday++
    } else if (appDates[i] === "2022-09-11") {
      sunday++
    } else if (appDates[i] === "2022-09-12") {
      monday++
    } else if (appDates[i] === "2022-09-13") {
      tuesday++
    } else if (appDates[i] === "2022-09-14") {
      wednesday++
    } else if (appDates[i] === "2022-09-15") {
      thursday++
    } else if (appDates[i] === "2022-09-16") {
      friday++
    } else if (appDates[i] === "2022-09-17") {
      saturday++
    } else if (appDates[i] === "2022-09-18") {
      sunday++
    } else if (appDates[i] === "2022-09-19") {
      monday++
    } else if (appDates[i] === "2022-09-20") {
      tuesday++
    } else if (appDates[i] === "2022-09-21") {
      wednesday++
    } else if (appDates[i] === "2022-09-22") {
      thursday++
    } else if (appDates[i] === "2022-09-23") {
      friday++
    } else if (appDates[i] === "2022-09-24") {
      saturday++
    } else if (appDates[i] === "2022-09-25") {
      sunday++
    } else if (appDates[i] === "2022-09-26") {
      monday++
    } else if (appDates[i] === "2022-09-27") {
      tuesday++
    } else if (appDates[i] === "2022-09-28") {
      wednesday++
    } else if (appDates[i] === "2022-09-29") {
      thursday++
    } else if (appDates[i] === "2022-09-30") {
      friday++
    }
  }

  const data = [
    { name: 'Sunday', value: sunday },
    { name: 'Monday', value: monday },
    { name: 'Tuesday', value: tuesday },
    { name: 'Wednesday', value: wednesday },
    { name: 'Thursday', value: thursday },
    { name: 'Friday', value: friday },
    { name: 'Saturday', value: saturday },
  ];

  const colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'purple', 'green']
  return (
    <>
      <h2 className='is-size-4 has-text-centered'>Applications By Day Of The Week</h2>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart width={800} height={800}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={180}
            label="piechart">
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