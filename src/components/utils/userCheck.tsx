'use client'
import { clearHistoryFilter, clearHistoryType } from '@/app/history/api/historyType';
import { getCookie } from 'cookies-next';
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react';

export const UserCheck = () => {
    const pathname = usePathname();
    const router = useRouter();
    useEffect(() => {
        //console.log('ran usercheck')
        try {
            if (getCookie('nameClient') == null && (!pathname.includes('guest') && !pathname.includes('login'))) {
                //console.log('rerouted')
                router.push('/login')
            }
            if (!pathname.includes('history')) {
                clearHistoryFilter();
                clearHistoryType();
            }
            return () => {
            };
        } catch (error) {
            console.log('UserCheck Error')
        }
        
    },[pathname,router]);
}
