import { Card, Text, Group } from '@mantine/core'
import { CardMenu } from '../buttons/cardMenu'
import { Complete} from '../buttons/complete'
import { CompleteParty } from '../buttons/completeParty'

export function Reservation({reservations}: any) {
  const {id, collectionId, collectionName, Name, Number_Of_Guests, DateTime, Phone_Number, Table_Choice, Status, PartyComplete, PartyCompleteTime} = reservations || {};
  const formatDateTime = new Date(DateTime);
  const newDate = formatDateTime.toLocaleTimeString('en-US', {timeZone: 'America/New_York', timeStyle: 'short'})
  const partyTimeFormat = new Date(PartyCompleteTime);
  const newPartyTime = partyTimeFormat.toLocaleTimeString('en-US', {timeZone: 'America/New_York', timeStyle: 'short'})
  function TimeCheck() {
    if (PartyCompleteTime == null || !PartyComplete) {
      return null
    }
    return <Text>Checkin Time: {newPartyTime}</Text>
  }
  return (
    <Card styles={{root: { backgroundColor: 'white' }}} shadow="sm" mb={10} padding="lg" radius="md" withBorder>
      <Group justify='space-between'>
        <Text size="xl" fw={500}>{Name} | {Number_Of_Guests} | {Table_Choice}</Text>
        <CardMenu id={id} collectionId={collectionId} collectionName={collectionName} record={reservations}/>
      </Group>
      <Text size="l" fw={400}>Reserved Time: {newDate}</Text>
      <TimeCheck/>
      <Group justify='space-between'>
        <CompleteParty id={id} partyStatus={PartyComplete} collectionId={collectionId}/>
        <Complete id={id} collectionId={collectionId} status={Status}/>
      </Group>
    </Card>
  )
}