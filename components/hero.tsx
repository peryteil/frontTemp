export function Hero() {
  return (
    <section className="relative py-16 world-map-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="relative mb-8 h-[300px] w-full max-w-5xl">
            {/* 왼쪽 에펠탑 */}
            <div className="absolute left-[100px] top-[50px]">
              <svg width="100" height="180" viewBox="0 0 100 180" className="h-full w-full">
                <path d="M50,160 L20,50 L80,50 Z" fill="none" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M30,50 L25,30 L75,30 L70,50" fill="none" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M35,30 L30,15 L70,15 L65,30" fill="none" stroke="#2d3436" strokeWidth="1.5" />
                <line x1="50" y1="15" x2="50" y2="5" stroke="#2d3436" strokeWidth="1.5" />
              </svg>
            </div>

            {/* 오른쪽 에펠탑 */}
            <div className="absolute left-[200px] top-[70px]">
              <svg width="80" height="160" viewBox="0 0 80 160" className="h-full w-full">
                <path d="M40,140 L15,40 L65,40 Z" fill="#e8b4a9" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M25,40 L20,25 L60,25 L55,40" fill="#e8b4a9" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M30,25 L25,10 L55,10 L50,25" fill="#e8b4a9" stroke="#2d3436" strokeWidth="1.5" />
                <line x1="40" y1="10" x2="40" y2="5" stroke="#2d3436" strokeWidth="1.5" />
              </svg>
            </div>

            {/* 비행기와 경로 */}
            <div className="absolute right-[300px] top-[100px] animate-plane-fly">
              <svg width="30" height="30" viewBox="0 0 30 30" className="h-full w-full">
                <path
                  d="M25,15 L18,8 L8,12 L4,12 L8,15 L4,18 L8,18 L18,22 L25,15"
                  fill="#8ca896"
                  stroke="#2d3436"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <svg width="400" height="200" viewBox="0 0 400 200" className="absolute left-[250px] top-[120px]">
              <path
                d="M50,100 C100,80 150,70 200,80 C250,90 300,110 350,100"
                fill="none"
                stroke="#8ca896"
                strokeWidth="1.5"
                strokeDasharray="5,5"
                className="plane-path"
              />
            </svg>

            {/* 콜로세움 */}
            <div className="absolute right-[100px] top-[80px]">
              <svg width="150" height="120" viewBox="0 0 150 120" className="h-full w-full">
                <path d="M20,100 L20,60 L130,60 L130,100" fill="none" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M30,60 L30,40 L120,40 L120,60" fill="none" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M40,100 L40,60" stroke="#2d3436" strokeWidth="1" />
                <path d="M60,100 L60,60" stroke="#2d3436" strokeWidth="1" />
                <path d="M80,100 L80,60" stroke="#2d3436" strokeWidth="1" />
                <path d="M100,100 L100,60" stroke="#2d3436" strokeWidth="1" />
                <path d="M120,100 L120,60" stroke="#2d3436" strokeWidth="1" />
                <path d="M30,80 L120,80" stroke="#2d3436" strokeWidth="1" />
                <path d="M40,40 Q75,20 110,40" fill="none" stroke="#2d3436" strokeWidth="1.5" />
              </svg>
            </div>

            {/* 방콕 사원 */}
            <div className="absolute right-[250px] top-[60px]">
              <svg width="120" height="120" viewBox="0 0 120 120" className="h-full w-full">
                <path d="M60,100 L30,60 L90,60 Z" fill="none" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M60,60 L40,40 L80,40 Z" fill="none" stroke="#2d3436" strokeWidth="1.5" />
                <path d="M60,40 L50,20 L70,20 Z" fill="none" stroke="#2d3436" strokeWidth="1.5" />
                <rect x="55" y="10" width="10" height="10" stroke="#2d3436" strokeWidth="1.5" fill="none" />
                <rect x="50" y="70" width="20" height="30" stroke="#2d3436" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h1 className="mb-4 text-5xl font-bold text-traveling-text">매일이 여행처럼</h1>
            <p className="mb-6 text-xl text-traveling-text">
              트래블링과 <span className="text-traveling-highlight">함께</span> 만드는 당신만의 여정
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
