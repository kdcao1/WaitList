'use client'
import { Button } from '@mantine/core'
import { useRouter } from 'next/navigation';
import { locationCookie } from './locationCookie';
import { useDisclosure } from '@mantine/hooks';

export function Locations({users}: any) {
    const [loading, { toggle }] = useDisclosure();
    const {Name} = users || {};
    const router = useRouter();
    const handleClick = () => {
        toggle()
        locationCookie(Name);
        router.push(`/guest/${Name}`);
    }
    if (loading) {
        setTimeout(toggle,3000);
    }
    return (
        <Button loading={loading} fullWidth mt={10} styles={{root: {color: 'black'}}} onClick={handleClick}>
            {Name}
        </Button>
    );
}