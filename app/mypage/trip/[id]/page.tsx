import { NavBar } from "@/components/nav-bar"
import { TripDetail } from "@/components/trip-detail"

export default function TripDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-[#e8f4fc]">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold text-[#1e3a8a]">여행 상세 정보</h1>
        <TripDetail tripId={params.id} />
      </div>
    </main>
  )
}
