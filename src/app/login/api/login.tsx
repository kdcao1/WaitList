'use client'
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { loginUser } from './loginHelpers';
import { useRouter } from 'next/navigation'
import { Alert } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

var failed = false;

export default function Login() {
  const [loading, {toggle}] = useDisclosure();
  const router = useRouter();
  if (loading) {
      setTimeout(toggle,2000);
  }
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      
    },
  });
  return (
    <div className='flex-column w-96 pl-10 pr-10'>
        <form onSubmit={form.onSubmit(async (values) => {
        const result = await loginUser(values);
        toggle();
        if (result.success) {
            router.push('/')
        } else {
            failed = true;
            toggle();
            router.refresh();
        }
        })}>
        <TextInput
            label='Username'
            name='username'
            placeholder='Username'
            key={form.key('username')}
            {...form.getInputProps('username')}
            className="input"
        />
        <TextInput
            type='password'
            label='Password'
            name='password'
            placeholder='Password' 
            key={form.key('password')}
            {...form.getInputProps('password')}
            className="input"
        />
        <Failed failed={failed}/>
        <Button loading={loading} mt={10} fullWidth type='submit'>Login</Button>
        </form>
        <Button loading={loading} mt={10} variant='light' fullWidth type='submit' onClick={() => {router.push('/guest'); toggle();}}>Guests</Button>
    </div>
  );
}

function Failed({failed}:any) {
  if (failed) {
    return(
    <Alert mt={10} color="red" icon={<IconX/>}>
      Username or Password is incorrect
    </Alert>
    )
  }
}