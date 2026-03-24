import Link from "next/link";

export default function Header () {
    return (
        <header className="w-full h-16 flex items-center px-6 bg-[#264653] text-[#FFF] sticky top-0">
            <div className="flex-1">
                <Link href={'/'}>Trip Archive</Link>
            </div>
            <div className="flex-1 flex justify-end">
                <ul className="flex gap-8">
                    <li className="cursor-pointer">
                         <Link href={`/trips`}>MY LIST</Link>
                    </li>
                   <li className="cursor-pointer">
                         <Link href={`/create`}>CREATE</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}