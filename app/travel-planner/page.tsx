import { NavBar } from "@/components/nav-bar"
import { TravelPlannerContent } from "@/components/travel-planner-content"

export default function TravelPlannerPage() {
  return (
    <main className="min-h-screen bg-[#e8f4fc]">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold text-[#1e3a8a]">여행 만들기</h1>
        <TravelPlannerContent />
      </div>
    </main>
  )
}
