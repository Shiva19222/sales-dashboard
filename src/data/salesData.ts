// src/data/salesData.ts
export interface SalesDataPoint {
  name: string;
  value: number;
}

export const dailySales: SalesDataPoint[] = [
  { name: '2025-07-01', value: 1200 },
  { name: '2025-07-02', value: 1500 },
  { name: '2025-07-03', value: 1000 },
];

export const monthlySales: SalesDataPoint[] = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
];

export const yearlySales: SalesDataPoint[] = [
  { name: '2022', value: 12000 },
  { name: '2023', value: 14000 },
  { name: '2024', value: 16000 },
];
