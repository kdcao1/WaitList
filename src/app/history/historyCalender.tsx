'use client'
import { DatePicker } from '@mantine/dates';
import { Button, Center, Paper } from '@mantine/core';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SegmentedControl } from '@mantine/core';
import { typeCookie, historyCookie, clearHistoryFilter } from './api/historyType';

export function Calender() {
    const router = useRouter();
    const [date, setDate] = useState<Date | null>(null);
    const [type, setType] = useState('Reservation');

    const handleDateChange = (date: Date | null) => {
        setDate(date);
        if (date) {
            historyCookie(date.toISOString());
            //console.log(`Selected date: ${date.toISOString()}`);
        }
    };

    const clearDate = () => {
        setDate(null)
        clearHistoryFilter();
        router.refresh();
    }

    const handleTypeChange = (e:any) => {
        setType(e);
        typeCookie(e);
    }
    return(
        <div className='flex w-1/2 h-dvh justify-center pt-1'>
              <div className="flex-column h-fit jusitfy-center text-black ">
                <Paper shadow="xl" radius="xl" p="xl" withBorder style={{ backgroundColor: 'white'}}>
                    <DatePicker 
                        styles={{weekday: {color: 'black'}, day: {color: 'black'}}}
                        value={date} 
                        onChange={handleDateChange}
                    />
                    <Center>
                        <Button fullWidth variant='light' onClick={clearDate} styles={{root: {color: 'black'}}}>
                            Clear Date Selection
                        </Button>
                    </Center>
                    <SegmentedControl mt={10} fullWidth value={type}
                        onChange={handleTypeChange}
                        data={[
                            { label: 'Reservation', value: 'Reservation' },
                            { label: 'WaitList', value: 'WalkIn' },
                        ]}>  
                    </SegmentedControl>
                </Paper>
            </div>
        </div>
    )
}