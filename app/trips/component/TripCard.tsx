import { Trip } from "@/types/trip";
import { Trash2 } from "lucide-react";
import Link from "next/link";

type TripCardProps = {
  trip: Trip;
  onDelete?: (id: string) => void;
};

export default function TripCard({ trip, onDelete }: TripCardProps) {
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();
    if (confirm("정말 이 여행 계획을 삭제할까요?")) {
      onDelete?.(trip.id);
    }
  };

  return (
    <Link href={`/trips/${trip.id}`} className="block group relative">
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

        <button
          onClick={handleDelete}
          className="
            absolute top-4 right-4 z-30
            p-2.5 bg-white/70 backdrop-blur-md
            text-slate-500 hover:text-red-500 hover:bg-white
            rounded-full shadow-sm border border-white/50
            transition-all duration-200
            active:scale-90
          "
        >
          <Trash2 size={18} strokeWidth={2.5} />
        </button>

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

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        </div>

  
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-700 leading-tight">
            {trip.title}
          </h3>

          <p className="mt-4 text-base font-medium text-emerald-600">
            {trip.country}
          </p>

          <p className="mt-1 text-sm text-slate-400">
            {trip.startDate} ~ {trip.endDate}
          </p>
        </div>
      </article>
    </Link>
  );
}