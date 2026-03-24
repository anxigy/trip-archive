export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main>
      <h1>여행 상세 페이지</h1>
      <p>여행 ID: {id}</p>
    </main>
  );
}