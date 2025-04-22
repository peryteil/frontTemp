"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, MapPin, Bookmark, Star, Settings, PenLine, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { SavedPlaceDetail } from "@/components/saved-place-detail"
import type { SavedPlaceDetail as SavedPlaceDetailType } from "@/components/saved-place-detail"

export function MyPageContent() {
  const [activeTab, setActiveTab] = useState("my-trips")
  const [selectedPlace, setSelectedPlace] = useState<SavedPlaceDetailType | null>(null)
  const [isPlaceDetailOpen, setIsPlaceDetailOpen] = useState(false)

  const myTrips = [
    {
      id: 1,
      title: "도쿄 3박 4일",
      date: "2025.05.15 - 2025.05.18",
      status: "예정",
      image: "도쿄",
      color: "#ff6b6b",
    },
    {
      id: 2,
      title: "제주도 가족여행",
      date: "2025.03.10 - 2025.03.13",
      status: "완료",
      image: "제주도",
      color: "#51cf66",
    },
    {
      id: 3,
      title: "방콕 5일",
      date: "2024.12.24 - 2024.12.28",
      status: "완료",
      image: "방콕",
      color: "#ffd43b",
    },
  ]

  // 저장된 장소 목록 (기본 정보)
  const savedItems = [
    {
      id: 1,
      title: "도쿄 스카이트리",
      type: "명소",
      location: "도쿄, 일본",
      savedDate: "2025.04.15",
      color: "#ff6b6b",
    },
    {
      id: 2,
      title: "이치란 라멘",
      type: "맛집",
      location: "도쿄, 일본",
      savedDate: "2025.04.15",
      color: "#ffd43b",
    },
    {
      id: 3,
      title: "호텔 미라코스타",
      type: "숙소",
      location: "도쿄, 일본",
      savedDate: "2025.04.14",
      color: "#4dabf7",
    },
    {
      id: 4,
      title: "방콕 왕궁",
      type: "명소",
      location: "방콕, 태국",
      savedDate: "2025.04.10",
      color: "#ff6b6b",
    },
    {
      id: 5,
      title: "팟타이 맛집",
      type: "맛집",
      location: "방콕, 태국",
      savedDate: "2025.04.10",
      color: "#ffd43b",
    },
  ]

  // 저장된 장소 상세 정보
  const savedPlacesDetails: Record<number, SavedPlaceDetailType> = {
    1: {
      id: 1,
      title: "도쿄 스카이트리",
      type: "명소",
      location: "도쿄, 일본",
      address: "도쿄도 스미다구 스미다 1-1-2",
      savedDate: "2025.04.15",
      color: "#ff6b6b",
      description:
        "도쿄 스카이트리는 도쿄에서 가장 높은 전파탑으로, 높이 634m의 전망대에서 도쿄의 아름다운 전경을 감상할 수 있습니다. 맑은 날에는 후지산도 볼 수 있어요.",
      rating: 4.5,
      openingHours: "매일 10:00 - 21:00 (마지막 입장 20:00)",
      contact: "+81-3-5302-3470",
      website: "https://www.tokyo-skytree.jp/en/",
      tags: ["전망대", "쇼핑", "레스토랑", "관광명소"],
      priceRange: "성인 2,100엔 ~ 3,100엔",
      images: [
        "/tokyo-cityscape-night.png",
        "/tokyo-night-panorama.png",
        "/tokyo-night-lights.png",
        "/tokyo-skytree-observation-deck.png",
      ],
    },
    2: {
      id: 2,
      title: "이치란 라멘",
      type: "맛집",
      location: "도쿄, 일본",
      address: "도쿄도 시부야구 도겐자카 1-22-7",
      savedDate: "2025.04.15",
      color: "#ffd43b",
      description:
        "이치란은 일본에서 가장 유명한 돈코츠 라멘 체인점 중 하나입니다. 개인 부스에서 맛있는 라멘을 즐길 수 있어요. 특히 매운맛 조절이 가능한 특제 고추기름이 특징입니다.",
      rating: 4.8,
      openingHours: "24시간 영업",
      contact: "+81-3-3463-3667",
      website: "https://ichiran.com/",
      tags: ["라멘", "돈코츠", "24시간", "인기맛집"],
      priceRange: "890엔 ~ 1,500엔",
      images: [
        "/ichiran-ramen-experience.png",
        "/ichiran-ramen-experience.png",
        "/ichiran-ramen-experience.png",
        "/ichiran-individual-booths.png",
      ],
    },
    3: {
      id: 3,
      title: "호텔 미라코스타",
      type: "숙소",
      location: "도쿄, 일본",
      address: "치바현 우라야스시 마이하마 1-13",
      savedDate: "2025.04.14",
      color: "#4dabf7",
      description:
        "도쿄 디즈니시에 위치한 호텔 미라코스타는 이탈리아 지중해 연안의 분위기를 느낄 수 있는 고급 리조트 호텔입니다. 디즈니시와 직접 연결되어 있어 테마파크 방문이 편리합니다.",
      rating: 4.7,
      openingHours: "체크인 15:00, 체크아웃 12:00",
      contact: "+81-47-305-2222",
      website: "https://www.tokyodisneyresort.jp/hotel/miracosta/",
      tags: ["디즈니", "리조트", "가족여행", "오션뷰"],
      priceRange: "1박 40,000엔 ~ 100,000엔",
      images: [
        "/tokyo-disneysea-miracosta.png",
        "/placeholder.svg?key=vspms",
        "/placeholder.svg?key=3ky1q",
        "/placeholder.svg?key=a33si",
      ],
    },
    4: {
      id: 4,
      title: "방콕 왕궁",
      type: "명소",
      location: "방콕, 태국",
      address: "Na Phra Lan Rd, Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200",
      savedDate: "2025.04.10",
      color: "#ff6b6b",
      description:
        "방콕 왕궁은 태국의 가장 신성한 장소 중 하나로, 에메랄드 불상이 있는 왓 프라깨우 사원이 있습니다. 화려한 태국 건축과 정교한 장식을 감상할 수 있는 필수 방문 명소입니다.",
      rating: 4.6,
      openingHours: "매일 08:30 - 15:30 (마지막 입장 15:00 ",
      contact: "+66-2-224-3290",
      website: "https://www.royalgrandpalace.th/en/home",
      tags: ["역사", "사원", "문화유산", "관광명소"],
      priceRange: "입장료 500바트",
      images: [
        "/placeholder.svg?key=ruayt",
        "/placeholder.svg?key=iyr45",
        "/placeholder.svg?height=200&width=300&query=bangkok grand palace architecture",
        "/placeholder.svg?height=200&width=300&query=bangkok grand palace interior",
      ],
    },
    5: {
      id: 5,
      title: "팟타이 맛집",
      type: "맛집",
      location: "방콕, 태국",
      address: "313 Maha Chai Rd, Samran Rat, Phra Nakhon, Bangkok 10200",
      savedDate: "2025.04.10",
      color: "#ffd43b",
      description:
        "팟타이 텁팀은 방콕에서 가장 유명한 팟타이 전문점으로, 1966년부터 운영되어 온 전통 있는 식당입니다. 쫄깃한 면과 신선한 새우, 특제 소스의 조화가 일품입니다.",
      rating: 4.5,
      openingHours: "화-일 11:00 - 21:00 (월요일 휴무)",
      contact: "+66-2-221-6280",
      tags: ["팟타이", "태국음식", "현지맛집", "길거리음식"],
      priceRange: "60바트 ~ 200바트",
      images: [
        "/placeholder.svg?height=400&width=600&query=pad thai restaurant bangkok",
        "/placeholder.svg?height=200&width=300&query=pad thai dish",
        "/placeholder.svg?height=200&width=300&query=thai street food",
        "/placeholder.svg?height=200&width=300&query=pad thai cooking",
      ],
    },
  }

  const myReviews = [
    {
      id: 1,
      title: "도쿄 스카이트리",
      rating: 4.5,
      date: "2025-03-20T14:30:00",
      content: "도쿄 전경을 한눈에 볼 수 있어서 좋았습니다. 입장료가 조금 비싸지만 볼만한 가치가 있어요.",
      color: "#ff6b6b",
    },
    {
      id: 2,
      title: "이치란 라멘",
      rating: 5,
      date: "2025-03-19T12:15:00",
      content: "정말 맛있었습니다! 줄이 길었지만 기다릴 만한 가치가 있었어요. 돈코츠 라멘의 진수를 맛볼 수 있습니다.",
      color: "#ffd43b",
    },
    {
      id: 3,
      title: "제주 협재해변",
      rating: 4,
      date: "2025-03-12T09:45:00",
      content: "물이 맑고 모래가 고운 해변이에요. 날씨가 좋으면 에메랄드빛 바다를 볼 수 있습니다.",
      color: "#51cf66",
    },
  ]

  const formatRelativeTime = (dateString: string) => {
    const now = new Date()
    // 데모를 위해 현재 시간을 2025년으로 설정
    now.setFullYear(2025)

    const date = new Date(dateString)
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffInSeconds < 60) {
      return "방금 전"
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60)
      return `${minutes}분 전`
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600)
      return `${hours}시간 전`
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400)
      return `${days}일 전`
    } else if (diffInSeconds < 2592000) {
      const weeks = Math.floor(diffInSeconds / 604800)
      return `${weeks}주 전`
    } else if (diffInSeconds < 31536000) {
      const months = Math.floor(diffInSeconds / 2592000)
      return `${months}개월 전`
    } else {
      const years = Math.floor(diffInSeconds / 31536000)
      return `${years}년 전`
    }
  }

  const handleOpenPlaceDetail = (placeId: number) => {
    const placeDetail = savedPlacesDetails[placeId]
    if (placeDetail) {
      setSelectedPlace(placeDetail)
      setIsPlaceDetailOpen(true)
    }
  }

  const handleClosePlaceDetail = () => {
    setIsPlaceDetailOpen(false)
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <div className="mb-8 flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start">
        <Avatar className="h-24 w-24 border-4 border-[#4dabf7]">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="프로필 이미지" />
          <AvatarFallback className="bg-[#e7f5ff] text-[#1e3a8a]">여행자</AvatarFallback>
        </Avatar>

        <div className="mt-4 text-center md:ml-6 md:mt-0 md:text-left">
          <h2 className="text-2xl font-bold text-[#1e3a8a]">행복한여행자</h2>
          <p className="text-[#495057]">여행 좋아하는 30대 직장인</p>

          <div className="mt-2">
            <div className="flex items-center">
              <span className="text-sm text-[#495057]">여행 레벨: 탐험가</span>
              <Badge className="ml-2 bg-[#ffd43b] text-[#1e3a8a]">Lv.3</Badge>
            </div>
            <div className="mt-1 flex items-center">
              <Progress value={65} className="h-2 w-32 bg-[#e7f5ff]" indicatorClassName="bg-[#4dabf7]" />
              <span className="ml-2 text-xs text-[#495057]">65%</span>
            </div>
          </div>

          <div className="mt-4 flex space-x-2">
            <Link href="/mypage/settings">
              <Button size="sm" variant="outline" className="border-[#4dabf7] text-[#1c7ed6] hover:bg-[#e7f5ff]">
                <Settings className="mr-1 h-4 w-4" />
                설정
              </Button>
            </Link>
            <Link href="/mypage/profile-edit">
              <Button size="sm" variant="outline" className="border-[#4dabf7] text-[#1c7ed6] hover:bg-[#e7f5ff]">
                <PenLine className="mr-1 h-4 w-4" />
                프로필 수정
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Tabs defaultValue="my-trips" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-6 grid w-full grid-cols-3 bg-[#e7f5ff]">
          <TabsTrigger value="my-trips" className="data-[state=active]:bg-[#4dabf7] data-[state=active]:text-white">
            내 여행
          </TabsTrigger>
          <TabsTrigger value="saved" className="data-[state=active]:bg-[#4dabf7] data-[state=active]:text-white">
            내 저장
          </TabsTrigger>
          <TabsTrigger value="reviews" className="data-[state=active]:bg-[#4dabf7] data-[state=active]:text-white">
            내 리뷰
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-trips">
          <div className="grid gap-6 md:grid-cols-3">
            {myTrips.map((trip) => (
              <Card key={trip.id} className="overflow-hidden bg-[#f8f9fa] transition-transform hover:scale-105">
                <div className="relative h-40 w-full bg-[#e7f5ff]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="h-20 w-20">
                      {trip.image === "도쿄" && (
                        <>
                          <path d="M50,80 L30,40 L70,40 Z" fill="#ff6b6b" />
                          <rect x="45" y="20" width="10" height="20" fill="#ff6b6b" />
                        </>
                      )}
                      {trip.image === "제주도" && (
                        <>
                          <path
                            d="M50,20 C70,20 80,40 80,50 C80,70 60,80 50,80 C30,80 20,70 20,50 C20,40 30,20 50,20 Z"
                            fill="#51cf66"
                          />
                          <path
                            d="M50,30 L55,45 L70,45 L60,55 L65,70 L50,60 L35,70 L40,55 L30,45 L45,45 Z"
                            fill="#ffd43b"
                          />
                        </>
                      )}
                      {trip.image === "방콕" && (
                        <>
                          <path d="M50,20 L65,40 L60,65 L40,65 L35,40 Z" fill="#ffd43b" />
                          <path d="M40,65 L60,65 L55,80 L45,80 Z" fill="#ffd43b" />
                        </>
                      )}
                    </svg>
                  </div>
                  <Badge
                    className={`absolute right-2 top-2 ${
                      trip.status === "예정" ? "bg-[#4dabf7]" : "bg-[#adb5bd]"
                    } text-white`}
                  >
                    {trip.status}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-[#1e3a8a]">{trip.title}</h3>
                  <div className="mt-2 flex items-center text-sm text-[#495057]">
                    <Calendar className="mr-1 h-3 w-3 text-[#4dabf7]" />
                    <span>{trip.date}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between bg-[#e7f5ff]/30 p-4">
                  <Link href={`/mypage/trip/${trip.id}`}>
                    <Button size="sm" variant="outline" className="border-[#4dabf7] text-[#1c7ed6] hover:bg-[#e7f5ff]">
                      상세보기
                    </Button>
                  </Link>
                  <Link href={`/mypage/trip/edit/${trip.id}`}>
                    <Button size="sm" variant="outline" className="border-[#4dabf7] text-[#1c7ed6] hover:bg-[#e7f5ff]">
                      수정하기
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}

            <Link href="/travel-planner" className="block w-full">
              <Card className="flex h-full min-h-[220px] items-center justify-center bg-[#f8f9fa]/50 border-dashed border-[#d0ebff] transition-all hover:border-[#4dabf7] hover:bg-[#e7f5ff]/30 hover:shadow-md">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-[#e7f5ff] p-3">
                    <Plus className="h-6 w-6 text-[#4dabf7]" />
                  </div>
                  <h3 className="text-[#1e3a8a]">새 여행 만들기</h3>
                  <p className="mt-1 text-sm text-[#495057]">새로운 여행 일정을 계획해보세요</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <div className="space-y-4">
            {savedItems.map((item) => (
              <Card key={item.id} className="overflow-hidden bg-[#f8f9fa] hover:bg-[#e7f5ff]/20">
                <div className="absolute left-0 top-0 h-full w-1" style={{ backgroundColor: item.color }}></div>
                <CardHeader className="flex flex-row items-start justify-between pb-2 pl-6 pt-4">
                  <div>
                    <CardTitle className="text-lg text-[#1e3a8a]">{item.title}</CardTitle>
                    <div className="mt-1 flex items-center text-sm text-[#495057]">
                      <MapPin className="mr-1 h-3 w-3 text-[#4dabf7]" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <Badge
                    className={`
                    ${item.type === "명소" ? "bg-[#ff6b6b]" : item.type === "맛집" ? "bg-[#ffd43b]" : "bg-[#4dabf7]"}
                    text-white
                  `}
                  >
                    {item.type}
                  </Badge>
                </CardHeader>
                <CardFooter className="flex items-center justify-between pb-4 pl-6 pt-2 text-sm text-[#495057]">
                  <div className="flex items-center">
                    <Bookmark className="mr-1 h-3 w-3 text-[#4dabf7]" />
                    <span>저장일: {item.savedDate}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 text-[#495057] hover:bg-[#e7f5ff] hover:text-[#1e3a8a]"
                      onClick={() => handleOpenPlaceDetail(item.id)}
                    >
                      상세보기
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 text-[#495057] hover:bg-[#e7f5ff] hover:text-[#1e3a8a]"
                    >
                      삭제
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="space-y-6">
            {myReviews.map((review) => (
              <Card key={review.id} className="overflow-hidden bg-[#f8f9fa]">
                <div className="absolute left-0 top-0 h-full w-1" style={{ backgroundColor: review.color }}></div>
                <CardHeader className="pb-2 pl-6 pt-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-[#1e3a8a]">{review.title}</CardTitle>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(review.rating)
                              ? "fill-[#ffd43b] text-[#ffd43b]"
                              : i < review.rating
                                ? "fill-[#ffd43b] text-[#ffd43b] stroke-[#ffd43b]"
                                : "text-[#dee2e6]"
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-sm font-medium text-[#1e3a8a]">{review.rating}</span>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-[#495057]">작성일: {formatRelativeTime(review.date)}</p>
                </CardHeader>
                <CardContent className="py-2 pl-6">
                  <p className="text-[#1e3a8a]">{review.content}</p>
                </CardContent>
                <CardFooter className="flex justify-end pb-4 pl-6 pt-2">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 text-[#495057] hover:bg-[#e7f5ff] hover:text-[#1e3a8a]"
                    >
                      수정
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 text-[#495057] hover:bg-[#e7f5ff] hover:text-[#1e3a8a]"
                    >
                      삭제
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* 저장된 장소 상세 정보 모달 */}
      <SavedPlaceDetail isOpen={isPlaceDetailOpen} onClose={handleClosePlaceDetail} place={selectedPlace} />
    </div>
  )
}
