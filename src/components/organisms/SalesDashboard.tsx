// src/components/organisms/SalesDashboard.tsx
'use client';
import React, { useState } from 'react';
import ChartTypeButtons from '@/components/molecules/ChartTypeButtons';
import FilterInput from '@/components/molecules/FilterInput';
import { SalesChart } from '@/components/organisms/SalesChart';
import { dailySales, monthlySales, yearlySales } from '@/data/salesData';

type FilterType = 'daily' | 'monthly' | 'yearly';
type ChartType = 'line' | 'bar';

export default function SalesDashboard() {
  const [filterType, setFilterType] = useState<FilterType>('daily');
  const [chartType, setChartType] = useState<ChartType>('line');

  const rawData = filterType === 'daily'
    ? dailySales
    : filterType === 'monthly'
    ? monthlySales
    : yearlySales;

  const filteredData = rawData.filter((item) =>
    item.name.toLowerCase().includes(filterType === 'daily' ? item.name.toLowerCase() : filterType.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Sales Dashboard</h1>
      <FilterInput value={filterType} onChange={(val) => setFilterType(val as FilterType)} />
      <ChartTypeButtons selectedFilter={filterType} onChange={setFilterType} />
      <div className="mt-4">
        <ChartTypeButtons selectedFilter={filterType} onChange={setFilterType} /> {/* for filter */}
        <ChartTypeButtons selectedFilter={filterType} onChange={setFilterType} /> {/* duplicates? adjust */}
      </div>
      <SalesChart data={filteredData} chartType={chartType} />
      <div className="flex space-x-2 mt-4">
        {/* Buttons to switch chart type */}
        <button onClick={() => setChartType('line')} className="px-3 py-2 bg-gray-200 rounded">Line</button>
        <button onClick={() => setChartType('bar')} className="px-3 py-2 bg-gray-200 rounded">Bar</button>
      </div>
    </div>
  );
}
