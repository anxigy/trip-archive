"use client";
import BasicBanner from "@/components/layout/BasicBanner";
import { Calendar1Icon, EarthIcon, PinIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import { use } from "react";
import SectionHeader from "../../create/_component/SectionHeader";
import PinCard from "../_component/PinCard";
import { useTripStore } from "@/store/tripStore";

export default function TripDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const trips = useTripStore((state) => state.trips);
  const trip = trips.find((t) => String(t.id) === id);

  return (
    <div className="min-h-screen bg-[#f5f5f3]">
      <BasicBanner
        title={trip ? trip.title : "불러오는 중..."}
        description={""}
      />
      <div className="max-w-300 mx-auto px-6 md:px-16 py-16">
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{
            height: "clamp(260px, 38vw, 460px)",
          }}
        >
          <Image
            src="/images/background.jpg"
            alt={trip?.title ?? "여행 배경 이미지"}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1024px"
            className="object-cover"
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 px-2">
          <div className="flex items-center gap-2 bg-white border border-[#e8f0f3] px-4 py-2.5 rounded-full shadow-sm">
            <EarthIcon color="#1eb8a0" />
            <span className="font-sans text-[#1a2a2a] text-sm font-medium">
              {trip?.country}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-[#e8f0f3] px-4 py-2.5 rounded-full shadow-sm">
            <Calendar1Icon color="#1eb8a0" />
            <span className="font-sans text-[#1a2a2a] text-sm">
              {`${trip?.startDate} ~ ${trip?.endDate}`}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-[#e8f0f3] px-4 py-2.5 rounded-full shadow-sm">
            <PinIcon color="#f0913a" />
            <span className="font-mono text-[#f0913a] text-xs font-medium tracking-wide">
              {trip?.pins?.length ?? 0} pins
            </span>
          </div>
        </div>

        {trip?.summary && (
          <div className="mt-5 flex px-2">
            <div className="bg-white shadow-md border border-[#e8f0f3] rounded-xl p-6 max-w-md w-full">
              <div className="text-[#f0913a] text-2xl leading-none mb-3 select-none">
                &ldquo;
              </div>
              <p className="font-sans font-bold text-[#1a2a2a] text-base md:text-lg leading-snug mb-3">
                {trip?.summary}
              </p>
              <div className="flex items-center gap-3">
                <span className="block w-5 h-[1.5px] bg-[#c5d5dd]" />
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#8a9eaa] uppercase">
                  한줄평 요약
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="sticky top-0 z-30 w-full h-0.5 bg-[#e8f0f3] max-w-300 mx-auto">
        <div className="h-full bg-linear-to-r from-[#1eb8a0] to-[#5dd5c0] w-full" />
      </div>

      <div className="max-w-300 mx-auto px-6 md:px-16 py-16 md:py-24 space-y-28">
        <section>
          <div className="flex items-start justify-between mb-2">
            <SectionHeader number="01" title="여행 장소" />
            <button
              // onClick={() => setPinModalOpen(true)}
              className="flex items-center gap-2 bg-[#f0913a] hover:bg-[#e07828] active:scale-[0.98] text-white font-sans font-bold text-sm px-5 py-3 transition-all duration-200 flex-shrink-0 ml-4 mt-1"
            >
              <PlusIcon color="#fff" />핀 추가
            </button>
          </div>
          <p className="font-sans text-[#8a9eaa] text-sm mb-8">
            {trip?.country} 여행에서 방문한 주요 장소들입니다.
          </p>

          {/* Google Map */}
          {/* <TripMap tripId={id} pins={[]} /> */}

          {trip?.pins && trip.pins.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {trip?.pins?.map((pin) => (
                <PinCard key={pin.id} pin={pin} onDelete={() => {}} />
              ))}
            </div>
          )}
        </section>

        <section>
          <SectionHeader number="02" title="여행 기록" />
          <div className="mt-8 space-y-7">
            {trip?.memo?.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="font-sans text-[#2a3a44] text-base md:text-lg leading-loose tracking-wide"
              >
                {para}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
