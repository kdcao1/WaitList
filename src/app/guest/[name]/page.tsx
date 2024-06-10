import React, { Suspense } from 'react';
import { WaitlistHeader } from '@/components/utils/waitlistHeader';
import { DateTime } from 'luxon';
import { pb } from '@/components/utils/pocketbase';
import { Card, Text, Box} from '@mantine/core';
import { cookies } from 'next/headers';
import background from '../../../../public/images/sushi.png'
import Image from 'next/image';
import Loading from '@/app/loading';
import { ErrorButton } from './errorButton';

export default function GuestPage({params}: {params: {name: string}}) {
    try {
        return (
            <Box>
                <Image src={background} alt="Img not found" priority fill style={{ zIndex: 0, overflow: "hidden",opacity: 0.10, objectFit: 'cover', position: "absolute"}}/>
                <WaitlistHeader/>
                <Suspense fallback={<Loading/>}>
                    <div className="flex columns-2 gap-5 inset-y-0 pt-20 left-0 h-[100dvh] text-transparent bg-[#FFF4F2]">
                        <GuestHibachiCard/>
                        <GuestTableCard/>
                    </div>
                </Suspense>
            </Box>
        )
    } catch (error) {
        console.log(error)
    }
}

async function GuestHibachiCard() {
    try {
        const today = DateTime.now();
        const startDay = today.set({hour: 3, minute: 59, second: 59}).toISO().replace('T',' ');
        const endDay = today.plus({days: 1}).set({hour: 5, minute: 0}).toISO().replace('T',' ');
        const records = await pb.collection(grabGuestCollections('WalkIn')).getFullList({
            sort: '+created',
            filter: `(Status = 'Pending' || Status = 'Ready') && DateTime > "${startDay}" && DateTime < "${endDay}" && Table_Choice = "Hibachi"`
        });
    return (
        <div className="text-9xl font-cursive overflow-auto no-scrollbar pb-16 pt-1 pl-3 w-1/2">
            {records?.map((records) => {
                return <GuestCard key={records.id} records={records}/>;
            })}
        </div>
    )
    } catch (error) {
        return(
            <ErrorButton/>
        )
    }
}

async function GuestTableCard() {
    try {
        const today = DateTime.now();
        const startDay = today.set({hour: 3, minute: 59, second: 59}).toISO().replace('T',' ');
        const endDay = today.plus({days: 1}).set({hour: 5, minute: 0}).toISO().replace('T',' ');
        const records = await pb.collection(grabGuestCollections('WalkIn')).getFullList({
            sort: '+created',
            filter: `(Status = 'Pending' || Status = 'Ready') && DateTime > "${startDay}" && DateTime < "${endDay}" && Table_Choice = "Table"`
        });
        return (
            <div className="text-9xl font-cursive overflow-auto no-scrollbar pb-16 pr-3 pt-1 w-1/2">
                {records?.map((records) => {
                   return <GuestCard key={records.id} records={records}/>;
                })}
            </div>
        )
    } catch (error) {
        return (
            <ErrorButton/>
        )
    }
    
}

function grabGuestCollections (collection: string): string {
    const name = cookies().get('location')?.value;
    if (name == null) {
        window.location.replace('/guest');
    }
    //console.log(name)
    const collectionName:string = `${name}_${collection}`
    return collectionName
}

function GuestCard({records}:any) {
    const {Name, Number_Of_Guests, DateTime, WaitTime, Status} = records || {};
    const formatDateTime = new Date(DateTime);
    const newDate = formatDateTime.toLocaleTimeString('en-US', {timeZone: 'America/New_York', timeStyle: 'short'})
    function WaitCheck() {
        if (Status == 'Ready') {
            return <Text>Table Ready</Text>
        } else {
            return <Text>Est. Wait: {WaitTime} min</Text>
        }
    }

    return (
        <Card styles={{root: { backgroundColor: 'white' }}} shadow="sm" mb={10} padding="lg" radius="md" withBorder>
            <Text size="xl" fw={500}>{Name} </Text>
            <Text>Party of {Number_Of_Guests}</Text>
            <WaitCheck/>
        </Card>
    );
}