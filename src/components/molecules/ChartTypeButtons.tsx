// src/components/molecules/ChartTypeButtons.tsx
'use client';
import React from 'react';
import { Button } from '@/components/atoms/Button';

interface ChartTypeButtonsProps {
  selectedFilter: 'daily' | 'monthly' | 'yearly';
  onChange: (type: 'daily' | 'monthly' | 'yearly') => void;
}

const types: Array<'daily' | 'monthly' | 'yearly'> = ['daily', 'monthly', 'yearly'];

export default function ChartTypeButtons({ selectedFilter, onChange }: ChartTypeButtonsProps) {
  return (
    <div className="flex space-x-2 mb-4">
      {types.map((t) => (
        <Button
          key={t}
          variant={selectedFilter === t ? 'primary' : 'outline'}
          onClick={() => onChange(t)}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </Button>
      ))}
    </div>
  );
}
