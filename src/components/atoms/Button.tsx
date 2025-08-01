// src/components/atoms/Button.tsx
import React from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'outline';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  const base = 'px-4 py-2 rounded transition';
  const variantClass =
    variant === 'outline'
      ? 'border border-gray-500 text-gray-700 bg-white hover:bg-gray-100'
      : 'bg-blue-600 text-white hover:bg-blue-700';
  return (
    <button className={clsx(base, variantClass, className)} {...props}>
      {children}
    </button>
  );
};
