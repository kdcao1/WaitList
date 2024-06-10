import React from 'react';
import { HomeHeader } from '../components/utils/homeHeader';
import { ReservationHomeCard } from '../components/cards/reservationHomeCard'
import { WaitlistHomeCard } from '@/components/cards/waitlistHomeCard';
import { Suspense } from 'react'
import Loading from './loading';
import { GrabWait } from '@/components/utils/grabCurrentWait';

export default async function Home() {
  GrabWait();
  return (
    <main>
      <HomeHeader/>
      <div className="flex columns-2 gap-5 inset-y-0 pt-20 left-0 h-[100dvh] text-transparent">
        <Suspense fallback={<div className='flex justify-center items-center w-1/2'><Loading/></div>}>
          <ReservationHomeCard/>
        </Suspense>
        <Suspense fallback={<div className='flex justify-center items-center w-1/2'><Loading/></div>}>
          <WaitlistHomeCard/>
        </Suspense>
      </div>
    </main>
  );
}