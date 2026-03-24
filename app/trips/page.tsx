import Link from "next/link";

const trips = [
  { id: "1", title: "오사카 여행" },
  { id: "2", title: "도쿄 여행" },
  { id: "3", title: "제주도 여행" },
];

export default function TripsPage() {
  return (
    <main>
      <h1>여행 리스트</h1>
      <ul>
        {
          trips?.map((trip) => (
            <li key={trip.id}>
                <Link href={`/trips/${trip.id}`}>{trip.title}</Link>
            </li>
          ))
        }
      </ul>
    </main>
  )
}