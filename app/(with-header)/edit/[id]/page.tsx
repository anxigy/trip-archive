"use client";
import BasicBanner from "@/components/layout/BasicBanner";
import AddTripForm from "../../create/_component/AddTripForm";
import { Trip, TripFormInput } from "@/types/trip";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [trips, setTrips] = useState<Trip[]>([]);
  const handleSubmit = (editData: TripFormInput) => {
    if (
      !editData.title ||
      !editData.country ||
      !editData.startDate ||
      !editData.endDate
    ) {
      alert("제목, 나라, 시작일, 종료일은 필수 입력값입니다.");
      return;
    }

    const data = trips?.filter((f) => f.id !== id);
    const nextTrips = Array.isArray(data) ? [...data, editData] : [editData];

    window.localStorage.setItem("trips", JSON.stringify(nextTrips));
    alert("수정 완료!");
    router.push(`/trips`);
  };

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
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

  return (
    <div className="min-h-screen bg-[#f5f5f3]">
      <BasicBanner title="여행 수정" description="당신의 순간을 수정하세요." />
      <AddTripForm
        onSubmit={handleSubmit}
        mode="edit"
        initialValues={trips?.filter((f) => f.id == id)[0]}
      />
    </div>
  );
}
