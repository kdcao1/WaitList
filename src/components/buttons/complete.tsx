'use client'
import { Button } from '@mantine/core'
import { pb } from "../utils/pocketbase"
import { useDisclosure } from '@mantine/hooks';

export function Complete({id, collectionId, status, canceled_by_who}: any) {
    const [loading, {toggle}] = useDisclosure();
    if (loading) {
        setTimeout(toggle,2000);
    }
    if (status == 'Pending' || status == 'Ready') {
        return (<Button variant="light" loading={loading} styles={{label: { color: 'black' }}} onClick={()=>{toggle(); statusComplete(id, collectionId);}}>Complete</Button>);
    } else if (status == 'Canceled') {
        return (<Button styles={{label: { color: 'black' }}} disabled>Canceled by {canceled_by_who}</Button>)
    } else {
        return (<Button styles={{label: { color: 'black' }}} disabled>Completed</Button>)
    }
}

async function statusComplete(id: any, collectionId: any) {
    await pb.collection(collectionId).update(id, {'Status':'Completed'});
}