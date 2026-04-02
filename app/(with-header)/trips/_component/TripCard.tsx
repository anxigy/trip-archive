"use client";
import { Trip } from "@/types/trip";
import { ArrowRight, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type TripCardProps = {
  trip: Trip;
  onDelete?: (id: string) => void;
};

export default function TripCard({ trip, onDelete }: TripCardProps) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm("정말 이 여행 계획을 삭제할까요?")) {
      onDelete?.(trip.id);
    }
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/edit/${trip.id}`);
  };

  return (
    <Link
      href={`/trips/${trip.id}`}
      className="block group relative border border-[#ddd]"
    >
      <article
        className="group cursor-pointer flex flex-col"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          onClick={handleDelete}
          className="
              absolute top-4 right-4 z-30
              p-2.5 bg-white/70 backdrop-blur-md
              text-slate-500 hover:text-[#1eb8a0] hover:bg-white
              rounded-full shadow-sm border border-white/50
              transition-all duration-200
              active:scale-90
            "
        >
          <Trash2 size={18} strokeWidth={2.5} />
        </button>

        <button
          onClick={handleEdit}
          className="
              absolute top-4 right-17 z-30
              p-2.5 bg-white/70 backdrop-blur-md
              text-slate-500 hover:text-[#1eb8a0] hover:bg-white
              rounded-full shadow-sm border border-white/50
              transition-all duration-200
              active:scale-90
            "
        >
          <Pencil size={18} strokeWidth={2.5} />
        </button>

        <div
          className="relative overflow-hidden"
          style={{
            height: "220px",
          }}
        >
          <Image
            src="/images/background.jpg"
            alt={trip.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="
          object-cover
          transition-transform duration-500
          group-hover:scale-105
        "
          />

          <div
            className={`
            absolute inset-0 bg-[#1eb8a0] transition-opacity duration-300
            ${hovered ? "opacity-10" : "opacity-0"}
          `}
          />

          <div className="absolute top-4 left-4">
            <span className="bg-[#1eb8a0] text-white font-mono text-[9px] tracking-[0.18em] uppercase px-2.5 py-1.5">
              {trip.country}
            </span>
          </div>
        </div>
        <div className="pt-5 pb-6 px-6 flex flex-col flex-1">
          <p className="font-mono text-[11px] text-[#888] tracking-wide mb-2">
            {`${trip.startDate} ~ ${trip.endDate}`}
          </p>

          <h3
            className={`
            font-sans font-black text-[#1a1a1a] text-xl md:text-2xl leading-tight
            transition-colors duration-200
            ${hovered ? "text-[#1eb8a0]" : ""}
          `}
          >
            {trip.title}
          </h3>
          <div className="mt-auto pt-5 flex items-end justify-between">
            <span
              className={`
                
           w-8 h-8 flex items-center justify-center border border-[#ddd]
              transition-all duration-200
              ${hovered ? "border-[#1eb8a0] bg-[#1eb8a0]" : ""}
              rounded-full
        `}
            >
              <ArrowRight color={hovered ? "#fff" : "#888"} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
