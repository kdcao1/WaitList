import { pb } from "../utils/pocketbase"
import { Reservation } from '../formats/reservationCardHomeFormat'
import { DateTime } from "luxon";
import { grabCollections } from "../utils/grabCollections";
import { ErrorCard } from "./errorCard";

async function getReservations() {
  const today = DateTime.now();
  const startDay = today.set({hour: 3, minute: 59, second: 59}).toISO().replace('T',' ');
  const endDay = today.plus({days: 1}).set({hour: 5, minute: 0}).toISO().replace('T',' ');
  const records = await pb.collection(grabCollections('Reservation')).getFullList({
    sort: '+DateTime',
    filter: `(Status="Pending" || Status="Ready") && DateTime > "${startDay}" && DateTime < "${endDay}"`
  });
  return records;
};

export async function ReservationHomeCard() {
  try {
    const reservations = await getReservations();
    return (
      <div className="text-9xl font-cursive overflow-auto no-scrollbar pb-20 pt-1 pl-3 w-1/2">
          {reservations?.map((reservations) => {
            return <Reservation key={reservations.id} reservations={reservations}/>;
          })}
      </div>
    );
  } catch (error) {
    return(<ErrorCard/>)
  }
};


