import { NavBar } from "@/components/nav-bar"
import { Hero } from "@/components/hero"
import { FeatureButtons } from "@/components/feature-buttons"
import { PopularDestinations } from "@/components/popular-destinations"

export default function Home() {
  return (
    <main className="min-h-screen bg-traveling-bg">
      <NavBar />
      <Hero />
      <FeatureButtons />
      <PopularDestinations />
    </main>
  )
}
