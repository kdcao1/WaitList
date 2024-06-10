import { Card } from "@mantine/core";

export function ErrorCard() {
    return (
        <div className="w-1/2 h-fit">
            <Card styles={{root: { backgroundColor: 'white' }}} shadow="sm" mb={10} padding="lg" radius="md" withBorder>
                No user logged in.
            </Card>
        </div>
        
    )
}