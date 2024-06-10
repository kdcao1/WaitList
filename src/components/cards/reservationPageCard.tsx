import { pb } from "../utils/pocketbase"
import { Reservation } from '../formats/reservationCardFormat'
import { DateTime } from "luxon";
import { grabCollections } from "../utils/grabCollections";

async function getReservations(date:string) {
  const today = DateTime.fromISO(date);
  const startDay = today.set({hour: 3, minute: 59, second: 59}).toISO()?.replace('T',' ');
  const endDay = today.plus({days: 1}).set({hour: 5, minute: 0}).toISO()?.replace('T',' ');
  const records = await pb.collection(grabCollections('Reservation')).getFullList({
      sort: '+DateTime',
      filter: `Status="Pending" && DateTime > "${startDay}" && DateTime < "${endDay}"`,
  })
  return records;
};

export async function ReservationPageCard({date}:any) {
  const reservations = await getReservations(date);
  return (
    <div className="text-9xl font-cursive overflow-auto no-scrollbar pt-1 pl-3">
        {reservations?.map((reservations) => {
          return <Reservation key={reservations.id} reservations={reservations}/>;
        })}
    </div>
  );
};