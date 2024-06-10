import { Card, Text, Group } from '@mantine/core'
import { CardMenu } from '../buttons/cardMenu'
import { Complete } from '../buttons/complete'
import { CompleteParty  } from '../buttons/completeParty'
import { Ready } from '../buttons/ready';

export function WalkIn({walkins}: any) {
    const {id, collectionId, collectionName, Name, Number_Of_Guests, DateTime, WaitTime, Table_Choice, Phone_Number, Status, PartyComplete} = walkins || {};
    const formatDateTime = new Date(DateTime);
    const newDate = formatDateTime.toLocaleTimeString('en-US', {timeZone: 'America/New_York', timeStyle: 'short'})
    const phoneFormat = "(" 
        + (Phone_Number.toString()).substring(0,3) + ') ' 
        + Phone_Number.toString().substring(3,6) 
        + '-' 
        + Phone_Number.toString().substring(6,10);
    function PhoneCheck() {
        if (Phone_Number != 0) {
            return <Text>{phoneFormat}</Text>
        } 
        return null;
    }
    function WaitCheck() {
        if (Status == 'Ready') {
            return <Text>Arrival: {newDate} | Table Ready</Text>
        } else {
            return <Text>Arrival: {newDate} | Wait: {WaitTime} min</Text>
        }
    }
    return (
        <Card styles={{root: { backgroundColor: 'white' }}} shadow="sm" mb={10} padding="lg" radius="md" withBorder>
            <Group justify='space-between'>
                <Text size="xl" fw={500}>{Name} | {Number_Of_Guests} | {Table_Choice}</Text>
                <CardMenu id={id} collectionId={collectionId} collectionName={collectionName} record={walkins}/>
            </Group>
            <WaitCheck/>
            <PhoneCheck/>
            <Group gap="xs">
                <CompleteParty id={id} partyStatus={PartyComplete} collectionId={collectionId}/>
                <Ready id={id} collectionId={collectionId} status={Status}/>
                <Complete id={id} collectionId={collectionId} status={Status}/>
            </Group>
        </Card>
    );
}