import { useDisclosure } from '@mantine/hooks';
import { Modal , Button, Tabs } from '@mantine/core';
import AddReservationForm from './addReservationForm'
import AddWaitlistForm from './addWaitListForm'
import { IconSquarePlus } from '@tabler/icons-react';

export default function AddForm(wait:any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, {toggle}] = useDisclosure();
  if (loading) {
    setTimeout(toggle,2000);
}
  return (
    <>
      <Modal opened={opened} onClose={() => {close();}} title="New Party">
        <Tabs defaultValue="waitlist">
          <Tabs.List grow justify="center">
            <Tabs.Tab value="reservation">
              Reservation
            </Tabs.Tab>
            <Tabs.Tab value="waitlist">
              Waitlist
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="reservation">
            <AddReservationForm closeModal={close}/>
          </Tabs.Panel>

          <Tabs.Panel value="waitlist">
            <AddWaitlistForm closeModal={close} wait={wait.wait}/>
          </Tabs.Panel>
        </Tabs>
      </Modal>
      <Button loading={loading} styles={{root: {height: 84}}} fullWidth radius="xs" size="compact-xl" onClick={() => {toggle(); open();}}><IconSquarePlus color="black" size={60}/></Button>
    </>
  );
}
