import { ResHeader } from '@/components/utils/reservationHeader';
import { Calender } from './api/calender';
import { GetDates} from './reservationHelper';
import { Suspense } from 'react';
import Loading from '../loading';
import { cookies } from 'next/headers';
import { ReservationFilteredCard } from './reservationHelper';


export default function Reservations() {

  function FilterCheck() {
    if (cookies().has('filterDate')){
      return (<ReservationFilteredCard/>)
    } else {
      return (
      <div className='flex-columns w-1/2 overflow-auto no-scrollbar pb-20'>
        <GetDates/>
      </div>
    )
    }
  }

  return (
    <main>
        <ResHeader/>
        <div className="flex columns-2 gap-5 inset-y-0 pt-20 left-0 h-[100dvh] text-black">
          <Suspense fallback={<div className='flex justify-center items-center w-1/2'><Loading/></div>}>
            <FilterCheck/>
          </Suspense>
          <Calender/>
        </div>
    </main>
  );
}