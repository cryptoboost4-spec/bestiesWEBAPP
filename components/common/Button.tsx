import React from 'react';
import { Icon } from './Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'disabled';
    iconLeft?: string;
    iconRight?: string;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', iconLeft, iconRight, children, className, ...props }) => {
    const baseClasses = 'font-display text-lg px-8 py-4 rounded-xl shadow-soft transition-all duration-300 transform hover:scale-105 active:scale-100 flex items-center justify-center gap-2';

    const variantClasses = {
        primary: 'bg-primary text-white shadow-glow-pink',
        secondary: 'bg-surface-light text-primary',
        disabled: 'bg-text-secondary/30 text-text-primary/50 cursor-not-allowed shadow-none',
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            disabled={variant === 'disabled'}
            {...props}
        >
            {iconLeft && <Icon name={iconLeft} className="text-2xl" />}
            <span>{children}</span>
            {iconRight && <Icon name={iconRight} className="text-2xl" />}
        </button>
    );
};
