"use client"

import { NavBar } from "@/components/nav-bar"
import { TripEditForm } from "@/components/trip-edit-form"

export default function TripEditPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-[#e8f4fc]">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold text-[#1e3a8a]">여행 정보 수정</h1>
        <TripEditForm tripId={params.id} />
      </div>
    </main>
  )
}
