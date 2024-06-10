'use client'
import { IconDotsVertical } from '@tabler/icons-react'
import { EditWaitlistForm } from "../forms/editWaitlistForm"
import { EditReservationForm } from '../forms/editReservationForm'
import { Modal, Tabs, TextInput, ActionIcon, Center, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { handleCancel } from './cancel'
import { useState } from 'react'

export function CardMenu({id, collectionId, record, collectionName}: any) {
  const [opened, { open, close }] = useDisclosure(false);
  return(
    <>
      <Modal opened={opened} onClose={close} title="Update Listing">
        <Tabs defaultValue="edit">
          <Tabs.List grow justify="center">
            <Tabs.Tab value="edit">
              Edit
            </Tabs.Tab>
            <Tabs.Tab value="cancel">
              Cancel
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="edit">
            <EditCheck collectionId={collectionId} id={id} collectionName={collectionName} record={record} closeModal={close}/>
          </Tabs.Panel>

          <Tabs.Panel value="cancel">
            <Cancel collectionId={collectionId} id={id} closeModal={close} />
          </Tabs.Panel>
        </Tabs>
      </Modal>
      <ActionIcon variant="transparent" onClick={open}>
        <IconDotsVertical/>
      </ActionIcon>
    </>
  );
}

const EditCheck = ({collectionId, id, collectionName, record, closeModal}:any) => {
  if (collectionName.includes('Reservation')) {
    return <EditReservationForm id={id} collectionId={collectionId} record={record} closeModal={closeModal}/>;
  }
  return <EditWaitlistForm id={id} collectionId={collectionId} record={record} closeModal={closeModal}/>
}

const Cancel = ({collectionId, id, closeModal}:any) => {
  const [name, setName] = useState('');
  return (
    <>
      <TextInput 
        label='Canceled by who'
        placeholder='Name'
        required
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
      />
      <Center>
        <Button mt={10} onClick={() => {handleCancel(collectionId, id, name), closeModal();}}>Cancel</Button>
      </Center>
    </>
  )
}