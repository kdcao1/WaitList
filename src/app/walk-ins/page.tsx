import React, { Suspense } from 'react';
import { WaitlistHeader } from '@/components/utils/waitlistHeader';
import { WaitlistHibachiCard } from '@/components/cards/waitlistHibachiCard';
import { WaitlistTableCard } from '@/components/cards/waitlistTableCard';
import Loading from '../loading';

export default async function WalkIn() {
  return (
    <main>
      <WaitlistHeader/>
        <div className="flex columns-2 gap-5 inset-y-0 pt-20 left-0 h-[100dvh] text-transparent justify-center">
          <Suspense fallback={<div className='flex justify-center items-center w-1/2'><Loading/></div>}>
            <WaitlistHibachiCard/>
          </Suspense>
          <Suspense fallback={<div className='flex justify-center items-center w-1/2'><Loading/></div>}>
            <WaitlistTableCard/>
          </Suspense> 
        </div>
    </main>
  );
}
