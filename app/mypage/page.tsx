import { NavBar } from "@/components/nav-bar"
import { MyPageContent } from "@/components/mypage-content"

export default function MyPage() {
  return (
    <main className="min-h-screen bg-[#e8f4fc]">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold text-[#1e3a8a]">마이페이지</h1>
        <MyPageContent />
      </div>
    </main>
  )
}
