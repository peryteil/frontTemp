import Link from "next/link"

export function NavBar() {
  return (
    <header className="w-full bg-traveling-bg py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <svg viewBox="0 0 40 40" className="h-full w-full">
              <path
                d="M20,2 C12.268,2 6,8.268 6,16 C6,25 20,38 20,38 C20,38 34,25 34,16 C34,8.268 27.732,2 20,2 Z"
                fill="#8ca896"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-traveling-text">트래블링</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/flight-accommodation" className="text-lg font-medium text-traveling-text hover:opacity-70">
                항공/숙소
              </Link>
            </li>
            <li>
              <Link href="/travel-planner" className="text-lg font-medium text-traveling-text hover:opacity-70">
                여행만들기
              </Link>
            </li>
            <li>
              <Link href="/community" className="text-lg font-medium text-traveling-text hover:opacity-70">
                커뮤니티
              </Link>
            </li>
            <li>
              <Link href="/mypage" className="text-lg font-medium text-traveling-text hover:opacity-70">
                마이페이지
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
