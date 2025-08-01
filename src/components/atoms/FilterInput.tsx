'use client';

import React from 'react';
import { Input } from '@/components/ui/input';

type Props = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

const FilterInput = ({ placeholder = 'Search…', value, onChange }: Props) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-sm"
    />
  );
};

export default FilterInput;
