import { NavBar } from "@/components/nav-bar"
import { TokyoTravelTipsSimple } from "@/components/tokyo-travel-tips-simple"

export default function TokyoTravelTipsPage() {
  return (
    <main className="min-h-screen bg-[#e8f4fc]">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <TokyoTravelTipsSimple />
      </div>
    </main>
  )
}
