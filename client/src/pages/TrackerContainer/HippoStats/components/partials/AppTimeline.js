import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const AppTimeline = ({ applications }) => {

  let day1 = 0;
  let day2 = 0;
  let day3 = 0;
  let day4 = 0;
  let day5 = 0;
  let day6 = 0;
  let day7 = 0;
  let day8 = 0;
  let day9 = 0;
  let day10 = 0;
  let day11 = 0;
  let day12 = 0;
  let day13 = 0;
  let day14 = 0;
  let day15 = 0;
  let day16 = 0;
  let day17 = 0;
  let day18 = 0;
  let day19 = 0;
  let day20 = 0;
  let day21 = 0;
  let day22 = 0;
  let day23 = 0;
  let day24 = 0;
  let day25 = 0;
  let day26 = 0;
  let day27 = 0;
  let day28 = 0;
  let day29 = 0;
  let day30 = 0;

  const appDates = applications.map((app) => { return app.dateApplied })

  for (let i = 0; i < appDates.length; i++) {
    if (appDates[i] === "Sep 1st, 2022 at 12:00 am") {
      day1++
    } else if (appDates[i] === "Sep 2nd, 2022 at 12:00 am") {
      day2++
    } else if (appDates[i] === "Sep 3rd, 2022 at 12:00 am") {
      day3++
    } else if (appDates[i] === "Sep 4th, 2022 at 12:00 am") {
      day4++
    } else if (appDates[i] === "Sep 5th, 2022 at 12:00 am") {
      day5++
    } else if (appDates[i] === "Sep 6th, 2022 at 12:00 am") {
      day6++
    } else if (appDates[i] === "Sep 7th, 2022 at 12:00 am") {
      day7++
    } else if (appDates[i] === "Sep 8th, 2022 at 12:00 am") {
      day8++
    } else if (appDates[i] === "Sep 9th, 2022 at 12:00 am") {
      day9++
    } else if (appDates[i] === "Sep 10th, 2022 at 12:00 am") {
      day10++
    } else if (appDates[i] === "Sep 11th, 2022 at 12:00 am") {
      day11++
    } else if (appDates[i] === "Sep 12th, 2022 at 12:00 am") {
      day12++
    } else if (appDates[i] === "Sep 13th, 2022 at 12:00 am") {
      day13++
    } else if (appDates[i] === "Sep 14th, 2022 at 12:00 am") {
      day14++
    } else if (appDates[i] === "Sep 15th, 2022 at 12:00 am") {
      day15++
    } else if (appDates[i] === "Sep 16th, 2022 at 12:00 am") {
      day16++
    } else if (appDates[i] === "Sep 17th, 2022 at 12:00 am") {
      day17++
    } else if (appDates[i] === "Sep 18th, 2022 at 12:00 am") {
      day18++
    } else if (appDates[i] === "Sep 19th, 2022 at 12:00 am") {
      day19++
    } else if (appDates[i] === "Sep 20th, 2022 at 12:00 am") {
      day20++
    } else if (appDates[i] === "Sep 21st, 2022 at 12:00 am") {
      day21++
    } else if (appDates[i] === "Sep 22nd, 2022 at 12:00 am") {
      day22++
    } else if (appDates[i] === "Sep 23rd, 2022 at 12:00 am") {
      day23++
    } else if (appDates[i] === "Sep 24th, 2022 at 12:00 am") {
      day24++
    } else if (appDates[i] === "Sep 25th, 2022 at 12:00 am") {
      day25++
    } else if (appDates[i] === "Sep 26th, 2022 at 12:00 am") {
      day26++
    } else if (appDates[i] === "Sep 27th, 2022 at 12:00 am") {
      day27++
    } else if (appDates[i] === "Sep 28th, 2022 at 12:00 am") {
      day28++
    } else if (appDates[i] === "Sep 29th, 2022 at 12:00 am") {
      day29++
    } else if (appDates[i] === "Sep 30th, 2022 at 12:00 am") {
      day30++
    }
  }
 
  const data = [
    {
      date: "09/01",
      appsSent: day1,
      interview: 0,
    },
    {
      date: "09/02",
      appsSent: day2,
      interview: 0,
    },
    {
      date: "09/03",
      appsSent: day3,
      interview: 0,
    },
    {
      date: "09/04",
      appsSent: day4,
      interview: 0,
    },
    {
      date: "09/05",
      appsSent: day5,
      interview: 0,
    },
    {
      date: "09/06",
      appsSent: day6,
      interview: 1,
    },
    {
      date: "09/07",
      appsSent: day7,
      interview: 0,
    },
    {
      date: "09/08",
      appsSent: day8,
      interview: 0,
    },
    {
      date: "09/09",
      appsSent: day9,
      interview: 0,
    },
    {
      date: "09/10",
      appsSent: day10,
      interview: 0,
    },
    {
      date: "09/11",
      appsSent: day11,
      interview: 0,
    },
    {
      date: "09/12",
      appsSent: day12,
      interview: 0,
    },
    {
      date: "09/13",
      appsSent: day13,
      interview: 1,
    },
    {
      date: "09/14",
      appsSent: day14,
      interview: 0,
    },
    {
      date: "09/15",
      appsSent: day15,
      interview: 0,
    },
    {
      date: "09/16",
      appsSent: day16,
      interview: 0,
    },
    {
      date: "09/17",
      appsSent: day17,
      interview: 0,
    },
    {
      date: "09/18",
      appsSent: day18,
      interview: 0,
    },
    {
      date: "09/19",
      appsSent: day19,
      interview: 0,
    },
    {
      date: "09/20",
      appsSent: day20,
      interview: 1,
    },
    {
      date: "09/21",
      appsSent: day21,
      interview: 0,
    },
    {
      date: "09/22",
      appsSent: day22,
      interview: 0,
    },
    {
      date: "09/23",
      appsSent: day23,
      interview: 0,
    },
    {
      date: "09/24",
      appsSent: day24,
      interview: 0,
    },
    {
      date: "09/25",
      appsSent: day25,
      interview: 0,
    },
    {
      date: "09/26",
      appsSent: day26,
      interview: 0,
    },
    {
      date: "09/27",
      appsSent: day27,
      interview: 1,
    },
    {
      date: "09/28",
      appsSent: day28,
      interview: 0,
    },
    {
      date: "09/29",
      appsSent: day29,
      interview: 0,
    },
    {
      date: "09/30",
      appsSent: day30,
      interview: 0,
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 30
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="interview"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="appsSent" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AppTimeline