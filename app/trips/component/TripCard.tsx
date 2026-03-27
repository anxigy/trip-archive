import { Trip } from "@/types/trip";
import Link from "next/link";

type TripCardProps = {
  trip: Trip;
};

export default function TripCard({ trip }: TripCardProps) {
  return (
    <Link href={`/trips/${trip.id}`} className="block group">
      <article
        className="
          w-full overflow-hidden rounded-[28px]
          border border-emerald-100/80 bg-white
          shadow-[0_10px_30px_rgba(15,23,42,0.06)]
          transition-all duration-300
          group-hover:-translate-y-2
          group-hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]
        "
      >
        {/* 이미지 영역 */}
        <div className="relative h-56 overflow-hidden">
          <img
            src="/images/background.jpg"
            alt={trip.title}
            className="
              h-full w-full object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />


        </div>

        {/* 텍스트 영역 */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-700 leading-tight">
            {trip.title}
          </h3>

          {/* 위치 */}
          <p className="mt-4 text-base font-medium text-emerald-600">
            {trip.country}
          </p>

          {/* 날짜 */}
          <p className="mt-1 text-sm text-slate-400">
            {trip.startDate} ~ {trip.endDate}
          </p>
        </div>
      </article>
    </Link>
  );
}