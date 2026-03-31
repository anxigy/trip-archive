"use client"
import TripCard from "./component/TripCard";
import { useEffect, useState } from "react";
import { Trip } from "@/types/trip";

export default function TripsPage() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isMount, setIsMount] = useState(false);

  const handleDelete = (id:string) => {
    const data = trips.filter((f) => f.id!==id)
    setTrips(data)
    window.localStorage.setItem("trips",JSON.stringify(data))
  }

  useEffect(() => {
    setIsMount(true); 
    const storage = window.localStorage.getItem("trips");
    if (storage) {
      try {
        setTrips(JSON.parse(storage));
      } catch (e) {
        console.error("Parsing error", e);
      }
    }
  }, []);

  if (!isMount) {
    return null; // 또는 <div className="p-5">로딩 중...</div>
  }

  return (
    <main className="p-5">
      <h1 className="mb-6 text-5xl black-han-sans text-[#264653]">여행 목록</h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,220px))] gap-6 justify-start">
        {
          trips.length > 0 ? (
            trips?.map((trip) => (
              <TripCard key={trip.id} trip={trip} onDelete={handleDelete}/>
            ))
          ) : (
            <div>
              <p>여행을 기록해주세요 !</p>
            </div>
          )
        }
      </div>
    </main>
  );
}