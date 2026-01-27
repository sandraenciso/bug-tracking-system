import {ReactNode} from 'react';

type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void
};

export const Button = ({children}:ButtonProps) => {
    return(
        <button className="bg-red-500 text-white p-8">
            {children}
        </button>
    )
}