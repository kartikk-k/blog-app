import React, { FC } from 'react'
import { VariantProps, cva } from 'class-variance-authority';

const inputvariants = cva(
    "px-4",
    {
        variants: {
            variant: {
                default: "outline-none py-1 px-2 rounded-md bg-gray-300 focus:ring focus:ring-green-500",
            }
        }
    }
)

interface ProviderProps extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputvariants> {
    className?: string;
}

const Button: FC<ProviderProps> = ({ type, disabled, className }: ProviderProps) => {
    return (
        <input type={type} disabled={disabled} className={className} />
    );
}

export default Button;