"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, MapPin, Star, Plus, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapComponent } from "./map-component"

interface AttractionSelectionProps {
  destination: string
}

export function AttractionSelection({ destination }: AttractionSelectionProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedAttractions, setSelectedAttractions] = useState<string[]>([])
  const [hoveredAttraction, setHoveredAttraction] = useState<string | null>(null)

  // 도시별 명소 데이터
  const attractionsData: Record<string, any> = {
    osaka: {
      name: "오사카",
      center: { lat: 34.6937, lng: 135.5023 },
      attractions: [
        {
          id: "dotonbori",
          name: "도톤보리",
          category: "명소",
          address: "Dotonbori, Chuo Ward, Osaka, 542-0071",
          rating: 4.7,
          likes: 7196,
          image: "/images/attractions/dotonbori.png",
          position: { lat: 34.6687, lng: 135.5031 },
        },
        {
          id: "osaka-castle",
          name: "오사카 성",
          category: "명소",
          address: "1-1 Osakajo, Chuo Ward, Osaka, 540-0002",
          rating: 4.4,
          likes: 6557,
          image: "/images/attractions/osaka-castle.png",
          position: { lat: 34.6873, lng: 135.5262 },
        },
        {
          id: "universal-studios",
          name: "유니버설 스튜디오 재팬",
          category: "명소",
          address: "2-chome-1-33 Sakurajima, Konohana Ward, Osaka, 554-0031",
          rating: 4.5,
          likes: 5361,
          image: "/images/attractions/universal-studios.jpg",
          position: { lat: 34.6654, lng: 135.4323 },
        },
        {
          id: "umeda-wheel",
          name: "우메다 공중정원",
          category: "명소",
          address: "Japan, 〒531-6039 Osaka, Kita Ward, Oyodonaka, 1 Chome−1−88",
          rating: 4.4,
          likes: 4824,
          image: "/images/attractions/umeda-wheel.jpg",
          position: { lat: 34.7052, lng: 135.4957 },
        },
        {
          id: "namba",
          name: "난바",
          category: "명소",
          address: "Namba, Chuo Ward, Osaka, 542-0076",
          rating: 4.3,
          likes: 4666,
          image: "/images/attractions/namba.jpg",
          position: { lat: 34.6659, lng: 135.5013 },
        },
      ],
    },
    tokyo: {
      name: "도쿄",
      center: { lat: 35.6762, lng: 139.6503 },
      attractions: [
        {
          id: "tokyo-tower",
          name: "도쿄 타워",
          category: "명소",
          address: "4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011",
          rating: 4.6,
          likes: 8234,
          image: "/tokyo-night-lights.png",
          position: { lat: 35.6586, lng: 139.7454 },
        },
        {
          id: "shibuya-crossing",
          name: "시부야 스크램블 교차로",
          category: "명소",
          address: "2 Chome-2-1 Dogenzaka, Shibuya City, Tokyo 150-0043",
          rating: 4.5,
          likes: 7654,
          image: "/shibuya-intersection-bustle.png",
          position: { lat: 35.6595, lng: 139.7004 },
        },
        {
          id: "meiji-shrine",
          name: "메이지 신궁",
          category: "명소",
          address: "1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557",
          rating: 4.7,
          likes: 6543,
          image: "/meiji-shrine-entrance.png",
          position: { lat: 35.6763, lng: 139.6993 },
        },
        {
          id: "senso-ji",
          name: "센소지 사원",
          category: "명소",
          address: "2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032",
          rating: 4.6,
          likes: 7123,
          image: "/sensoji-lantern.png",
          position: { lat: 35.7147, lng: 139.7966 },
        },
        {
          id: "tokyo-skytree",
          name: "도쿄 스카이트리",
          category: "명소",
          address: "1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045",
          rating: 4.5,
          likes: 6789,
          image: "/tokyo-skytree-day.png",
          position: { lat: 35.7101, lng: 139.8107 },
        },
      ],
    },
    fukuoka: {
      name: "후쿠오카",
      center: { lat: 33.5902, lng: 130.4017 },
      attractions: [
        {
          id: "canal-city",
          name: "캐널시티 하카타",
          category: "명소",
          address: "1 Chome-2 Sumiyoshi, Hakata Ward, Fukuoka, 812-0018",
          rating: 4.3,
          likes: 5432,
          image: "/canal-city-hakata-water-show.png",
          position: { lat: 33.5898, lng: 130.4108 },
        },
        {
          id: "ohori-park",
          name: "오호리 공원",
          category: "명소",
          address: "1 Chome-2 Ohorikoen, Chuo Ward, Fukuoka, 810-0051",
          rating: 4.6,
          likes: 4987,
          image: "/ohori-park-serenity.png",
          position: { lat: 33.5861, lng: 130.3797 },
        },
        {
          id: "fukuoka-tower",
          name: "후쿠오카 타워",
          category: "명소",
          address: "2 Chome-3-26 Momochihama, Sawara Ward, Fukuoka, 814-0001",
          rating: 4.4,
          likes: 4567,
          image: "/fukuoka-seaside-view.png",
          position: { lat: 33.5944, lng: 130.3514 },
        },
        {
          id: "dazaifu",
          name: "다자이후 텐만구",
          category: "명소",
          address: "4 Chome-7-1 Saifu, Dazaifu, Fukuoka 818-0117",
          rating: 4.7,
          likes: 5678,
          image: "/dazaifu-plum-blossoms.png",
          position: { lat: 33.5196, lng: 130.5354 },
        },
        {
          id: "nakasu",
          name: "나카스",
          category: "명소",
          address: "Nakasu, Hakata Ward, Fukuoka, 810-0801",
          rating: 4.2,
          likes: 4321,
          image: "/nakasu-night-lights.png",
          position: { lat: 33.5938, lng: 130.4043 },
        },
      ],
    },
    paris: {
      name: "파리",
      center: { lat: 48.8566, lng: 2.3522 },
      attractions: [
        {
          id: "eiffel-tower",
          name: "에펠탑",
          category: "명소",
          address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
          rating: 4.7,
          likes: 9876,
          image: "/paris-eiffel-tower.png",
          position: { lat: 48.8584, lng: 2.2945 },
        },
        {
          id: "louvre-museum",
          name: "루브르 박물관",
          category: "명소",
          address: "Rue de Rivoli, 75001 Paris, France",
          rating: 4.8,
          likes: 8765,
          image: "/paris-louvre-museum.png",
          position: { lat: 48.8606, lng: 2.3376 },
        },
        {
          id: "notre-dame",
          name: "노트르담 대성당",
          category: "명소",
          address: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France",
          rating: 4.7,
          likes: 7654,
          image: "/paris-notre-dame.png",
          position: { lat: 48.853, lng: 2.3499 },
        },
        {
          id: "arc-de-triomphe",
          name: "개선문",
          category: "명소",
          address: "Place Charles de Gaulle, 75008 Paris, France",
          rating: 4.6,
          likes: 6543,
          image: "/paris-arc-de-triomphe.png",
          position: { lat: 48.8738, lng: 2.295 },
        },
        {
          id: "montmartre",
          name: "몽마르트",
          category: "명소",
          address: "Montmartre, 75018 Paris, France",
          rating: 4.5,
          likes: 5432,
          image: "/paris-montmartre.png",
          position: { lat: 48.8867, lng: 2.3431 },
        },
      ],
    },
    rome: {
      name: "로마",
      center: { lat: 41.9028, lng: 12.4964 },
      attractions: [
        {
          id: "colosseum",
          name: "콜로세움",
          category: "명소",
          address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
          rating: 4.8,
          likes: 9876,
          image: "/rome-colosseum.png",
          position: { lat: 41.8902, lng: 12.4922 },
        },
        {
          id: "vatican-museums",
          name: "바티칸 박물관",
          category: "명소",
          address: "Viale Vaticano, 00165 Roma RM, Italy",
          rating: 4.7,
          likes: 8765,
          image: "/rome-vatican-museums.png",
          position: { lat: 41.9065, lng: 12.4534 },
        },
        {
          id: "trevi-fountain",
          name: "트레비 분수",
          category: "명소",
          address: "Piazza di Trevi, 00187 Roma RM, Italy",
          rating: 4.8,
          likes: 7654,
          image: "/rome-trevi-fountain.png",
          position: { lat: 41.9009, lng: 12.4833 },
        },
        {
          id: "pantheon",
          name: "판테온",
          category: "명소",
          address: "Piazza della Rotonda, 00186 Roma RM, Italy",
          rating: 4.7,
          likes: 6543,
          image: "/rome-pantheon.png",
          position: { lat: 41.8986, lng: 12.4769 },
        },
        {
          id: "roman-forum",
          name: "로마 포럼",
          category: "명소",
          address: "Via della Salara Vecchia, 5/6, 00186 Roma RM, Italy",
          rating: 4.6,
          likes: 5432,
          image: "/rome-roman-forum.png",
          position: { lat: 41.8925, lng: 12.4853 },
        },
      ],
    },
    venice: {
      name: "베니스",
      center: { lat: 45.4408, lng: 12.3155 },
      attractions: [
        {
          id: "st-marks-square",
          name: "산 마르코 광장",
          category: "명소",
          address: "Piazza San Marco, 30100 Venezia VE, Italy",
          rating: 4.8,
          likes: 8765,
          image: "/venice-st-marks-square.png",
          position: { lat: 45.4341, lng: 12.3388 },
        },
        {
          id: "rialto-bridge",
          name: "리알토 다리",
          category: "명소",
          address: "Sestiere San Polo, 30125 Venezia VE, Italy",
          rating: 4.7,
          likes: 7654,
          image: "/venice-rialto-bridge.png",
          position: { lat: 45.4381, lng: 12.3358 },
        },
        {
          id: "doges-palace",
          name: "도지의 궁전",
          category: "명소",
          address: "P.za San Marco, 1, 30124 Venezia VE, Italy",
          rating: 4.7,
          likes: 6543,
          image: "/venice-doges-palace.png",
          position: { lat: 45.4337, lng: 12.3401 },
        },
        {
          id: "grand-canal",
          name: "대운하",
          category: "명소",
          address: "Grand Canal, Venice, Italy",
          rating: 4.8,
          likes: 5432,
          image: "/venice-grand-canal.png",
          position: { lat: 45.4408, lng: 12.3325 },
        },
        {
          id: "burano",
          name: "부라노 섬",
          category: "명소",
          address: "Burano, 30142 Venice, Italy",
          rating: 4.6,
          likes: 4321,
          image: "/venice-burano.png",
          position: { lat: 45.4853, lng: 12.4167 },
        },
      ],
    },
    bangkok: {
      name: "방콕",
      center: { lat: 13.7563, lng: 100.5018 },
      attractions: [
        {
          id: "grand-palace",
          name: "왕궁",
          category: "명소",
          address: "Na Phra Lan Rd, Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200, Thailand",
          rating: 4.7,
          likes: 8765,
          image: "/bangkok-grand-palace.png",
          position: { lat: 13.75, lng: 100.4914 },
        },
        {
          id: "wat-arun",
          name: "왓 아룬",
          category: "명소",
          address: "158 Thanon Wang Doem, Wat Arun, Bangkok Yai, Bangkok 10600, Thailand",
          rating: 4.6,
          likes: 7654,
          image: "/bangkok-wat-arun.png",
          position: { lat: 13.7437, lng: 100.4888 },
        },
        {
          id: "chatuchak-market",
          name: "차투착 주말 시장",
          category: "명소",
          address: "Kamphaeng Phet 2 Rd, Chatuchak, Bangkok 10900, Thailand",
          rating: 4.8,
          likes: 6543,
          image: "/bangkok-chatuchak-market.png",
          position: { lat: 13.7999, lng: 100.5502 },
        },
        {
          id: "wat-pho",
          name: "왓 포",
          category: "명소",
          address: "2 Sanam Chai Rd, Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200, Thailand",
          rating: 4.7,
          likes: 5432,
          image: "/bangkok-wat-pho.png",
          position: { lat: 13.7465, lng: 100.493 },
        },
        {
          id: "khao-san-road",
          name: "카오산 로드",
          category: "명소",
          address: "Khao San Road, Talat Yot, Phra Nakhon, Bangkok 10200, Thailand",
          rating: 4.5,
          likes: 4321,
          image: "/bangkok-khao-san-road.png",
          position: { lat: 13.7582, lng: 100.4971 },
        },
      ],
    },
    singapore: {
      name: "싱가포르",
      center: { lat: 1.3521, lng: 103.8198 },
      attractions: [
        {
          id: "marina-bay-sands",
          name: "마리나 베이 샌즈",
          category: "명소",
          address: "10 Bayfront Avenue, Singapore 018956",
          rating: 4.8,
          likes: 8765,
          image: "/singapore-marina-bay-sands.png",
          position: { lat: 1.2834, lng: 103.8607 },
        },
        {
          id: "gardens-by-the-bay",
          name: "가든스 바이 더 베이",
          category: "명소",
          address: "18 Marina Gardens Drive, Singapore 018953",
          rating: 4.7,
          likes: 7654,
          image: "/singapore-gardens-by-the-bay.png",
          position: { lat: 1.2815, lng: 103.8636 },
        },
        {
          id: "sentosa-island",
          name: "센토사 섬",
          category: "명소",
          address: "Sentosa Island, Singapore",
          rating: 4.6,
          likes: 6543,
          image: "/singapore-sentosa-island.png",
          position: { lat: 1.2494, lng: 103.8303 },
        },
        {
          id: "universal-studios",
          name: "유니버설 스튜디오 싱가포르",
          category: "명소",
          address: "8 Sentosa Gateway, Singapore 098269",
          rating: 4.7,
          likes: 5432,
          image: "/singapore-universal-studios.png",
          position: { lat: 1.254, lng: 103.8238 },
        },
        {
          id: "merlion-park",
          name: "머라이언 파크",
          category: "명소",
          address: "1 Fullerton Road, Singapore 049213",
          rating: 4.5,
          likes: 4321,
          image: "/singapore-merlion-park.png",
          position: { lat: 1.2868, lng: 103.8545 },
        },
      ],
    },
  }

  const cityData = attractionsData[destination]
  const filteredAttractions = cityData.attractions.filter(
    (attraction: any) =>
      attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attraction.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attraction.address.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const toggleAttraction = (attractionId: string) => {
    if (selectedAttractions.includes(attractionId)) {
      setSelectedAttractions(selectedAttractions.filter((id) => id !== attractionId))
    } else {
      setSelectedAttractions([...selectedAttractions, attractionId])
    }
  }

  // 지도에 표시할 마커 생성
  const mapMarkers = filteredAttractions.map((attraction: any) => ({
    id: attraction.id,
    position: attraction.position,
    title: attraction.name,
    selected: selectedAttractions.includes(attraction.id) || hoveredAttraction === attraction.id,
  }))

  return (
    <div className="space-y-6">
      <Card className="bg-white p-6 shadow-md">
        <div className="mb-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-traveling-text">장소 선택</h2>
          <p className="text-center text-sm text-traveling-text/70">
            {cityData.name}에서 방문하고 싶은 장소를 선택해주세요.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <Tabs defaultValue="attraction-select" className="w-full">
              <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
                <TabsTrigger
                  value="attraction-select"
                  className="data-[state=active]:bg-traveling-purple data-[state=active]:text-white"
                >
                  장소 선택
                </TabsTrigger>
                <TabsTrigger
                  value="new-attraction"
                  className="data-[state=active]:bg-traveling-purple data-[state=active]:text-white"
                >
                  신규 장소 등록
                </TabsTrigger>
              </TabsList>

              <TabsContent value="attraction-select" className="mt-6">
                <div className="mb-6">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="장소명을 입력하세요"
                      className="bg-traveling-background pl-10 border-traveling-text/30"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-traveling-text/50" />
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-traveling-purple text-traveling-purple hover:bg-traveling-purple/10"
                  >
                    추천 장소
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-traveling-text/30 text-traveling-text/70 hover:bg-traveling-background"
                  >
                    명소
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-traveling-text/30 text-traveling-text/70 hover:bg-traveling-background"
                  >
                    식당
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-traveling-text/30 text-traveling-text/70 hover:bg-traveling-background"
                  >
                    카페
                  </Button>
                </div>

                <div className="max-h-[600px] overflow-y-auto space-y-4 pr-2">
                  {filteredAttractions.map((attraction: any) => (
                    <Card
                      key={attraction.id}
                      className={`overflow-hidden transition-all ${
                        selectedAttractions.includes(attraction.id)
                          ? "border-2 border-traveling-purple"
                          : "border border-gray-200"
                      }`}
                      onMouseEnter={() => setHoveredAttraction(attraction.id)}
                      onMouseLeave={() => setHoveredAttraction(null)}
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="relative h-40 w-full md:h-auto md:w-1/3">
                          <Image
                            src={attraction.image || "/placeholder.svg"}
                            alt={attraction.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="flex flex-1 flex-col p-4">
                          <div className="mb-2 flex items-start justify-between">
                            <div>
                              <h3 className="font-bold text-traveling-text">{attraction.name}</h3>
                              <Badge className="mt-1 bg-traveling-background text-traveling-text/70">
                                {attraction.category}
                              </Badge>
                            </div>
                            <div className="flex items-center">
                              <Star className="mr-1 h-4 w-4 fill-traveling-yellow text-traveling-yellow" />
                              <span className="font-bold text-traveling-text">{attraction.rating}</span>
                            </div>
                          </div>

                          <p className="mb-2 flex items-center text-sm text-traveling-text/70">
                            <MapPin className="mr-1 h-4 w-4 text-traveling-text/70" />
                            {attraction.address}
                          </p>

                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center text-sm text-traveling-text/70">
                              <Star className="mr-1 h-4 w-4 text-traveling-pink" />
                              <span>{attraction.likes.toLocaleString()}</span>
                            </div>
                            <Button
                              variant={selectedAttractions.includes(attraction.id) ? "default" : "outline"}
                              size="sm"
                              className={
                                selectedAttractions.includes(attraction.id)
                                  ? "bg-traveling-purple text-white hover:bg-traveling-purple/90"
                                  : "border-traveling-purple text-traveling-purple hover:bg-traveling-purple/10"
                              }
                              onClick={() => toggleAttraction(attraction.id)}
                            >
                              {selectedAttractions.includes(attraction.id) ? "선택됨" : "선택하기"}
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="new-attraction" className="mt-6">
                <div className="rounded-lg bg-traveling-background p-6">
                  <div className="mb-6 flex flex-col items-center justify-center">
                    <div className="mb-4 rounded-full bg-traveling-purple/20 p-4">
                      <Plus className="h-8 w-8 text-traveling-purple" />
                    </div>
                    <h3 className="text-lg font-bold text-traveling-text">새로운 장소 추가하기</h3>
                    <p className="text-center text-sm text-traveling-text/70">
                      방문하고 싶은 장소가 목록에 없나요? 직접 추가해보세요!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="place-name" className="mb-2 block text-sm font-medium text-traveling-text">
                        장소명
                      </label>
                      <Input
                        id="place-name"
                        placeholder="방문할 장소 이름을 입력하세요"
                        className="bg-white border-traveling-text/30"
                      />
                    </div>

                    <div>
                      <label htmlFor="place-category" className="mb-2 block text-sm font-medium text-traveling-text">
                        카테고리
                      </label>
                      <select
                        id="place-category"
                        className="w-full rounded-md border border-traveling-text/30 bg-white p-2 text-traveling-text"
                      >
                        <option value="">카테고리 선택</option>
                        <option value="명소">명소</option>
                        <option value="식당">식당</option>
                        <option value="카페">카페</option>
                        <option value="쇼핑">쇼핑</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="place-address" className="mb-2 block text-sm font-medium text-traveling-text">
                        주소
                      </label>
                      <Input
                        id="place-address"
                        placeholder="장소의 주소를 입력하세요"
                        className="bg-white border-traveling-text/30"
                      />
                    </div>

                    <div>
                      <label htmlFor="place-memo" className="mb-2 block text-sm font-medium text-traveling-text">
                        메모
                      </label>
                      <textarea
                        id="place-memo"
                        placeholder="장소에 대한 메모를 입력하세요"
                        className="w-full rounded-md border border-traveling-text/30 bg-white p-2 text-traveling-text"
                        rows={3}
                      ></textarea>
                    </div>

                    <Button className="w-full bg-traveling-purple text-white hover:bg-traveling-purple/90">
                      장소 추가하기
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 flex justify-end">
              <Link href={selectedAttractions.length > 0 ? `/travel-planner/${destination}/step3` : "#"}>
                <Button
                  className="bg-traveling-purple text-white hover:bg-traveling-purple/90"
                  disabled={selectedAttractions.length === 0}
                >
                  다음 단계로
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* 지도 영역 */}
          <div className="h-[700px] rounded-lg overflow-hidden">
            <MapComponent
              center={cityData.center}
              markers={mapMarkers}
              onMarkerClick={toggleAttraction}
              height="100%"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
