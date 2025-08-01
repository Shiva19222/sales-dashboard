import React from 'react';
import { Button } from '@/components/atoms/Button';

interface ChartTypeButtonsProps {
  chartType: 'line' | 'bar';
  onChange: (type: 'line' | 'bar') => void;
}

const ChartTypeButtons: React.FC<ChartTypeButtonsProps> = ({
  chartType,
  onChange,
}) => {
  return (
    <div className="flex space-x-2">
      <Button
        variant={chartType === 'line' ? 'primary' : 'outline'}
        onClick={() => onChange('line')}
      >
        Line Chart
      </Button>
      <Button
        variant={chartType === 'bar' ? 'primary' : 'outline'}
        onClick={() => onChange('bar')}
      >
        Bar Chart
      </Button>
    </div>
  );
};

export default ChartTypeButtons;