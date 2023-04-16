import React, { FC } from 'react'
import { VariantProps, cva } from 'class-variance-authority';

const buttonvariants = cva(
    "px-4",
    {
        variants: {
            variant: {
                default: "",
                primary: "bg-blue-500 text-white",
                secondary: "bg-gray-500 text-white",
            }
        }
    }
)

interface ProviderProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonvariants> {
    isLoaded?: boolean;
}

const Button: FC<ProviderProps> = ({ }) => {
    return (
        <div>
            Button
        </div>
    );
}

export default Button;