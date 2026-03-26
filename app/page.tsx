import { ImageWithFallback } from "@/components/ImageWithFallback";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100dvh-4rem)] relative overflow-hidden">
      
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/images/background.jpg"
          alt="여행 배경"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 min-h-[calc(100dvh-4rem)] flex flex-col items-center justify-center px-8">

        
        <h1 className="text-9xl black-han-sans md:text-8xl font-bold text-white mb-4  mt-9 text-center tracking-wide">
          TRIP ARCHIVE
        </h1>
        

        <p className="text-xl text-white/90 mb-12 text-center max-w-2xl">
          여행의 순간을 기록하는 개인 아카이브
        </p>
        

        <Link 
          href="/trips" 
          className="group flex items-center gap-3 bg-[#e76f51] hover:bg-[#f4a261] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 shadow-lg"
        >
          입장하기
        </Link>
        
        
      </div>
    </div>
  );
}