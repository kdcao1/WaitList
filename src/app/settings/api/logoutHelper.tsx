'use client'
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { pb } from "@/components/utils/pocketbase";
import React from "react";
import { deleteCookie } from "cookies-next";
import { useDisclosure } from "@mantine/hooks";

export const LogoutButton = () => {
    const [loading, {toggle}] = useDisclosure();
    if (loading) {
        setTimeout(toggle,2000);
    }
    const router = useRouter();
    const handleClick = () => {
        toggle();
        pb.authStore.clear();
        deleteCookie('nameClient');
        router.push('/login')
    }
    return (
        <Button loading={loading} mt={10} onClick={handleClick}>Logout</Button>
    )
}