"use client";

interface HeroBannerProps {
  cityCount: number;
  momentCount: number;
}

export default function HeroBanner({
  cityCount,
  momentCount,
}: HeroBannerProps) {
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

      <div
        className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden"
        style={{ paddingLeft: "0" }}
      >
        <span
          className="font-bebas text-white/10 whitespace-nowrap text-center w-full"
          style={{
            fontSize: "clamp(8rem, 18vw, 18rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginLeft: "-0.05em",
          }}
        >
          COLLECTION
        </span>
      </div>

      <div className="flex-1 relative z-10 flex items-end justify-between h-full px-8 md:px-12 pb-10 pt-8">
        <div>
          <h1
            className="font-sans font-black italic text-white leading-[0.92] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
          >
            여정의 기록들
          </h1>
          <p className="font-sans text-white/70 text-sm md:text-base mt-3 font-light">
            총{" "}
            <span className="text-white font-medium">{cityCount}개의 도시</span>
            ,{" "}
            <span className="text-white font-medium">
              {momentCount.toLocaleString()}개의 순간
            </span>
            이 기록되었습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
