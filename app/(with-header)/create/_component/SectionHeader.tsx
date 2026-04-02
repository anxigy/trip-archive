interface SectionHeaderProps {
  number: string;
  title: string;
  badge?: string;
}

export default function SectionHeader({ number, title, badge }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8 md:mb-10">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[#1eb8a0] text-xl md:text-2xl font-medium tracking-wide">
          {number}
        </span>
        <h2 className="font-sans font-black text-[#1a2a2a] text-xl md:text-2xl">
          {title}
        </h2>
      </div>
      {badge && (
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#aab] uppercase">
          {badge}
        </span>
      )}
    </div>
  );
}
