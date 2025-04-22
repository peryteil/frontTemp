"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Camera, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"

export function ProfileEditContent() {
  const router = useRouter()

  // 프로필 정보 상태
  const [profileData, setProfileData] = useState({
    nickname: "행복한여행자",
    email: "traveler@example.com",
    bio: "여행 좋아하는 30대 직장인입니다. 맛집 탐방과 사진 찍는 것을 좋아해요.",
    gender: "남성",
    birthYear: "1990",
    occupation: "회사원",
    website: "",
    instagram: "",
    profileImage: "/diverse-professional-profiles.png",
  })

  // 여행 선호도 상태
  const [preferences, setPreferences] = useState([
    { id: 1, name: "맛집", selected: true },
    { id: 2, name: "자연", selected: true },
    { id: 3, name: "문화", selected: true },
    { id: 4, name: "쇼핑", selected: false },
    { id: 5, name: "휴양", selected: true },
    { id: 6, name: "모험", selected: false },
    { id: 7, name: "사진", selected: true },
    { id: 8, name: "역사", selected: false },
    { id: 9, name: "축제", selected: false },
    { id: 10, name: "예술", selected: false },
    { id: 11, name: "스포츠", selected: false },
    { id: 12, name: "야경", selected: true },
    { id: 13, name: "로컬체험", selected: false },
    { id: 14, name: "럭셔리", selected: false },
    { id: 15, name: "가성비", selected: true },
  ])

  // 여행 스타일 상태
  const [travelStyles, setTravelStyles] = useState({
    pace: "보통", // 느림, 보통, 빠름
    planning: "계획형", // 계획형, 즉흥형
    budget: "중간", // 저예산, 중간, 고예산
    accommodation: "호텔", // 호텔, 게스트하우스, 에어비앤비, 리조트
    transportation: "대중교통", // 대중교통, 렌트카, 택시, 도보
  })

  // 방문한 국가 상태
  const [visitedCountries, setVisitedCountries] = useState([
    { id: 1, name: "일본", visited: true },
    { id: 2, name: "중국", visited: false },
    { id: 3, name: "태국", visited: true },
    { id: 4, name: "베트남", visited: true },
    { id: 5, name: "싱가포르", visited: false },
    { id: 6, name: "미국", visited: true },
    { id: 7, name: "프랑스", visited: false },
    { id: 8, name: "이탈리아", visited: false },
    { id: 9, name: "영국", visited: false },
    { id: 10, name: "호주", visited: false },
  ])

  // 프로필 정보 업데이트 핸들러
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // 선호도 토글 핸들러
  const togglePreference = (id: number) => {
    setPreferences((prev) => prev.map((pref) => (pref.id === id ? { ...pref, selected: !pref.selected } : pref)))
  }

  // 방문 국가 토글 핸들러
  const toggleVisitedCountry = (id: number) => {
    setVisitedCountries((prev) =>
      prev.map((country) => (country.id === id ? { ...country, visited: !country.visited } : country)),
    )
  }

  // 여행 스타일 변경 핸들러
  const handleStyleChange = (key: keyof typeof travelStyles, value: string) => {
    setTravelStyles((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  // 프로필 저장 핸들러
  const handleSaveProfile = () => {
    toast({
      title: "프로필이 저장되었습니다.",
      description: "변경사항이 성공적으로 적용되었습니다.",
    })

    // 실제 구현에서는 여기서 API 호출 등을 통해 프로필 정보를 저장

    // 마이페이지로 리다이렉트
    setTimeout(() => {
      router.push("/mypage")
    }, 1500)
  }

  // 프로필 이미지 변경 핸들러 (실제 구현에서는 파일 업로드 로직 추가)
  const handleImageChange = () => {
    // 파일 선택 다이얼로그를 열기 위한 더미 함수
    // 실제 구현에서는 파일 업로드 로직 추가
    toast({
      title: "이미지 업로드",
      description: "프로필 이미지가 업로드되었습니다.",
    })
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl text-[#1e3a8a]">기본 정보</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 프로필 이미지 */}
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-6 sm:space-y-0">
            <div className="relative">
              <Avatar className="h-32 w-32 border-4 border-[#4dabf7]">
                <AvatarImage src={profileData.profileImage || "/placeholder.svg"} alt="프로필 이미지" />
                <AvatarFallback className="bg-[#e7f5ff] text-[#1e3a8a] text-2xl">여행자</AvatarFallback>
              </Avatar>
              <button
                className="absolute bottom-0 right-0 rounded-full bg-[#4dabf7] p-2 text-white hover:bg-[#339af0]"
                onClick={handleImageChange}
              >
                <Camera className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg font-medium text-[#1e3a8a]">프로필 이미지</h3>
              <p className="text-sm text-[#495057]">
                JPG, PNG 또는 GIF 형식의 이미지를 업로드하세요. <br />
                최대 파일 크기: 5MB
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#4dabf7] text-[#1c7ed6] hover:bg-[#e7f5ff]"
                  onClick={handleImageChange}
                >
                  이미지 업로드
                </Button>
                <Button variant="outline" size="sm" className="border-[#ff6b6b] text-[#ff6b6b] hover:bg-[#fff5f5]">
                  <X className="mr-1 h-3 w-3" />
                  삭제
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          {/* 기본 정보 폼 */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nickname" className="text-[#1e3a8a]">
                닉네임
              </Label>
              <Input
                id="nickname"
                name="nickname"
                value={profileData.nickname}
                onChange={handleProfileChange}
                className="bg-[#e7f5ff]/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#1e3a8a]">
                이메일
              </Label>
              <Input
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleProfileChange}
                className="bg-[#e7f5ff]/30"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="bio" className="text-[#1e3a8a]">
                자기소개
              </Label>
              <Textarea
                id="bio"
                name="bio"
                value={profileData.bio}
                onChange={handleProfileChange}
                className="min-h-[100px] bg-[#e7f5ff]/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender" className="text-[#1e3a8a]">
                성별
              </Label>
              <Select
                value={profileData.gender}
                onValueChange={(value) => setProfileData((prev) => ({ ...prev, gender: value }))}
              >
                <SelectTrigger id="gender" className="bg-[#e7f5ff]/30">
                  <SelectValue placeholder="성별 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="남성">남성</SelectItem>
                  <SelectItem value="여성">여성</SelectItem>
                  <SelectItem value="기타">기타</SelectItem>
                  <SelectItem value="비공개">비공개</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthYear" className="text-[#1e3a8a]">
                출생년도
              </Label>
              <Select
                value={profileData.birthYear}
                onValueChange={(value) => setProfileData((prev) => ({ ...prev, birthYear: value }))}
              >
                <SelectTrigger id="birthYear" className="bg-[#e7f5ff]/30">
                  <SelectValue placeholder="출생년도 선택" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 50 }, (_, i) => 2005 - i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}년
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupation" className="text-[#1e3a8a]">
                직업
              </Label>
              <Input
                id="occupation"
                name="occupation"
                value={profileData.occupation}
                onChange={handleProfileChange}
                className="bg-[#e7f5ff]/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="text-[#1e3a8a]">
                웹사이트
              </Label>
              <Input
                id="website"
                name="website"
                value={profileData.website}
                onChange={handleProfileChange}
                placeholder="https://"
                className="bg-[#e7f5ff]/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="instagram" className="text-[#1e3a8a]">
                인스타그램
              </Label>
              <Input
                id="instagram"
                name="instagram"
                value={profileData.instagram}
                onChange={handleProfileChange}
                placeholder="@username"
                className="bg-[#e7f5ff]/30"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl text-[#1e3a8a]">여행 선호도</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label className="text-[#1e3a8a]">관심 있는 여행 테마</Label>
            <div className="flex flex-wrap gap-2">
              {preferences.map((pref) => (
                <Badge
                  key={pref.id}
                  className={`cursor-pointer ${
                    pref.selected
                      ? "bg-[#4dabf7] text-white hover:bg-[#339af0]"
                      : "bg-[#e7f5ff] text-[#495057] hover:bg-[#d0ebff] hover:text-[#1e3a8a]"
                  }`}
                  onClick={() => togglePreference(pref.id)}
                >
                  {pref.name}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <Label className="text-[#1e3a8a]">여행 스타일</Label>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="pace" className="text-sm text-[#495057]">
                  여행 페이스
                </Label>
                <Select value={travelStyles.pace} onValueChange={(value) => handleStyleChange("pace", value)}>
                  <SelectTrigger id="pace" className="bg-[#e7f5ff]/30">
                    <SelectValue placeholder="여행 페이스 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="느림">느림 (여유롭게)</SelectItem>
                    <SelectItem value="보통">보통</SelectItem>
                    <SelectItem value="빠름">빠름 (효율적으로)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="planning" className="text-sm text-[#495057]">
                  계획 스타일
                </Label>
                <Select value={travelStyles.planning} onValueChange={(value) => handleStyleChange("planning", value)}>
                  <SelectTrigger id="planning" className="bg-[#e7f5ff]/30">
                    <SelectValue placeholder="계획 스타일 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="계획형">계획형 (세부 일정 계획)</SelectItem>
                    <SelectItem value="즉흥형">즉흥형 (현지에서 결정)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-sm text-[#495057]">
                  예산 수준
                </Label>
                <Select value={travelStyles.budget} onValueChange={(value) => handleStyleChange("budget", value)}>
                  <SelectTrigger id="budget" className="bg-[#e7f5ff]/30">
                    <SelectValue placeholder="예산 수준 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="저예산">저예산 (알뜰하게)</SelectItem>
                    <SelectItem value="중간">중간</SelectItem>
                    <SelectItem value="고예산">고예산 (럭셔리하게)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accommodation" className="text-sm text-[#495057]">
                  선호하는 숙소
                </Label>
                <Select
                  value={travelStyles.accommodation}
                  onValueChange={(value) => handleStyleChange("accommodation", value)}
                >
                  <SelectTrigger id="accommodation" className="bg-[#e7f5ff]/30">
                    <SelectValue placeholder="숙소 유형 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="호텔">호텔</SelectItem>
                    <SelectItem value="게스트하우스">게스트하우스</SelectItem>
                    <SelectItem value="에어비앤비">에어비앤비</SelectItem>
                    <SelectItem value="리조트">리조트</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="transportation" className="text-sm text-[#495057]">
                  선호하는 교통수단
                </Label>
                <Select
                  value={travelStyles.transportation}
                  onValueChange={(value) => handleStyleChange("transportation", value)}
                >
                  <SelectTrigger id="transportation" className="bg-[#e7f5ff]/30">
                    <SelectValue placeholder="교통수단 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="대중교통">대중교통</SelectItem>
                    <SelectItem value="렌트카">렌트카</SelectItem>
                    <SelectItem value="택시">택시</SelectItem>
                    <SelectItem value="도보">도보</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <Label className="text-[#1e3a8a]">방문한 국가</Label>
            <div className="flex flex-wrap gap-2">
              {visitedCountries.map((country) => (
                <Badge
                  key={country.id}
                  className={`cursor-pointer ${
                    country.visited
                      ? "bg-[#51cf66] text-white hover:bg-[#40c057]"
                      : "bg-[#e7f5ff] text-[#495057] hover:bg-[#d0ebff] hover:text-[#1e3a8a]"
                  }`}
                  onClick={() => toggleVisitedCountry(country.id)}
                >
                  {country.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button
          variant="outline"
          className="border-[#adb5bd] text-[#495057] hover:bg-[#e7f5ff] hover:text-[#1e3a8a]"
          onClick={() => router.push("/mypage")}
        >
          취소
        </Button>
        <Button className="bg-[#ffd43b] text-[#1e3a8a] hover:bg-[#fcc419]" onClick={handleSaveProfile}>
          <Save className="mr-2 h-4 w-4" />
          프로필 저장
        </Button>
      </div>
    </div>
  )
}
