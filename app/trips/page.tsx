import { mockTrips } from "@/data/mockTrips";
import TripCard from "./component/TripCard";

export default function TripsPage() {
  return (
    <main className="p-5">
      <h1 className="mb-6 text-2xl font-bold">여행 리스트</h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,220px))] gap-6 justify-start">
        {mockTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </main>
  );
}