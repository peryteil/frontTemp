import Link from "next/link"

export function RecommendedDestinations() {
  const destinations = [
    {
      name: "도쿄",
      country: "일본",
      flag: "🇯🇵",
      color: "#e29c67",
    },
    {
      name: "파리",
      country: "프랑스",
      flag: "🇫🇷",
      color: "#8a9a7b",
    },
    {
      name: "로마",
      country: "이탈리아",
      flag: "🇮🇹",
      color: "#f0d9b5",
    },
    {
      name: "방콕",
      country: "태국",
      flag: "🇹🇭",
      color: "#e29c67",
    },
  ]

  return (
    <section className="bg-traveling-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex justify-center">
          <div className="relative h-64 w-full max-w-4xl">
            <svg viewBox="0 0 800 200" className="h-full w-full">
              {/* 도쿄 타워 */}
              <path d="M100,200 L130,200 L115,50 Z" fill="#e29c67" stroke="#4a3f35" strokeWidth="3" />
              <path d="M108,50 L122,50 L115,20 Z" fill="#e29c67" stroke="#4a3f35" strokeWidth="2" />
              <rect x="113" y="10" width="4" height="10" fill="#e29c67" stroke="#4a3f35" strokeWidth="1" />

              {/* 에펠탑 */}
              <path d="M300,200 L270,80 L330,80 Z" fill="#8a9a7b" stroke="#4a3f35" strokeWidth="3" />
              <path d="M285,80 L275,50 L325,50 L315,80 Z" fill="#8a9a7b" stroke="#4a3f35" strokeWidth="2" />
              <path d="M290,50 L280,30 L320,30 L310,50 Z" fill="#8a9a7b" stroke="#4a3f35" strokeWidth="2" />
              <rect x="298" y="10" width="4" height="20" fill="#8a9a7b" stroke="#4a3f35" strokeWidth="1" />

              {/* 콜로세움 */}
              <ellipse cx="500" cy="150" rx="60" ry="50" fill="#f0d9b5" stroke="#4a3f35" strokeWidth="3" />
              <ellipse cx="500" cy="150" rx="50" ry="40" fill="#f8ecd8" stroke="#4a3f35" strokeWidth="2" />
              <ellipse cx="500" cy="150" rx="40" ry="30" fill="#f0d9b5" stroke="#4a3f35" strokeWidth="2" />

              {/* 아치들 */}
              <path d="M470,130 Q480,110 490,130" stroke="#4a3f35" strokeWidth="2" fill="none" />
              <path d="M500,130 Q510,110 520,130" stroke="#4a3f35" strokeWidth="2" fill="none" />
              <path d="M530,130 Q540,110 550,130" stroke="#4a3f35" strokeWidth="2" fill="none" />

              <path d="M460,150 Q470,130 480,150" stroke="#4a3f35" strokeWidth="2" fill="none" />
              <path d="M490,150 Q500,130 510,150" stroke="#4a3f35" strokeWidth="2" fill="none" />
              <path d="M520,150 Q530,130 540,150" stroke="#4a3f35" strokeWidth="2" fill="none" />

              {/* 방콕 사원 */}
              <path d="M700,200 L650,120 L750,120 Z" fill="#e29c67" stroke="#4a3f35" strokeWidth="3" />
              <path d="M700,120 L670,80 L730,80 Z" fill="#f0d9b5" stroke="#4a3f35" strokeWidth="2" />
              <path d="M700,80 L685,50 L715,50 Z" fill="#e29c67" stroke="#4a3f35" strokeWidth="2" />
              <rect x="695" y="30" width="10" height="20" fill="#f0d9b5" stroke="#4a3f35" strokeWidth="1" />
              <circle cx="700" cy="20" r="10" fill="#e29c67" stroke="#4a3f35" strokeWidth="1" />

              {/* 바닥 */}
              <rect x="0" y="200" width="800" height="10" fill="#4a3f35" />

              {/* 도시 이름 */}
              <text
                x="100"
                y="230"
                fontFamily="sans-serif"
                fontSize="16"
                fontWeight="bold"
                textAnchor="middle"
                fill="#4a3f35"
              >
                도쿄
              </text>
              <text
                x="300"
                y="230"
                fontFamily="sans-serif"
                fontSize="16"
                fontWeight="bold"
                textAnchor="middle"
                fill="#4a3f35"
              >
                파리
              </text>
              <text
                x="500"
                y="230"
                fontFamily="sans-serif"
                fontSize="16"
                fontWeight="bold"
                textAnchor="middle"
                fill="#4a3f35"
              >
                로마
              </text>
              <text
                x="700"
                y="230"
                fontFamily="sans-serif"
                fontSize="16"
                fontWeight="bold"
                textAnchor="middle"
                fill="#4a3f35"
              >
                방콕
              </text>
            </svg>
          </div>
        </div>

        <h2 className="mb-10 text-center text-3xl font-bold text-traveling-brown">추천 여행지</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <Link
              href={`/destination/${destination.name}`}
              key={destination.name}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
            >
              <div className="relative h-48 w-full overflow-hidden bg-traveling-background">
                <div className="absolute inset-0 flex items-center justify-center">
                  {index === 0 && (
                    <svg viewBox="0 0 200 150" className="h-full w-full">
                      {/* 도쿄 타워 일러스트 */}
                      <rect x="0" y="0" width="200" height="150" fill="#f8ecd8" />
                      <path d="M100,140 L80,40 L120,40 Z" fill="#e29c67" stroke="#4a3f35" strokeWidth="3" />
                      <path d="M90,40 L85,20 L115,20 L110,40 Z" fill="#e29c67" stroke="#4a3f35" strokeWidth="2" />
                      <rect x="98" y="10" width="4" height="10" fill="#e29c67" stroke="#4a3f35" strokeWidth="1" />
                      <rect x="70" y="140" width="60" height="10" fill="#4a3f35" />
                    </svg>
                  )}

                  {index === 1 && (
                    <svg viewBox="0 0 200 150" className="h-full w-full">
                      {/* 에펠탑 일러스트 */}
                      <rect x="0" y="0" width="200" height="150" fill="#f8ecd8" />
                      <path d="M100,140 L70,60 L130,60 Z" fill="#8a9a7b" stroke="#4a3f35" strokeWidth="3" />
                      <path d="M85,60 L80,40 L120,40 L115,60 Z" fill="#8a9a7b" stroke="#4a3f35" strokeWidth="2" />
                      <path d="M85,40 L80,20 L120,20 L115,40 Z" fill="#8a9a7b" stroke="#4a3f35" strokeWidth="2" />
                      <rect x="98" y="10" width="4" height="10" fill="#8a9a7b" stroke="#4a3f35" strokeWidth="1" />
                      <rect x="70" y="140" width="60" height="10" fill="#4a3f35" />
                    </svg>
                  )}

                  {index === 2 && (
                    <svg viewBox="0 0 200 150" className="h-full w-full">
                      {/* 콜로세움 일러스트 */}
                      <rect x="0" y="0" width="200" height="150" fill="#f8ecd8" />
                      <ellipse cx="100" cy="90" rx="60" ry="40" fill="#f0d9b5" stroke="#4a3f35" strokeWidth="3" />
                      <ellipse cx="100" cy="90" rx="50" ry="30" fill="#f8ecd8" stroke="#4a3f35" strokeWidth="2" />
                      <ellipse cx="100" cy="90" rx="40" ry="20" fill="#f0d9b5" stroke="#4a3f35" strokeWidth="2" />

                      {/* 아치들 */}
                      <path d="M70,80 Q80,70 90,80" stroke="#4a3f35" strokeWidth="2" fill="none" />
                      <path d="M100,80 Q110,70 120,80" stroke="#4a3f35" strokeWidth="2" fill="none" />
                      <path d="M130,80 Q140,70 150,80" stroke="#4a3f35" strokeWidth="2" fill="none" />

                      <path d="M60,90 Q70,80 80,90" stroke="#4a3f35" strokeWidth="2" fill="none" />
                      <path d="M90,90 Q100,80 110,90" stroke="#4a3f35" strokeWidth="2" fill="none" />
                      <path d="M120,90 Q130,80 140,90" stroke="#4a3f35" strokeWidth="2" fill="none" />
                    </svg>
                  )}

                  {index === 3 && (
                    <svg viewBox="0 0 200 150" className="h-full w-full">
                      {/* 방콕 사원 일러스트 */}
                      <rect x="0" y="0" width="200" height="150" fill="#f8ecd8" />
                      <path d="M100,140 L60,70 L140,70 Z" fill="#e29c67" stroke="#4a3f35" strokeWidth="3" />
                      <path d="M100,70 L80,40 L120,40 Z" fill="#f0d9b5" stroke="#4a3f35" strokeWidth="2" />
                      <path d="M100,40 L90,20 L110,20 Z" fill="#e29c67" stroke="#4a3f35" strokeWidth="2" />
                      <rect x="97" y="20" width="6" height="20" fill="#f0d9b5" stroke="#4a3f35" strokeWidth="1" />
                      <circle cx="100" cy="15" r="5" fill="#e29c67" stroke="#4a3f35" strokeWidth="1" />
                      <rect x="50" y="140" width="100" height="10" fill="#4a3f35" />
                    </svg>
                  )}
                </div>
              </div>

              <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-traveling-brown">{destination.name}</h3>
                  <span className="text-xl">{destination.flag}</span>
                </div>
                <p className="text-traveling-brown">{destination.country}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-traveling-brown/70">인기 여행지</span>
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: destination.color }}></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
