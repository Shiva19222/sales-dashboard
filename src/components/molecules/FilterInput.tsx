// src/components/molecules/FilterInput.tsx
'use client';
import React from 'react';

interface FilterInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function FilterInput({ value, onChange }: FilterInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Filter..."
      className="border px-3 py-2 rounded w-full focus:ring-2 focus:outline-none focus:ring-blue-500"
    />
  );
}
