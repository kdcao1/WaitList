import React from 'react';

export function HistHeader() {
    return (
        <div className="flex absolute inset-x-0 top-0 h-20 w-screen m-0 bg-[#4f000b] text-2xl font-bold text-center">
            <div className='flex justify-center m-3 w-1/2 bg-[#ce4257] rounded-full items-center'>Past Reservations/Walk-Ins</div>
            <div className='flex justify-center m-3 w-1/2 bg-[#ce4257] rounded-full items-center'>Filter</div>
        </div>
    );
};