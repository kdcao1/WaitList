import { Button, Fieldset, TextInput, NumberInput, SegmentedControl, Center } from '@mantine/core';
import { useForm } from '@mantine/form';
import { updateData } from '../utils/dataHelpers';
import { useDisclosure } from '@mantine/hooks';

export function EditWaitlistForm({id, collectionId, record, closeModal}: any) {
    const [loading, {toggle}] = useDisclosure();
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          Name: record.Name,
          Number_Of_Guests: record.Number_Of_Guests,
          WaitTime: record.WaitTime,
          Phone_Number: (record.Phone_Number == 0 ? '' : record.Phone_Number),
          DateTime: record.DateTime,
          Table_Choice: record.Table_Choice,
          Status: record.Status,
        },
    
        validate: {
          Phone_Number: (value) => (value.toString().length == 0 || value.toString().length == 10) ? null : "Missing number(s)",
        },
    });

    return (
    <form onSubmit={form.onSubmit((values) => {toggle(); updateData(values, collectionId, id); closeModal();})}>
        <Fieldset>
            <TextInput 
                label='Name'
                placeholder='Name'
                required
                key={form.key('Name')}
                {...form.getInputProps('Name')}
            />
            <NumberInput 
                label="# of people" 
                placeholder='# of people'
                required
                min={1} 
                max={100} 
                allowNegative={false} 
                allowDecimal={false}
                clampBehavior="strict"
                hideControls
                type="tel"
                key={form.key('Number_Of_Guests')}
                {...form.getInputProps('Number_Of_Guests')}
            />
            <NumberInput 
                label="Wait Time (min)"  
                placeholder="Wait Time"
                max={120}
                clampBehavior="strict"
                allowNegative={false} 
                allowDecimal={false}
                hideControls
                type="tel"
                key={form.key('WaitTime')}
                {...form.getInputProps('WaitTime')}
            />
            <NumberInput 
                label="Phone Number"  
                placeholder="Phone Number"
                max={9999999999}
                clampBehavior="strict"
                allowNegative={false} 
                allowDecimal={false}
                hideControls
                type="tel"
                key={form.key('Phone_Number')}
                {...form.getInputProps('Phone_Number')}
            />
            <SegmentedControl
                mt={10}
                fullWidth 
                size="md" 
                data={[
                    {label:"Hibachi", value: "Hibachi"}, 
                    {label:"Table", value: "Table"},
                ]} 
                key={form.key('Table_Choice')}
                {...form.getInputProps('Table_Choice')}
            />
        </Fieldset>
        <Center>
            <Button loading={loading} mt={10} type='submit'>Update</Button>
        </Center>
    </form>
    );
}