'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30':
              variant === 'primary',
            'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-lg shadow-secondary-500/25':
              variant === 'secondary',
            'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100':
              variant === 'outline',
            'text-primary-600 hover:bg-primary-50 active:bg-primary-100':
              variant === 'ghost',
            'bg-white text-primary-700 hover:bg-primary-50 shadow-lg':
              variant === 'white',
          },
          {
            'px-3 py-1.5 text-sm gap-1.5': size === 'sm',
            'px-5 py-2.5 text-base gap-2': size === 'md',
            'px-7 py-3.5 text-lg gap-2.5': size === 'lg',
            'px-9 py-4 text-xl gap-3': size === 'xl',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
