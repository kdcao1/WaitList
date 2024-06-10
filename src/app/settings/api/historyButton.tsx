'use client'

import { Button } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation"

export function HistoryButton() {
    const [loading, {toggle}] = useDisclosure();
    if (loading) {
        setTimeout(toggle,2000);
    }
    const router = useRouter();
    return (
        <Button loading={loading} mt={10} fullWidth type='submit' onClick={() => {toggle(); router.push('/history');}}>History</Button>
    )
}