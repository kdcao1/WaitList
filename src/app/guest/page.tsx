import { Card } from "@mantine/core";
import React from "react";
import { pb } from "@/components/utils/pocketbase";
import { Locations } from "./locations";
import Image from "next/image";
import background from '../../../public/images/sushi3.jpg'
import logo from '../../../public/images/logo.png'

export default async function Guest() {
    try {
        const users = await getUsers();
        return (
            <div className="flex h-screen w-dvh pb-60 justify-center place-items-center bg-[white]">
                <Image src={background} alt="Img not found" priority fill style={{ zIndex: 0, overflow: "hidden",opacity: 0.50, objectFit: 'cover', position: "absolute"}}/>
                <div className="flex h-fit justify-center content-center">
                    <Card shadow="xl" radius="xl" p="xl" withBorder>
                        <div className="text-6xl mb-4 font-black">
                            <Image 
                                src={logo} 
                                alt="Logo" 
                                priority 
                                sizes="100vw"
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                }}
                            />
                        </div>
                        <div>
                            {users?.map((users) => {return <Locations key={users.id} users={users}/>;})}
                        </div>
                    </Card>  
                </div>
            </div>
        )
    } catch (error) {
        return(
        <div className="w-1/2 h-fit">
            <Card styles={{root: { backgroundColor: '#778da9' }}} shadow="sm" mb={10} padding="lg" radius="md" withBorder>
                No Locations
            </Card>
        </div>
        )
    }
}

async function getUsers() {
    const records = await pb.collection('UsersList').getFullList({
      sort: '+Name',
    });
    //console.table(records)
    return records;
};
