import { pb } from '@/components/utils/pocketbase';
import { cookies } from 'next/headers';
import { DateTime } from 'luxon';
import { Reservation } from '@/components/formats/reservationCardFormat';
import { Card } from '@mantine/core';
import { grabCollections } from '@/components/utils/grabCollections';
import { ReservationPageCard } from '@/components/cards/reservationPageCard';

export async function ReservationFilteredCard() {

    async function getReservations(filterDate:string) {
        try {
            const today = DateTime.fromISO(filterDate);
            const startDay = today.set({hour: 3, minute: 59, second: 59}).toISO()?.replace('T',' ');
            const endDay = today.plus({days: 1}).set({hour: 5, minute: 0}).toISO()?.replace('T',' ');
            const records = await pb.collection(grabCollections('Reservation')).getFullList({
                sort: '+DateTime',
                filter: `Status="Pending" && DateTime > "${startDay}" && DateTime < "${endDay}"`,
            })
            return records;
        } catch (error) {
           console.log(error) 
        }
        
    };

    try {
        const filter = cookies().get('filterDate')?.value;
        const reservations = await getReservations(filter as string);
        if (reservations === null || reservations?.length === 0) {
            return (
                <div className="font-cursive overflow-auto no-scrollbar pb-20 pl-3 pt-1 w-1/2">
                    <Card styles={{root: { backgroundColor: 'white' }}} shadow="sm" mb={10} padding="lg" radius="md" withBorder>
                        No reservations on this date
                    </Card>
                </div>
            )
        }
        return (
            <div className="text-9xl font-cursive overflow-auto no-scrollbar pb-20 pt-1 pl-3 w-1/2">
                {reservations?.map((reservations) => {
                    return <Reservation key={reservations.id} reservations={reservations}/>;
                })}
            </div>
        );
    } catch (error) {
        return (
            <div className="font-cursive overflow-auto no-scrollbar pb-20 pl-3 w-1/2">
                <Card styles={{root: { backgroundColor: 'white' }}} shadow="sm" mb={10} padding="lg" radius="md" withBorder>
                    No reservations on this date
                </Card>
            </div>
        )
    }
    
}

export async function GetDates() {
    const records = await pb.collection(grabCollections('Reservation')).getFullList({
        sort: '+DateTime',
        filter: `Status="Pending"`,
    })
    const uniqueDate = Array.from(new Set(records.map((records):any => ((records.DateTime) as string).substring(0,10))))
    return uniqueDate.map((uniqueDate) => {
        return <DateHeaders key={uniqueDate} dates={uniqueDate}/>}
    )
}

function DateHeaders({dates}: any) {
    const isoDate = `${dates}T05:00:00.000Z`;
    const dateFormat = new Date(isoDate).toLocaleDateString('en-US', {timeZone: 'America/New_York'})
    return (
        <>
            <div className='z-10 w-full text-lg font-semibold flex justify-center sticky bg-[#FFEBED] pt-1 top-0 items-center'>
                <div className='flex justify-center p-1 ml-3 w-full bg-[#ce4257] rounded-full'>{dateFormat}</div>
            </div>
            <ReservationPageCard date={isoDate}/>
            
        </>
    )
}