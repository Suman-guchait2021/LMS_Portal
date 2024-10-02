import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

function Data() {
  const values = [
    {
      day: "Sat",
      time: 2,
      unit: "hrs"
    },
    {
      day: "Sun",
      time: 5,
      unit: "hrs"
    },
    {
      day: "Mon",
      time: 1,
      unit: "hrs"
    },
    {
      day: "Tue",
      time: 7,
      unit: "hrs"
    },
    {
      day: "Wed",
      time: 1.5,
      unit: "hrs"
    },
    {
      day: "Thu",
      time: 0,
      unit: "hrs"
    },
    {
      day: "Fri",
      time: 3,
      unit: "hrs"
    },
  ];
  return (
    <div>
        <BarChart width={450} height={280} data={values}>
          <XAxis dataKey="day" stroke="#8884d8" />
          <YAxis width={30}/>
          <Tooltip wrapperStyle={{ width: 70, backgroundColor: "#ccc" }} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "35px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="time" fill="#8884d8" barSize={15}/>
        </BarChart>
    </div>
  );
}

export default Data;
