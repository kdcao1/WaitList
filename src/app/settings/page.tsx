import React, { Suspense } from "react";
import { LogoutButton } from "./api/logoutHelper";
import { Card } from "@mantine/core";
import { cookies } from "next/headers";
import { GuestButton } from "./api/guestButton";
import { EstimateWait } from "./api/estimateWait";
import { HistoryButton } from "./api/historyButton"
import Loading from "../loading";
import { getChefCookie } from "./api/chefCookie";

export default async function Settings() {
    const user = cookies().get('name')?.value
    async function ChefInput () {
        return getChefCookie().then((value) => {return <EstimateWait user={user} waitCookie={value}/>})
    }
    return (
        <div className="flex gap-5 inset-y-0 pt-20 left-0 h-[100dvh] text-transparent justify-center">
            <div className="flex h-fit justify-center">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Suspense fallback={<div className='flex justify-center h-fit items-center w-1/2'><Loading/></div>}>
                        <p className='text-6xl font-black '>
                            {user}
                        </p>
                        <ChefInput/>
                        <GuestButton/>
                        <HistoryButton/>
                        <LogoutButton/>
                    </Suspense>
                </Card>
            </div>
        </div>
    )
}