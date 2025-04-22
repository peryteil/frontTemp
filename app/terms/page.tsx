import { NavBar } from "@/components/nav-bar"
import { TermsContent } from "@/components/terms-content"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-traveling-bg">
      <NavBar />
      <div className="container mx-auto px-4 py-12">
        <TermsContent />
      </div>
    </main>
  )
}
