import Link from "next/link";

export default function Header () {
    return (
        <header className="w-full h-16 flex items-center px-6 bg-[#e9c46a] text-[#264653] sticky top-0">
            <div className="flex-1">
                <Link href={'/'}>Trip Archive</Link>
            </div>
            <div className="flex-1 flex justify-end">
                <ul className="flex gap-8">
                    <li className="cursor-pointer">
                         <Link href={`/trips`}>여행 목록</Link>
                    </li>
                   <li className="cursor-pointer">
                         <Link href={`/create`}>추가하기</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}