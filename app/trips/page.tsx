import { mockTrips } from "@/data/mockTrips";
import TripCard from "./component/TripCard";

export default function TripsPage() {
  return (
    <main className="p-5">
      <h1 className="mb-6 text-5xl black-han-sans text-[#264653]">여행 목록</h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,220px))] gap-6 justify-start">
        {mockTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </main>
  );
}