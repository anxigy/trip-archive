"use client";
import TripCard from "./_component/TripCard";
import { useEffect, useState } from "react";
import { Trip } from "@/types/trip";
import HeroBanner from "@/components/layout/HeroBanner";
import { useRouter } from "next/navigation";
import { PlusIcon } from "lucide-react";

export default function TripsPage() {
  const router = useRouter();
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isMount, setIsMount] = useState(false);
  const handleDelete = (id: string) => {
    const data = trips.filter((f) => f.id !== id);
    setTrips(data);
    window.localStorage.setItem("trips", JSON.stringify(data));
  };

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsMount(true);
      const storage = window.localStorage.getItem("trips");
      if (storage) {
        try {
          const parsedData = JSON.parse(storage);
          setTrips(parsedData);
        } catch (e) {
          console.error("Parsing error", e);
        }
      }
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  if (!isMount) {
    return null; // 또는 <div className="p-5">로딩 중...</div>
  }

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
