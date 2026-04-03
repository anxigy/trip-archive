"use client";
import BasicBanner from "@/components/layout/BasicBanner";
import AddTripForm from "../../create/_component/AddTripForm";
import { Trip, TripFormInput } from "@/types/trip";
import { use } from "react";
import { useRouter } from "next/navigation";
import { useTripStore } from "@/store/tripStore";

export default function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const trips = useTripStore((state) => state.trips);
  const updateTrip = useTripStore((state) => state.updateTrip);

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

    updateTrip(editData as Trip);
    alert("수정 완료!");
    router.push(`/trips`);
  };

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
