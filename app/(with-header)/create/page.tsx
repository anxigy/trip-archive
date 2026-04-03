"use client";
import BasicBanner from "@/components/layout/BasicBanner";
import { Trip, TripFormInput } from "@/types/trip";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import AddTripForm from "./_component/AddTripForm";
import { useTripStore } from "@/store/tripStore";

export default function CreatePage() {
  const router = useRouter();
  const addTrip = useTripStore((state) => state.addTrip);

  const handleSubmit = (addData: TripFormInput) => {
    if (
      !addData.title ||
      !addData.country ||
      !addData.startDate ||
      !addData.endDate
    ) {
      alert("제목, 나라, 시작일, 종료일은 필수 입력값입니다.");
      return;
    }

    const data: Trip = {
      ...addData,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    };

    addTrip(data);
    alert("추가 완료!");
    router.push(`/trips`);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f3]">
      <BasicBanner
        title="여행 추가"
        description="새로운 목적지와 당신의 순간을 기록하세요."
      />
      <AddTripForm onSubmit={handleSubmit} mode="create" />
    </div>
  );
}
