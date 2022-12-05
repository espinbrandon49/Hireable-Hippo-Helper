import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Label } from "recharts";

const StatusCount = ({ applications }) => {
  const currentMilestoneCount = {
    Applied: 0,
    Rejected: 0,
    inProcess: 0,
    jobOffers: 0,
  };

  applications.map((app) => {
    if (app.currentMilestone === "Applied") {
      currentMilestoneCount.Applied++;
    } else if (app.currentMilestone === "Rejected") {
      currentMilestoneCount.Rejected++;
    } else if (
      app.currentMilestone === "Phone Interview" ||
      app.currentMilestone === "Technical Interview" ||
      app.currentMilestone === "In Person Interview"
    ) {
      currentMilestoneCount.inProcess++;
    } else if (app.currentMilestone === "Job Offer") {
      currentMilestoneCount.jobOffers++;
    }
  });
  let data = [
    { currentMilestone: "Applied",
      quantity: currentMilestoneCount.Applied },
    {
      currentMilestone: "Rejected",
      quantity: currentMilestoneCount.Rejected,
    },
    { currentMilestone: "In-Process", quantity: currentMilestoneCount.inProcess },
    {
      currentMilestone: "Job Offers",
      quantity: currentMilestoneCount.jobOffers,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={500} height={500}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={130}
          fill="#8884d8"
          dataKey="quantity"
          onMouseEnter={onPieEnter}
        />
        <Label>Application Status Count</Label>
      </PieChart>
    </ResponsiveContainer>
  );
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.currentMilestone}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Quantity ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default StatusCount;
