import { Trip } from "@/types/trip";
import Link from "next/link";


type TripCardProps = {
  trip: Trip;
};

export default function TripCard({ trip }: TripCardProps) {
  return (
    <Link href={`/trips/${trip.id}`} className="block">
      <article className="
        aspect-3/4
        w-55
        rounded-xl
        bg-sky-50
        p-4
        shadow-lg
        hover:-translate-y-1
        transition
        flex
        items-end
        ">
        <div className="flex flex-col">
            <h3 className="text-2xl black-han-sans">{trip.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{trip.country}</p>
            <p className="mt-1 text-sm text-gray-500">{trip.startDate} ~ {trip.endDate}</p>
        </div>
      </article>
    </Link>
  );
}