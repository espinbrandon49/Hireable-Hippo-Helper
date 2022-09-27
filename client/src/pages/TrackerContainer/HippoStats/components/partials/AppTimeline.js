import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from "recharts";

const AppTimeline = ({ applications }) => {

  const appDates = applications.map((app) => {
    let applied = app.dateApplied
    for (let i = 0; i < applied.length; i++) {
      let indice = applied.indexOf('T')
      return [applied.slice(0, indice), app.company]
    }
  })
  console.log(appDates)

  let data = [
    {
      date: "09/01",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/02",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/03",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/04",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/05",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/06",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/07",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/08",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/09",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/10",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/11",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/12",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/13",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/14",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/15",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/16",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/17",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/18",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/19",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/20",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/21",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/22",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/23",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/24",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/25",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/26",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/27",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/28",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/29",
      appsSent: 0,
      interview: 0,
      company: ''
    },
    {
      date: "09/30",
      appsSent: 0,
      interview: 0,
      company: ''
    }
  ];

  for (let i = 0; i < appDates.length; i++) {
    if (appDates[i][0] === "2022-09-01") {
      data[0].appsSent++
      data[0].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-02") {
      data[1].appsSent++
      data[1].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-03") {
      data[2].appsSent++
      data[2].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-04") {
      data[3].appsSent++
      data[3].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-05") {
      data[4].appsSent++
      data[4].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-06") {
      data[5].appsSent++
      data[5].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-07") {
      data[6].appsSent++
      data[6].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-08") {
      data[7].appsSent++
      data[7].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-09") {
      data[8].appsSent++
      data[8].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-10") {
      data[9].appsSent++
      data[9].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-11") {
      data[10].appsSent++
      data[10].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-12") {
      data[11].appsSent++
      data[11].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-13") {
      data[12].appsSent++
      data[12].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-14") {
      data[13].appsSent++
      data[13].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-15") {
      data[14].appsSent++
      data[14].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-16") {
      data[15].appsSent++
      data[15].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-17") {
      data[16].appsSent++
      data[16].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-18") {
      data[17].appsSent++
      data[17].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-19") {
      data[18].appsSent++
      data[18].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-20") {
      data[19].appsSent++
      data[19].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-21") {
      data[20].appsSent++
      data[20].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-22") {
      data[21].appsSent++
      data[21].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-23") {
      data[22].appsSent++
      data[22].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-24") {
      data[23].appsSent++
      data[23].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-25") {
      data[24].appsSent++
      data[24].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-26") {
      data[25].appsSent++
      data[25].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-27") {
      data[26].appsSent++
      data[26].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-28") {
      data[27].appsSent++
      data[27].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-29") {
      data[28].appsSent++
      data[28].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-30") {
      data[29].appsSent++
      data[29].company = appDates[i][1]
    } else if (appDates[i][0] === "2022-09-30") {
      data[30].appsSent++
      data[30].company = appDates[i][1]
    }
  }

  const CustomizedLabel: FunctionComponent<any> = (props: any) => {
    const { x, y, stroke, value } = props;
    console.log(props)
    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  };
  return (
    <LineChart
      layout="vertical"
      width={500}
      height={800}
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={[0, "dataMax + 2"]} allowDecimals={false} />
      <YAxis dataKey="date" type="category" />
      <Tooltip />
      <Legend />
      <Line dataKey="appsSent" stroke="#8884d8">
        <LabelList dataKey="company" content={<CustomizedLabel />} />
      </Line>
      {/* <Line dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>
  )
}

export default AppTimeline