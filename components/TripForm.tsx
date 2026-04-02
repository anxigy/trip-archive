"use client"
import { Trip, TripFormInput } from "@/types/trip";
import { useState } from "react";

type TripFormProps = {
    initialValues?: Partial<Trip>; // 선택적 프로퍼티로 변경
    onSubmit: (values: TripFormInput) => void;
    submitLabel: string;
  };
  
  const defaultValues: TripFormInput = {
    title: "",
    country: "",
    startDate: "",
    endDate: "",
    imageUrl: "",
    summary: "",
    memo: "",
  };
export default function TripForm({ initialValues, onSubmit, submitLabel }: TripFormProps) {
    const [state, setState] = useState<TripFormInput>(() => ({
        ...defaultValues,
        ...initialValues, 
      }));

      const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
    
        setState((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleAreaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        const { name, value } = e.target;
    
        setState((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = () => {
        onSubmit(state); 
      };

    return (
        <div>
             <ul className="space-y-4">
        <li className="flex flex-col gap-1">
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            name="title"
            className="border rounded px-3 py-2"
            onChange={handleChange}
            value={state.title ?? ""}
          />
        </li>

        <li className="flex flex-col gap-1">
          <label htmlFor="country">나라</label>
          <input
            id="country"
            type="text"
            name="country"
            className="border rounded px-3 py-2"
            onChange={handleChange}
            value={state.country ?? ""}
          />
        </li>

        <li className="flex flex-col gap-1">
          <label htmlFor="startDate">시작일</label>
          <input
            id="startDate"
            type="date"
            name="startDate"
            className="border rounded px-3 py-2"
            onChange={handleChange}
            value={state.startDate ?? ""}
          />
        </li>

        <li className="flex flex-col gap-1">
          <label htmlFor="endDate">종료일</label>
          <input
            id="endDate"
            type="date"
            name="endDate"
            className="border rounded px-3 py-2"
            onChange={handleChange}
            value={state.endDate ?? ""}
          />
        </li>

        <li className="flex flex-col gap-1">
          <label htmlFor="imageUrl">이미지 URL</label>
          <input
            id="imageUrl"
            type="text"
            name="imageUrl"
            className="border rounded px-3 py-2"
            onChange={handleChange}
            value={state.imageUrl ?? ""}
          />
        </li>

        <li className="flex flex-col gap-1">
          <label htmlFor="summary">한줄평</label>
          <input
            id="summary"
            type="text"
            name="summary"
            className="border rounded px-3 py-2"
            onChange={handleChange}
            value={state.summary ?? ""}
          />
        </li>

        <li className="flex flex-col gap-1">
          <label htmlFor="memo">메모</label>
          <textarea
            id="memo"
            name="memo"
            className="border rounded px-3 py-2 min-h-[120px]"
            onChange={handleAreaChange}
            value={state.memo ?? ""}
          />
        </li>
      </ul>

      <button
        type="button"
        onClick={handleSubmit}
        className="mt-6 rounded bg-amber-500 px-4 py-2 text-white"
      >
        {submitLabel}
      </button>
        </div>
    )
}