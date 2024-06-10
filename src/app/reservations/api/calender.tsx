'use client'
import { DatePicker } from '@mantine/dates';
import { Button, Center, Paper } from '@mantine/core';
import React, { useState } from 'react';
import { clearFilter, dateCookie } from './dateCookie';
import { useRouter } from 'next/navigation';

export function Calender() {
    const router = useRouter();
    const [date, setDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setDate(date);
        if (date) {
            dateCookie(date.toISOString());
            //console.log(`Selected date: ${date.toISOString()}`);
        }
    };

    const clearDate = () => {
        setDate(null)
        clearFilter();
        router.refresh();
    }
    return(
        <div className='flex w-1/2 h-dvh justify-center pt-1'>
              <div className="flex-column h-fit jusitfy-center text-black ">
                <Paper shadow="xl" radius="xl" p="xl" withBorder style={{ backgroundColor: 'white'}}>
                    <DatePicker 
                        styles={{weekday: {color: 'black'}, day: {color: 'black'}}}
                        value={date} 
                        onChange={handleDateChange}
                        minDate={new Date()}
                    />
                    <Center>
                        <Button fullWidth variant='light' onClick={clearDate} styles={{root: {color: 'black'}}}>
                            Clear Date Selection
                        </Button>
                    </Center>
                </Paper>
            </div>
        </div>
    )
}