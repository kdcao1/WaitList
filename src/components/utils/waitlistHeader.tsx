import React from 'react';

export function WaitlistHeader() {
    return (
        <div className="flex absolute inset-x-0 top-0 h-20 w-screen m-0 text-2xl bg-[#4f000b] font-bold text-black">
            <div className='flex justify-center m-3 w-1/2 bg-[#ce4257] rounded-full items-center'>Hibachi</div>
            <div className='flex justify-center m-3 w-1/2 bg-[#ce4257] rounded-full items-center'>Regular Table</div>
        </div>
    );
};