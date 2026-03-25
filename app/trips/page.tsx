import TripCard from "./component/TripCard";

const trips = [
  { id: "1", title: "오사카 여행", date: "2026.04.03 ~ 2026.04.07", country: "오사카" },
  { id: "2", title: "도쿄 여행", date: "2026.04.03 ~ 2026.04.07", country: "도쿄" },
  { id: "3", title: "제주도 여행", date: "2026.04.03 ~ 2026.04.07", country: "제주도" },
];

export default function TripsPage() {
  return (
    <main className="p-5">
      <h1 className="mb-6 text-2xl font-bold">여행 리스트</h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,220px))] gap-6 justify-start">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </main>
  );
}