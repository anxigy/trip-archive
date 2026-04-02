"use client";

import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import ImageUploader from "./ImageUploader";
import { Trip, TripFormInput } from "@/types/trip";
import { ArrowRightIcon, EarthIcon, SquarePenIcon } from "lucide-react";

type TripFormProps = {
  initialValues?: Partial<Trip>;
  onSubmit: (values: TripFormInput) => void;
  mode: "create" | "edit";
};

const defaultValues: TripFormInput = {
  title: "",
  country: "",
  startDate: "",
  endDate: "",
  coverImage: null,
  summary: "",
  memo: "",
};

const SUMMARY_MAX = 50;

export default function AddTripForm({
  initialValues,
  onSubmit,
  mode,
}: TripFormProps) {
  const [form, setForm] = useState<TripFormInput>(() => ({
    ...defaultValues,
    ...initialValues,
  }));

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof TripFormInput, string>>
  >({});

  const set = <K extends keyof TripFormInput>(key: K, val: TripFormInput[K]) =>
    setForm((p) => ({ ...p, [key]: val }));

  const validate = () => {
    const e: typeof errors = {};
    if (!form.title.trim()) e.title = "여행 제목을 입력해주세요";
    if (!form.country.trim()) e.country = "나라/지역을 입력해주세요";
    if (!form.startDate) e.startDate = "시작일을 선택해주세요";
    if (!form.endDate) e.endDate = "종료일을 선택해주세요";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAreaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // console.log(form);
    if (!validate()) return;
    setSubmitting(true);
    onSubmit(form);
  };

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (mode === "edit" && initialValues) {
        setForm(initialValues as TripFormInput);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [initialValues, mode]);
  return (
    <div className="relative">
      <div className="relative z-10 max-w-250 mx-auto px-6 md:px-16 py-14 md:py-20 space-y-20  pb-40">
        <section className="bg-white p-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]rounded-xl">
          <SectionHeader number="01" title="기본 정보" badge="REQUIRED" />
          <div className="mb-10 md:mb-14">
            <label className="block font-sans text-xs text-[#8a9eaa] mb-3 tracking-wide">
              여행 제목
            </label>
            <div className="relative">
              <input
                type="text"
                value={form.title}
                name="title"
                onChange={handleChange}
                placeholder="예: 토스카나의 붉은 노을과 사이프러스 나무"
                className={`
                  w-full bg-transparent border-b-2 pb-3
                  font-sans font-black text-[clamp(1.5rem,3.5vw,2.8rem)]
                  text-[#1a2a2a] placeholder:text-[#c5d5dd]
                  outline-none transition-colors duration-200
                  ${
                    errors.title
                      ? "border-red-300"
                      : "border-[#d5e5ec] focus:border-[#1eb8a0]"
                  }
                  leading-tight tracking-tight
                `}
              />
            </div>
            {errors.title && (
              <p className="mt-2 font-mono text-[11px] text-red-400">
                {errors.title}
              </p>
            )}
          </div>

          {/* 국가 / 시작일 / 종료일 */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4 md:gap-6">
            {/* 나라 / 지역 */}
            <div>
              <label className="block font-sans text-xs text-[#8a9eaa] mb-2 tracking-wide">
                나라 / 지역
              </label>
              <div
                className={`
                  flex items-center gap-3 rounded-xl border bg-[#f4f8fa]
                  px-4 py-3.5 transition-colors duration-200
                  ${
                    errors.country
                      ? "border-red-200"
                      : "border-[#e0ecf0] focus-within:border-[#1eb8a0] focus-within:bg-white"
                  }
                `}
              >
                <EarthIcon color="#aabbc4" width={16} className="shrink-0" />

                <input
                  type="text"
                  value={form.country}
                  name="country"
                  onChange={handleChange}
                  placeholder="나라 이름을 입력하세요"
                  className="flex-1 bg-transparent outline-none font-sans text-[15px] text-[#1a2a2a] placeholder:text-[#aabbc4]"
                />
              </div>
              {errors.country && (
                <p className="mt-1.5 font-mono text-[11px] text-red-400">
                  {errors.country}
                </p>
              )}
            </div>

            {/* 시작일 */}
            <div>
              <label className="block font-sans text-xs text-[#8a9eaa] mb-2 tracking-wide">
                시작일
              </label>
              <div
                className={`
                  flex items-center rounded-xl border bg-[#f4f8fa]
                  px-4 py-3.5 transition-colors duration-200
                  ${
                    errors.startDate
                      ? "border-red-200"
                      : "border-[#e0ecf0] focus-within:border-[#1eb8a0] focus-within:bg-white"
                  }
                `}
              >
                <input
                  type="date"
                  value={form.startDate}
                  name="startDate"
                  onChange={handleChange}
                  className="flex-1 bg-transparent outline-none font-mono text-[13px] text-[#3a4a55] w-full"
                />
              </div>
              {errors.startDate && (
                <p className="mt-1.5 font-mono text-[11px] text-red-400">
                  {errors.startDate}
                </p>
              )}
            </div>

            {/* 종료일 */}
            <div>
              <label className="block font-sans text-xs text-[#8a9eaa] mb-2 tracking-wide">
                종료일
              </label>
              <div
                className={`
                  flex items-center rounded-xl border bg-[#f4f8fa]
                  px-4 py-3.5 transition-colors duration-200
                  ${
                    errors.endDate
                      ? "border-red-200"
                      : "border-[#e0ecf0] focus-within:border-[#1eb8a0] focus-within:bg-white"
                  }
                `}
              >
                <input
                  type="date"
                  value={form.endDate}
                  name="endDate"
                  onChange={handleChange}
                  className="flex-1 bg-transparent outline-none font-mono text-[13px] text-[#3a4a55] w-full"
                />
              </div>
              {errors.endDate && (
                <p className="mt-1.5 font-mono text-[11px] text-red-400">
                  {errors.endDate}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ═══ 02 여행 커버 이미지 ═══ */}
        <section className="bg-white p-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]rounded-xl">
          <SectionHeader number="02" title="여행 커버 이미지" />
          <p className="font-sans text-[#8a9eaa] text-sm mb-6 -mt-4">
            목록에서 보여질 대표 이미지를 선택해주세요.
          </p>
          <ImageUploader
            value={form.coverImage ?? null}
            onChange={(f) => set("coverImage", f)}
          />
        </section>

        {/* ═══ 03 여행 기록 ═══ */}
        <section className="bg-white p-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]rounded-xl">
          <SectionHeader number="03" title="여행 기록" />

          {/* 한줄평 */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="font-sans text-xs text-[#8a9eaa] tracking-wide">
                한줄평
              </label>
              <span className="font-mono text-[10px] text-[#aabbc4]">
                최대 {SUMMARY_MAX}자
              </span>
            </div>
            <div className="relative flex items-start gap-3 rounded-xl border border-[#e0ecf0] bg-[#f4f8fa] px-4 py-3.5 focus-within:border-[#1eb8a0] focus-within:bg-white transition-colors duration-200">
              <SquarePenIcon color="#aabbc4" width={16} className="shrink-0" />
              <input
                type="text"
                value={form.summary}
                maxLength={SUMMARY_MAX}
                placeholder="이번 여행을 한 문장으로 요약한다면?"
                name="summary"
                onChange={handleChange}
                className="flex-1 bg-transparent outline-none font-sans text-[15px] text-[#1a2a2a] placeholder:text-[#aabbc4]"
              />
            </div>
          </div>

          {/* 메모 */}
          <div>
            <label className="block font-sans text-xs text-[#8a9eaa] mb-2 tracking-wide">
              메모
            </label>
            <textarea
              value={form.memo}
              onChange={handleAreaChange}
              name="memo"
              placeholder="기억에 남는 순간, 장소, 혹은 감정들을 자유롭게 기록해보세요..."
              rows={8}
              className="
                w-full rounded-xl border border-[#e0ecf0] bg-[#f4f8fa]
                px-4 py-4 font-sans text-[15px] text-[#1a2a2a]
                placeholder:text-[#aabbc4] outline-none resize-y
                focus:border-[#1eb8a0] focus:bg-white transition-colors duration-200
                leading-relaxed
              "
            />
          </div>
        </section>
      </div>

      {/* ── sticky submit button ── */}
      <div className="fixed bottom-0 right-0 z-50 p-6 md:p-10">
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className={`
            flex items-center gap-3
            bg-[#f0913a] hover:bg-[#e07828] active:scale-[0.98]
            text-white font-sans font-bold
            text-base md:text-lg
            px-7 md:px-10 py-4 md:py-5
            shadow-xl shadow-[#f0913a]/25
            transition-all duration-200
            ${submitting ? "opacity-70 cursor-not-allowed" : ""}
          `}
        >
          {submitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              저장 중...
            </>
          ) : (
            <>
              {mode == "create" ? "새 여행 추가하기" : "수정하기"}
              <ArrowRightIcon width={18} className="shrink-0" strokeWidth={2} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
