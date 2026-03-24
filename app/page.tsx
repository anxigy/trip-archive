import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>홈</h1>
      <Link href={'/trips'}>여행 리스트</Link>
    </main>
  )
}