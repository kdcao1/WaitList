'use client'
import { Button } from '@mantine/core'
import { pb } from "../utils/pocketbase"
import classes from './button.module.css';
import { useDisclosure } from '@mantine/hooks';

export function CompleteParty({id, partyStatus, collectionId}: any) {
    const [loading, {toggle}] = useDisclosure();
    if (loading) {
        setTimeout(toggle,2000);
    }
    if (!partyStatus) {
        return (<Button loading={loading} variant="light" styles={{label: { color: 'black' }}} onClick={()=>{toggle(); complete(id, collectionId)}}>Party Complete</Button>);
    } 
    return (<Button className={classes.button} disabled>All Here</Button>)
}

async function complete(id: any, collectionId: any) {
    const record = await pb.collection(collectionId).update(id, {
        "PartyComplete": true,
        "PartyCompleteTime": new Date() || null
    });
}