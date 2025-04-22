import Link from "next/link"

export function NavBar() {
  return (
    <header className="w-full bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-traveling-pink">트래블링</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-16">
            <li>
              <Link href="/travel-planner" className="text-lg font-medium text-gray-700 hover:text-traveling-purple">
                여행만들기
              </Link>
            </li>
            <li>
              <Link href="/community" className="text-lg font-medium text-gray-700 hover:text-traveling-purple">
                커뮤니티
              </Link>
            </li>
            <li>
              <Link href="/flight-search" className="text-lg font-medium text-gray-700 hover:text-traveling-purple">
                항공권
              </Link>
            </li>
            <li>
              <Link href="/mypage" className="text-lg font-medium text-gray-700 hover:text-traveling-purple">
                마이페이지
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-6">
          <Link href="/login" className="text-traveling-purple hover:text-traveling-text">
            로그인
          </Link>
          <Link href="/signup" className="login-button">
            회원가입
          </Link>
        </div>
      </div>
    </header>
  )
}
