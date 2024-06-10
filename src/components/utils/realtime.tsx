'use client'
import { pb } from "../utils/pocketbase"
import { useEffect } from "react"
import { useRouter } from 'next/navigation';

export const useRealtime = (collection: string) => {
    const router = useRouter();

    useEffect(() => {
        //console.log('ran realtime')
        try {
            const handleRecordChange = (e: any) => {
                //console.log('Record changed:', e);
                router.refresh();
            };
            pb.collection(collection).subscribe('*', handleRecordChange);
            
        } catch (error) {
            //console.log(error);
        }
        
    },[collection, router]);
}