
import { pb } from "../utils/pocketbase"
import { WalkIn } from "../formats/waitlistCardFormat";
import { DateTime } from "luxon";
import { grabCollections } from "../utils/grabCollections";
import { ErrorCard } from "./errorCard";

const today = DateTime.now();

async function getWalkins() {
    const startDay = today.set({hour: 3, minute: 59, second: 59}).toISO().replace('T',' ');
    const endDay = today.plus({days: 1}).set({hour: 5, minute: 0}).toISO().replace('T',' ');
    const records = await pb.collection(grabCollections('WalkIn')).getFullList({
        sort: '+DateTime',
        filter: `DateTime > "${startDay}" && DateTime < "${endDay}" && Table_Choice = "Hibachi"`
    });
    return records;
};

export async function WaitlistHibachiCard() {
    try {
        const walkins = await getWalkins();
        return (
            <div className="text-9xl font-cursive overflow-auto no-scrollbar pb-20 pl-3 pt-1 w-1/2">
                {walkins?.map((walkins) => {return <WalkIn key={walkins.id} walkins={walkins}/>;})}
            </div>
        );
    } catch (error) {
        return(<ErrorCard/>)
    }
};

