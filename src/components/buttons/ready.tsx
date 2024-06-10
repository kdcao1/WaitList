'use client'
import { Button } from '@mantine/core'
import { pb } from "../utils/pocketbase"
import { useDisclosure } from '@mantine/hooks';

export function Ready({id, collectionId, status}: any) {
    const [loading, {toggle}] = useDisclosure();
    if (loading) {
        setTimeout(toggle,2000);
    }
    if (status == 'Pending') {
        return (<Button pl={5} pr={5} variant="light" loading={loading} styles={{label: { color: 'black' }}} onClick={()=>{toggle(); statusReady(id, collectionId);}}>Ready</Button>);
    } else {
        return null
    }
}

async function statusReady(id: any, collectionId: any) {
    await pb.collection(collectionId).update(id, {'Status':'Ready'});
}
