// src/app/dashboard/page.tsx
import React from 'react';
import SalesDashboard from '@/components/organisms/SalesDashboard';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <SalesDashboard />
    </main>
  );
}
