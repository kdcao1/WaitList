'use client'

import { Card, Button } from "@mantine/core"
import { useRouter } from "next/navigation";

export function ErrorButton() {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/guest`);
    }
    return (
        <div className='h-fit w-1/2'>
            <Card styles={{root: { backgroundColor: 'white' }}} shadow="sm" mb={10} padding="lg" radius="md" withBorder>
            <Button fullWidth mt={10} styles={{root: {color: 'black'}}} onClick={handleClick}>
                Back to locations
            </Button>
            </Card>
        </div>
    )
}