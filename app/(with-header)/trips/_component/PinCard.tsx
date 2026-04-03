"use client";

import { Pin } from "@/types/trip";

interface PinCardProps {
  pin: Pin;
  onDelete?: (id: number) => void;
}

export default function PinCard({ pin, onDelete }: PinCardProps) {
  return (
    <div className="group bg-white border border-[#e8f0f3] hover:border-[#1eb8a0]/40 hover:shadow-md transition-all duration-200 p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        {/* icon circle */}
        {/* <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: col.badge, color: col.icon }}
        >
          {CATEGORY_ICONS[pin.category]}
        </div> */}
        {/* badge */}
        <span
          className="font-mono text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 flex-shrink-0"
          // style={{ background: col.badge, color: col.badgeText }}
        >
          {pin.category}
        </span>
      </div>

      {/* name */}
      <h4 className="font-sans font-black text-[#1a2a2a] text-lg leading-tight">
        {pin.name}
      </h4>

      {/* description */}
      {pin.description && (
        <p className="font-sans text-[#6a8a9a] text-sm leading-relaxed line-clamp-3">
          {pin.description}
        </p>
      )}

      {/* delete — hover only */}
      {onDelete && (
        <div className="mt-auto pt-3 border-t border-[#f0f4f6] flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onDelete(pin.id)}
            className="font-mono text-[10px] tracking-wide text-[#cc4444] hover:text-[#aa2222] flex items-center gap-1 transition-colors"
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M1.5 1.5l8 8M9.5 1.5l-8 8"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            삭제
          </button>
        </div>
      )}
    </div>
  );
}
