import { HistoryReservationCard, HistoryWaitlistCard } from '@/components/cards/historyCard'
import { HistHeader } from '@/components/utils/historyHeader';
import { Calender } from './historyCalender';
import { cookies } from 'next/headers';
import {ReservationFilteredCard, WaitlistFilteredCard} from './history'
import { Suspense } from 'react';
import Loading from '../loading';


export default function Reservations() {
  
  function FilterCheck() {
    if (cookies().get('historyType')?.value != 'WalkIn'){
      if (cookies().has('historyFilter')) {
        //console.log('1')
        return (<ReservationFilteredCard/>)
      } else {
        //console.log('2')
        return (<HistoryReservationCard/>)
      }
    } else {
      if (cookies().has('historyFilter')) {
        //console.log('3')
        return (<WaitlistFilteredCard/>)
      } else {
        //console.log('4')
        return (<HistoryWaitlistCard/>)
      }
    }
  }

  return (
    <main>
        <HistHeader/>
        <div className="flex columns-2 gap-5 inset-y-0 pt-20 left-0 h-[100dvh] text-black ">
          <Suspense fallback={<div className='flex justify-center items-center w-1/2'><Loading/></div>}>
            <FilterCheck/>
          </Suspense>
          <Calender/>
        </div>
    </main>
  );
}