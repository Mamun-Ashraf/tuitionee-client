import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const LeafletType = ({ children, to }) => {
    return (
        <div>
            <Link to={to} className='flex items-center justify-around rounded-full shadow-lg shadow-darkColor transform hover:scale-105 duration-500 mb-5 p-1.5'>
                <button className="font-semibold text-md">{children}</button>
                <ChevronRightIcon className='h-6 w-6'></ChevronRightIcon>
            </Link>
        </div>
    );
};

export default LeafletType;