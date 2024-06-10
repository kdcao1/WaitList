import { Card, Text, Group } from '@mantine/core'
import { CardMenu } from '../buttons/cardMenu'
import { Complete } from '../buttons/complete'
//import { getUser } from '../utils/loginHelpers';

export function Reservation({reservations}: any) {
  const {id, collectionId, collectionName, Name, Number_Of_Guests, DateTime, Phone_Number, Table_Choice, Status, PartyComplete, PartyCompleteTime, Canceled_by_who, Edited_by_who, Made_by_who} = reservations || {};
  const formatDateTime = new Date(DateTime);
  const newDate = formatDateTime.toLocaleString('en-US', {timeZone: 'America/New_York', dateStyle: "short", timeStyle: 'short'})
  const phoneFormat = "(" 
      + (Phone_Number.toString()).substring(0,3) + ') ' 
      + Phone_Number.toString().substring(3,6) 
      + '-' 
      + Phone_Number.toString().substring(6,10);
      const partyTimeFormat = new Date(PartyCompleteTime);
  const newPartyTime = partyTimeFormat.toLocaleTimeString('en-US', {timeZone: 'America/New_York', timeStyle: 'short'})
  function TimeCheck() {
    if (PartyCompleteTime == null || !PartyComplete) {
      return null
    }
    return <Text>Checkin Time: {newPartyTime}</Text>
  }
  function EditCheck() {
    if (Edited_by_who == '') {
      return null
    }
    return <Text size="xs">Edited by: {Edited_by_who}</Text>
  }
  return (
    <Card styles={{root: { backgroundColor: 'white' }}} shadow="sm" mb={10} padding="lg" radius="md" withBorder>
      <Group justify='space-between'>
        <Text size="xl" fw={500}>{Name} | {Number_Of_Guests} | {Table_Choice}</Text>
        <CardMenu id={id} collectionId={collectionId} collectionName={collectionName} record={reservations}/>
      </Group>
      <Text >{newDate}</Text>
      <Text size="xs">{phoneFormat}</Text>
      <TimeCheck/>
      <Group justify='space-between'>
        <Text size="xs">Made by: {Made_by_who}</Text>
        <EditCheck/>
        <Complete id={id} collectionId={collectionId} status={Status}  canceled_by_who={Canceled_by_who}/>
      </Group>
    </Card>
  )
}