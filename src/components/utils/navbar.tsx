'use client'
import AddForm from "../forms/addForm";
import { usePreventScroll } from 'react-aria'
import { IconList, IconHome, IconSettings, IconCalendarClock } from "@tabler/icons-react";
import { UserCheck } from "./userCheck";
import { usePathname } from "next/navigation";
import { useRealtime } from "./realtime";
import { grabClientCollections } from "./grabClientCollections";

export function Navbar(wait:any) {
    const pathname = usePathname();
    UserCheck();
    useRealtime(grabClientCollections('Reservation'));
    useRealtime(grabClientCollections('WalkIn'));
    usePreventScroll();
    return (
    (pathname.includes('login') || pathname.includes('guest')) ? null :
    <div className="absolute z-20 inset-x-0 bottom-0 h-fill w-dvw m-0 bg-[#4f000b] text-2xl font-bold text-center">
        <div className="flex justify-center">
            <a href='/'className='flex w-1/5 justify-center'>
                <div className="flex justify-center m-3 w-fit p-2 bg-[#ce4257] rounded-full items-center">
                    <IconHome size={44}/>
                </div>
            </a>
            <a href='/reservations' className='flex w-1/5  justify-center'>
                <div className="flex justify-center m-3 w-fit p-2 bg-[#ce4257] rounded-full items-center">
                    <IconCalendarClock size={44}/>
                </div>
            </a>
            <div className='flex justify-center w-1/5 h-full object-fill'>
                <AddForm wait={wait.wait}/>
            </div>
            <a href='/walk-ins' className='flex w-1/5 justify-center'>
                <div className="flex justify-center m-3 w-fit p-2 bg-[#ce4257] rounded-full items-center">
                    <IconList size={44}/>
                </div>
            </a>
            <a href='/settings' className='flex w-1/5 justify-center'>
                <div className="flex justify-center m-3 w-fit p-2 bg-[#ce4257] rounded-full items-center">
                    <IconSettings size={44}/>
                </div> 
            </a>
        </div>
    </div> 
    );
}