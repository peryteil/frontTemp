import { NavBar } from "@/components/nav-bar"
import { Hero } from "@/components/hero"
import { PopularDestinations } from "@/components/popular-destinations"

export default function Home() {
  return (
    <main className="min-h-screen bg-traveling-bg">
      <NavBar />
      <Hero />
      <PopularDestinations />
    </main>
  )
}
