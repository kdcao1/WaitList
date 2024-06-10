import { pb } from "../utils/pocketbase"
import { Reservation } from '../formats/reservationCardFormat'
import { WalkIn } from "../formats/waitlistCardFormat";
import { grabCollections } from "../utils/grabCollections";
import { ErrorCard } from "./errorCard";

async function getReservations() {
  const records = await pb.collection(grabCollections('Reservation')).getFullList({
      sort: '+DateTime',
  })
  return records;
};

async function getWalkins() {
  const records = await pb.collection(grabCollections('WalkIn')).getFullList({
      sort: '+DateTime',
  })
  return records;
};

export async function HistoryReservationCard() {
  const reservations = await getReservations();
  return (
    <div className="text-9xl font-cursive overflow-auto no-scrollbar pb-20 pt-1 pl-3 w-1/2">
        {reservations?.map((reservations) => {
          return <Reservation key={reservations.id} reservations={reservations}/>;
        })}
    </div>
  );
};

export async function HistoryWaitlistCard() {
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