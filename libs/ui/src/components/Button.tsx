'use client';

import {ReactNode} from 'react';

type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void
};

export const Button = ({children, variant='primary', onClick}:ButtonProps) => {
    return(
        <button className="px-4 py-2 rounded font-medium transition bg-indigo-600 text-white hover:bg-indigo-700" onClick={onClick}>
            {children}
        </button>
    )
}