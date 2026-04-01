"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface EnterButtonProps {
  onClick?: () => void;
}

export default function EnterButton({ onClick }: EnterButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        group relative w-full flex items-center justify-between
        bg-[#f0913a] hover:bg-[#e07828]
        px-6 py-5
        transition-all duration-300 ease-out
        cursor-pointer border-none outline-none
        overflow-hidden
      "
    >
      {/* ripple bg on hover */}
      <span
        className={`
          absolute inset-0 bg-[#c86820] transition-transform duration-500 ease-out origin-left
          ${hovered ? "scale-x-100" : "scale-x-0"}
        `}
        style={{ transformOrigin: "left" }}
      />

      <span className="relative font-sans font-black text-white text-2xl md:text-3xl tracking-tight z-10">
        입장하기
      </span>

      <span
        className={`
          relative z-10 flex items-center justify-center
          w-10 h-10 rounded-full border-2 border-white/60
          transition-transform duration-300
          ${hovered ? "translate-x-1" : "translate-x-0"}
        `}
      >
        <ArrowRight color="#fff"/>
      </span>
    </button>
  );
}
