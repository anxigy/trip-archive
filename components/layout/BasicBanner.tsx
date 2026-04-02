"use client";

interface BasicBannerProps {
  title: string;
  description?: string;
}

export default function BasicBanner({ title, description }: BasicBannerProps) {
  return (
    <div
      className="flex items-end relative w-full bg-[#1eb8a0] overflow-hidden"
      style={{ minHeight: "260px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="flex-1 relative z-10 flex items-end justify-between h-full px-8 md:px-12 pb-10 pt-8">
        <div>
          <h1
            className="font-sans font-black italic text-white leading-[0.92] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
          >
            {title}
          </h1>
          <p className="font-sans text-white/70 text-sm md:text-base mt-3 font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
