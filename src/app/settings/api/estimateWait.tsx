'use client'

import { useState } from "react"
import { Group, NumberInput, Text } from "@mantine/core";
import { updateChef } from "./updateChefs";
import { chefCookie} from "./chefCookie";

export function EstimateWait({user, waitCookie}:any) {
    const [chefs, setChefs] = useState(waitCookie);
    const handleChange = (e:any) => {
        setChefs(e)
        chefCookie(e);
    }
    
    if (Object.entries(user).length != 0) {
        updateChef(chefs, user);
    }
       
    return (
        <div>
            <Group pt={10}>
                <Text># Chefs</Text>
                <NumberInput
                    placeholder="Chefs"
                    min={1}
                    max={6}
                    clampBehavior="strict"
                    value={chefs}
                    onChange={handleChange}
                    styles={{root: {width: 132}}}
                />
            </Group>
        </div> 
    )
}