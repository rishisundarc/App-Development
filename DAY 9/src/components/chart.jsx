import React from 'react';
import { BarChart as MuiBarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
  { name: 'Year 1', value: 10 },
  { name: 'Year 2', value: 15 },
  { name: 'Year 3', value: 7 },
  { name: 'Year 4', value: 20 },
  // Add more data points as needed
];

const BarChart = () => {
  return (
    <MuiBarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </MuiBarChart>
  );
};

export default BarChart;
