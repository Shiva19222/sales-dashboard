// src/components/organisms/SalesChart.tsx
'use client';
import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

interface Props {
  data: { name: string; value: number }[];
  chartType: 'line' | 'bar';
}

export function SalesChart({ data, chartType }: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      {chartType === 'line' ? (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" />
        </LineChart>
      ) : (
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
}
