"use client";

import { ImageWithFallback } from "@/components/ImageWithFallback";
import EnterButton from "@/components/layout/EnterButton";
import GridBackground from "@/components/layout/GridBackground";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
  
    const t = setTimeout(() => setVisible(true), 100);
  
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(t);
    };
  }, []);

  if (!mounted) return null;
  return (
    <>
      <main
        className="
          w-full
          lg:h-screen lg:overflow-hidden lg:flex lg:flex-row
        "
      >
        <section
          className="
            relative
            w-full h-[100svh]
            lg:flex-[2] lg:h-full lg:min-h-0
            bg-[#264653]
            flex flex-col
            overflow-hidden
          "
        >
          <GridBackground />

          {/* top bar */}
          <div className="relative z-10 flex items-start justify-between px-6 md:px-10 pt-6 md:pt-8 pb-0">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bebas text-white text-2xl md:text-3xl tracking-widest">
                  ARCHIVE.
                </span>
              </div>
              <div className="mt-1 space-y-0.5">
                <p className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] text-white/45 uppercase">
                  Personal Records
                </p>
                <div className="flex items-center gap-2">
                  <span className="block w-6 h-[1.5px] bg-[#F4A261]" />
                  <p className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] text-[#F4A261] uppercase font-medium">
                    The Journey Begins
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-white/30 px-3 py-1.5 font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-white/60 uppercase">
              Vol. 01 — Edition
            </div>
          </div>

          {/* hero title */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10">
            <div
              className={`transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <h1
                className="
                  font-sans font-black text-white
                  leading-[1.1] tracking-[-0.02em]
                  text-[clamp(3.6rem,8vw,8.5rem)]
                "
              >
                여행의{" "}
                <span className="inline-block relative">
                  순간을
                </span>
                <br />
                기록하는
                <br />
                <span className="inline-block relative">
                  개인 아카이브
                  <span className="absolute bottom-0 -right-5 w-5 h-5 md:w-4 md:h-4 rounded-full bg-[#f0913a]" />
                </span>
              </h1>
            </div>
            <div
              className="hidden lg:flex absolute right-6 bottom-28 items-center gap-3"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              <span className="block w-[1px] h-12 bg-white/20" />
              <span className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">
                Discover
              </span>
            </div>
          </div>

         
        </section>

        <section
          className="
            relative
            w-full h-[100svh]
            lg:flex-[1] lg:h-full lg:min-h-0
            bg-[#2A9D8F]
            flex flex-col
            px-6 md:px-10 py-8 md:py-10
            overflow-hidden
            gap-5 md:gap-6
          "
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div
            className={`relative z-10 flex-shrink-0 
              w-[85%] max-w-[500px]
              aspect-[4/3] overflow-hidden 
              mx-auto
              transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <ImageWithFallback
              src="/images/background.jpg"
              alt="여행 배경"
              className="w-full h-full object-cover"
            />
          </div>

     
          <div
            className={`relative z-10 flex-1 flex flex-col justify-between transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <span className="font-mono text-[13px] font-medium text-[#F4A261] tracking-widest">01</span>
                <span className="font-mono text-[13px] text-[#F4A261]">/</span>
              </div>
              <h2 className="font-sans font-black text-white text-2xl md:text-3xl lg:text-2xl xl:text-3xl leading-tight mb-3 md:mb-4">
                모든 여정은<br />하나의 이야기가 됩니다.
              </h2>
              <p className="font-sans text-white text-sm md:text-base lg:text-sm xl:text-base leading-relaxed">
                당신의 발자취가 머문 모든 곳, 그곳에서 느꼈던 바람의 온도와
                거리의 향기를 영원히 보존하세요. 흩어지기 쉬운 기억들을 모아
                오직 당신만의 시선으로 완성되는 견고한 아카이브를 구축합니다.
              </p>
            </div>


            <div
              className={`mt-6 transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <EnterButton onClick={() => router.push('/trips')}/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}