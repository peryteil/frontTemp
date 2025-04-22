import { NavBar } from "@/components/nav-bar"
import { PrivacyContent } from "@/components/privacy-content"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-traveling-bg">
      <NavBar />
      <div className="container mx-auto px-4 py-12">
        <PrivacyContent />
      </div>
    </main>
  )
}
