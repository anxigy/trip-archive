"use client";

import TripForm from "@/components/TripForm";
import { Trip, TripFormInput } from "@/types/trip";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreatePage() {
  const router = useRouter()
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isMount, setIsMount] = useState(false);


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




  const handleSubmit = (addData : TripFormInput) => {
    if (!addData.title || !addData.country || !addData.startDate || !addData.endDate) {
      alert("제목, 나라, 시작일, 종료일은 필수 입력값입니다.");
      return;
    }

    const data: Trip = {
      ...addData,
      id: uuidv4(),
      createdAt: new Date().toISOString()
    };

   const nextTrips = Array.isArray(trips) ? [...trips, data] : [data];

    window.localStorage.setItem("trips",JSON.stringify(nextTrips))
    alert('추가 완료!')
    router.push(`/trips`)
  };

  return (
    <main className="
        w-[25%]
        min-w-[400px]
        flex
        flex-col
        mx-auto
        p-5
      ">
      <h1 className="mb-6 text-2xl font-bold">여행 작성</h1>

      <TripForm onSubmit={handleSubmit} submitLabel="추가하기"/>
    </main>
  );
}