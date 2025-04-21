import Link from "next/link"

export function PopularDestinations() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {/* 도쿄 */}
          <Link
            href="/destination/도쿄"
            className="overflow-hidden rounded-3xl bg-white p-8 text-center transition-transform hover:scale-105"
          >
            <div className="mb-6 mx-auto h-32 w-32">
              <svg viewBox="0 0 120 120" className="h-full w-full">
                <path d="M60,100 L40,40 L80,40 Z" fill="#e8b4a9" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M50,40 L45,20 L75,20 L70,40" fill="#e8b4a9" stroke="#2d3436" strokeWidth="1.5" />
                <line x1="60" y1="20" x2="60" y2="10" stroke="#2d3436" strokeWidth="1.5" />
                <rect x="30" y="80" width="20" height="20" fill="#8ca896" stroke="#2d3436" strokeWidth="1.5" />
                <rect x="35" y="85" width="10" height="10" fill="white" stroke="#2d3436" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-traveling-text">도쿄</h3>
          </Link>

          {/* 파리 */}
          <Link
            href="/destination/파리"
            className="overflow-hidden rounded-3xl bg-[#fae3d9] p-8 text-center transition-transform hover:scale-105"
          >
            <div className="mb-6 mx-auto h-32 w-32">
              <svg viewBox="0 0 120 120" className="h-full w-full">
                <path d="M60,100 L30,40 L90,40 Z" fill="#e8b4a9" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M40,40 L35,25 L85,25 L80,40" fill="#e8b4a9" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M45,25 L40,10 L80,10 L75,25" fill="#e8b4a9" stroke="#2d3436" strokeWidth="1.5" />
                <line x1="60" y1="10" x2="60" y2="5" stroke="#2d3436" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-traveling-text">파리</h3>
          </Link>

          {/* 로마 */}
          <Link
            href="/destination/로마"
            className="overflow-hidden rounded-3xl bg-white p-8 text-center transition-transform hover:scale-105"
          >
            <div className="mb-6 mx-auto h-32 w-32">
              <svg viewBox="0 0 120 120" className="h-full w-full">
                <path d="M20,100 L20,60 L100,60 L100,100" fill="none" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M30,60 L30,40 L90,40 L90,60" fill="none" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M40,100 L40,60" stroke="#2d3436" strokeWidth="1" />
                <path d="M60,100 L60,60" stroke="#2d3436" strokeWidth="1" />
                <path d="M80,100 L80,60" stroke="#2d3436" strokeWidth="1" />
                <path d="M30,80 L90,80" stroke="#2d3436" strokeWidth="1" />
                <path d="M40,40 Q60,20 80,40" fill="none" stroke="#2d3436" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-traveling-text">로마</h3>
          </Link>

          {/* 방콕 */}
          <Link
            href="/destination/방콕"
            className="overflow-hidden rounded-3xl bg-[#e8f0e6] p-8 text-center transition-transform hover:scale-105"
          >
            <div className="mb-6 mx-auto h-32 w-32">
              <svg viewBox="0 0 120 120" className="h-full w-full">
                <path d="M60,100 L30,60 L90,60 Z" fill="none" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M60,60 L40,40 L80,40 Z" fill="none" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M60,40 L50,20 L70,20 Z" fill="none" stroke="#2d3436" strokeWidth="1.5" />
                <rect x="55" y="10" width="10" height="10" stroke="#2d3436" strokeWidth="1.5" fill="none" />
                <rect x="50" y="70" width="20" height="30" stroke="#2d3436" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-traveling-text">방콕</h3>
          </Link>
        </div>
      </div>
    </section>
  )
}
