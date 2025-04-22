import { NavBar } from "@/components/nav-bar"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-traveling-bg">
      <NavBar />
      <div className="container mx-auto px-4 py-12">
        <LoginForm />
      </div>
    </main>
  )
}
