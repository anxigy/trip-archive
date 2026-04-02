"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "ARCHIVE", href: "/archive" },
  { label: "TRIPS", href: "/trips" },
  { label: "SETTINGS", href: "/settings" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full flex items-center justify-between px-8 md:px-12 py-5 absolute z-50">
      <div>
        <Link href="/" className="block">
          <div className="flex items-center gap-1">
            <span className="font-bebas text-white text-2xl tracking-widest leading-none">
              ARCHIVE.
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f0913a] mb-0.5 shrink-0" />
          </div>
          <p className="font-mono text-[9px] tracking-[0.22em] text-white/45 uppercase mt-0.5">
            Personal Records / Trips
          </p>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200
                ${
                  isActive
                    ? "text-white border-b border-white pb-0.5"
                    : "text-white/50 hover:text-white/80"
                }
              `}
            >
              {item.label}
            </Link>
          );
        })}

        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/20 bg-[#2a5550] flex items-center justify-center flex-shrink-0 ml-2">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="7" r="3.5" fill="rgba(255,255,255,0.5)" />
            <path
              d="M2 16c0-3.866 3.134-7 7-7s7 3.134 7 7"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </nav>

      <button className="md:hidden flex flex-col gap-1.5 p-1">
        <span className="block w-5 h-[1.5px] bg-white/70" />
        <span className="block w-5 h-[1.5px] bg-white/70" />
        <span className="block w-3 h-[1.5px] bg-white/70" />
      </button>
    </header>
  );
}
