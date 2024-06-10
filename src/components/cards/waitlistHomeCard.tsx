import { pb } from "../utils/pocketbase"
import { WalkIn } from "../formats/waitlistCardHomeFormat";
import { DateTime } from "luxon";
import { grabCollections } from "../utils/grabCollections";
import { ErrorCard } from "./errorCard";


async function getWalkins() {
    const today = DateTime.now();
    const startDay = today.set({hour: 3, minute: 59, second: 59}).toISO().replace('T',' ');
    const endDay = today.plus({days: 1}).set({hour: 5, minute: 0}).toISO().replace('T',' ');
    const records = await pb.collection(grabCollections('WalkIn')).getFullList({
        sort: '+DateTime',
        filter: `(Status="Pending" || Status="Ready") && DateTime > "${startDay}" && DateTime < "${endDay}"`
    });
    return records;
};

export async function WaitlistHomeCard() {
    try {
        const walkins = await getWalkins();
        return (
            <div className="text-9xl font-cursive overflow-auto no-scrollbar pb-20 pt-1 pr-3 w-1/2">
                {walkins?.map((walkins) => {return <WalkIn key={walkins.id} walkins={walkins}/>;})}
            </div>
        );
    } catch (error) {
        return(<ErrorCard/>)
    }
    
};

