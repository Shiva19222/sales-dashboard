'use client';

import {
  BarChart, LineChart, PieChart, Pie, Line, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';

interface SalesChartProps {
  data: number[];
  type: 'bar' | 'line' | 'pie';
}

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function SalesChart({ data, type }: SalesChartProps) {
  const chartData = data.map((value, index) => ({
    month: monthLabels[index],
    sales: value,
  }));

  if (type === 'pie') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={chartData} dataKey="sales" nameKey="month" cx="50%" cy="50%" outerRadius={100} label>
            {chartData.map((_, i) => (
              <Cell key={i} fill={`hsl(${i * 30}, 70%, 50%)`} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      {type === 'bar' ? (
        <BarChart data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#3b82f6" />
        </BarChart>
      ) : (
        <LineChart data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#3b82f6" />
        </LineChart>
      )}
    </ResponsiveContainer>
  );
}
