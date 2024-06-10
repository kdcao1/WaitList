import { getChefCookie } from "@/app/settings/api/chefCookie";
import { pb } from "./pocketbase";
import { DateTime } from "luxon";

export async function GrabWait() {
    const today = DateTime.now();
    const startDay = today.set({hour: 3, minute: 59, second: 59}).toISO().replace('T',' ');
    const endDay = today.plus({days: 1}).set({hour: 5, minute: 0}).toISO().replace('T',' ');
    const record = await pb.collection('Duluth_WalkIn').getFullList({filter: `Status="Pending" && DateTime > "${startDay}" && DateTime < "${endDay}"`});
    let sum = 0;
    record.map((record) => (sum = record.Number_Of_Guests + sum))
    //console.log(`sum: ${sum}`)
    const chefs = Number(await getChefCookie());
    //console.log(chefs)
    const wait = Math.floor((sum / 10) / chefs) * 20 + 20;
    //console.log(`wait: ${wait}`)
    return wait
}