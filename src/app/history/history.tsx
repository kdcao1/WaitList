import { pb } from '@/components/utils/pocketbase';
import { cookies } from 'next/headers';
import { DateTime } from 'luxon';
import { Reservation } from '@/components/formats/reservationCardFormat';
import { Card, Text, Group } from '@mantine/core';
import { CardMenu } from '@/components/buttons/cardMenu';
import { grabCollections } from '@/components/utils/grabCollections';
import { Complete } from '@/components/buttons/complete';

export async function ReservationFilteredCard() {
    
    async function getReservations(filterDate:string) {
        const today = DateTime.fromISO(filterDate);
        const startDay = today.set({hour: 3, minute: 59, second: 59}).toISO()?.replace('T',' ');
        const endDay = today.plus({days: 1}).set({hour: 5, minute: 0}).toISO()?.replace('T',' ');
        const records = await pb.collection(grabCollections("Reservation")).getFullList({
            sort: '+DateTime',
            filter: `DateTime > "${startDay}" && DateTime < "${endDay}"`,
        })
        return records;
    };

    try {
        const filter = cookies().get('historyFilter')?.value;
        const reservations = await getReservations(filter as string);
        if (reservations.length == 0) {
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

export async function WaitlistFilteredCard() {
    
    async function getWalkins(filterDate:string) {
        const today = DateTime.fromISO(filterDate);
        const startDay = today.set({hour: 3, minute: 59, second: 59}).toISO()?.replace('T',' ');
        const endDay = today.plus({days: 1}).set({hour: 5, minute: 0}).toISO()?.replace('T',' ');
        const records = await pb.collection(grabCollections('WalkIn')).getFullList({
            sort: '+DateTime',
            filter: `DateTime > "${startDay}" && DateTime < "${endDay}"`,
        })
        return records;
    };

    try {
        const filter = cookies().get('historyFilter')?.value;
        const walkIn = await getWalkins(filter as string);
        if (walkIn.length == 0) {
            return (
                <div className="font-cursive overflow-auto no-scrollbar pb-20 pl-3 pt-1 w-1/2">
                    <Card styles={{root: { backgroundColor: 'white' }}} shadow="sm" mb={10} padding="lg" radius="md" withBorder>
                        No waitlist on this date
                    </Card>
                </div>
            )
        }
        return (
            <div className="text-9xl font-cursive overflow-auto no-scrollbar pb-20 pt-1 pl-3 w-1/2">
                {walkIn?.map((walkIn) => {
                    return <WalkIn key={walkIn.id} walkins={walkIn}/>;
                })}
            </div>
        );
    } catch (error) {
        return (
            <div className="font-cursive overflow-auto no-scrollbar pb-20 pl-3 w-1/2">
                <Card styles={{root: { backgroundColor: 'white' }}} shadow="sm" mb={10} padding="lg" radius="md" withBorder>
                    No waitlist on this date
                </Card>
            </div>
        )
    }   
}

export function WalkIn({walkins}: any) {
    const {id, collectionId, collectionName, Name, Number_Of_Guests, DateTime, WaitTime, Table_Choice, Phone_Number, Status} = walkins || {};
    const formatDateTime = new Date(DateTime);
    const newDate = formatDateTime.toLocaleString('en-US', {timeZone: 'America/New_York', dateStyle: "short", timeStyle: 'short'})
    function PhoneCheck() {
        if (Phone_Number != null && Phone_Number.length == 10) {
            const phoneFormat = "(" 
                + (Phone_Number.toString()).substring(0,3) + ') ' 
                + Phone_Number.toString().substring(3,6) 
                + '-' 
                + Phone_Number.toString().substring(6,10);
            return <Text>{phoneFormat}</Text>
        } 
        return null;
    }
    return (
        <Card styles={{root: { backgroundColor: 'white' }}} shadow="sm" mb={10} padding="lg" radius="md" withBorder>
            <Group justify='space-between'>
                <Text size="xl" fw={500}>{Name}: {Number_Of_Guests} | {Table_Choice}</Text>
                <CardMenu id={id} collectionId={collectionId} collectionName={collectionName} record={walkins}/>
            </Group>
            <PhoneCheck/>
            <Group justify='space-between'>
                <Text>Arrival: {newDate} | Wait: {WaitTime} min</Text>
                <Complete id={id} collectionId={collectionId} status={Status}/>
            </Group>
        </Card>
    );
}