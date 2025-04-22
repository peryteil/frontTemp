import { NavBar } from "@/components/nav-bar"
import { ForgotPasswordForm } from "@/components/forgot-password-form"

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-traveling-bg">
      <NavBar />
      <div className="container mx-auto px-4 py-12">
        <ForgotPasswordForm />
      </div>
    </main>
  )
}
