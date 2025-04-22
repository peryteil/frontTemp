import { NavBar } from "@/components/nav-bar"
import { TravelPlannerHome } from "@/components/travel-planner/travel-planner-home"

export default function TravelPlannerPage() {
  return (
    <main className="min-h-screen bg-traveling-bg">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold text-traveling-text">여행 만들기</h1>
        <TravelPlannerHome />
      </div>
    </main>
  )
}
