"use client";
import TripCard from "./_component/TripCard";
import HeroBanner from "@/components/layout/HeroBanner";
import { useRouter } from "next/navigation";
import { PlusIcon } from "lucide-react";
import { useTripStore } from "@/store/tripStore";

export default function TripsPage() {
  const router = useRouter();
  const trips = useTripStore((state) => state.trips);
  const deleteTrip = useTripStore((state) => state.deleteTrip);

  const handleDelete = (id: string) => {
    deleteTrip(id);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f3]">
      <div>
        <HeroBanner cityCount={trips.length} momentCount={0} />
      </div>

      <div className="max-w-330 mx-auto px-6 md:px-12 py-5 md:py-5">
        <div className="flex items-center justify-between mb-5 md:mb-5">
          <div className="flex items-center gap-4">
            <span className="block w-8 h-0.5 bg-[#1a1a1a]" />
            <span className="font-mono text-[10px] tracking-[0.22em] text-[#1a1a1a] uppercase">
              Recent Entries
            </span>
          </div>

          <button
            className="
            flex items-center gap-2.5
            bg-[#f0913a] hover:bg-[#e07828] active:scale-[0.98]
            text-white font-sans font-bold text-sm md:text-base
            px-3 md:px-3 py-3 md:py-2
            transition-all duration-200 cursor-pointer
          "
            onClick={() => router.push("/create")}
          >
            새 여행 추가
            <PlusIcon width={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} onDelete={handleDelete} />
          ))}
        </div>

        {trips.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#ccc] flex items-center justify-center mb-6">
              <PlusIcon color="#ccc" width={24} />
            </div>
            <p className="font-sans text-[#aaa] text-base">
              아직 기록된 여행이 없습니다
            </p>
            <p className="font-sans text-[#ccc] text-sm mt-1">
              새 여행 추가를 눌러 시작하세요
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
