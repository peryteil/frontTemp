"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Globe, Lock, Eye, EyeOff, Shield, LogOut, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"

export function SettingsContent() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // 알림 설정 상태
  const [notifications, setNotifications] = useState({
    email: true,
    marketing: false,
    social: true,
    security: true,
    promotions: false,
    updates: true,
  })

  // 언어 및 지역 설정 상태
  const [language, setLanguage] = useState("ko")
  const [region, setRegion] = useState("KR")
  const [currency, setCurrency] = useState("KRW")
  const [timeFormat, setTimeFormat] = useState("24")

  // 보안 설정 상태
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [loginAlerts, setLoginAlerts] = useState(true)
  const [saveLoginInfo, setSaveLoginInfo] = useState(true)

  const handleSaveSettings = () => {
    toast({
      title: "설정이 저장되었습니다.",
      description: "변경사항이 성공적으로 적용되었습니다.",
    })

    // 실제 구현에서는 여기서 API 호출 등을 통해 설정을 저장

    // 마이페이지로 리다이렉트
    setTimeout(() => {
      router.push("/mypage")
    }, 1500)
  }

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast({
        title: "오류",
        description: "모든 비밀번호 필드를 입력해주세요.",
        variant: "destructive",
      })
      return
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "오류",
        description: "새 비밀번호와 비밀번호 확인이 일치하지 않습니다.",
        variant: "destructive",
      })
      return
    }

    // 실제 구현에서는 여기서 API 호출 등을 통해 비밀번호 변경

    toast({
      title: "비밀번호가 변경되었습니다.",
      description: "새 비밀번호로 성공적으로 변경되었습니다.",
    })

    // 필드 초기화
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  const handleToggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-[#e7f5ff]">
          <TabsTrigger value="account" className="data-[state=active]:bg-[#4dabf7] data-[state=active]:text-white">
            계정
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-[#4dabf7] data-[state=active]:text-white"
          >
            알림
          </TabsTrigger>
          <TabsTrigger value="language" className="data-[state=active]:bg-[#4dabf7] data-[state=active]:text-white">
            언어 및 지역
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-[#4dabf7] data-[state=active]:text-white">
            보안
          </TabsTrigger>
        </TabsList>

        {/* 계정 설정 */}
        <TabsContent value="account">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-[#1e3a8a]">계정 설정</CardTitle>
              <CardDescription>계정 정보 및 비밀번호를 관리하세요.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-[#1e3a8a]">비밀번호 변경</h3>
                <div className="space-y-3">
                  <div className="relative">
                    <Label htmlFor="current-password" className="text-[#1e3a8a]">
                      현재 비밀번호
                    </Label>
                    <div className="relative">
                      <Input
                        id="current-password"
                        type={showPassword ? "text" : "password"}
                        className="bg-[#e7f5ff]/30 pr-10"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#495057]"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="new-password" className="text-[#1e3a8a]">
                      새 비밀번호
                    </Label>
                    <Input
                      id="new-password"
                      type={showPassword ? "text" : "password"}
                      className="bg-[#e7f5ff]/30"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="confirm-password" className="text-[#1e3a8a]">
                      비밀번호 확인
                    </Label>
                    <Input
                      id="confirm-password"
                      type={showPassword ? "text" : "password"}
                      className="bg-[#e7f5ff]/30"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>

                <Button onClick={handlePasswordChange} className="mt-2 bg-[#4dabf7] text-white hover:bg-[#339af0]">
                  <Lock className="mr-2 h-4 w-4" />
                  비밀번호 변경
                </Button>
              </div>

              <Separator className="my-4" />

              <div>
                <h3 className="text-lg font-medium text-[#1e3a8a]">계정 삭제</h3>
                <p className="mt-1 text-sm text-[#495057]">
                  계정을 삭제하면 모든 데이터가 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다.
                </p>
                <Button variant="destructive" className="mt-3">
                  계정 삭제
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 알림 설정 */}
        <TabsContent value="notifications">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-[#1e3a8a]">알림 설정</CardTitle>
              <CardDescription>알림 수신 방법과 종류를 설정하세요.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base text-[#1e3a8a]">이메일 알림</Label>
                    <p className="text-sm text-[#495057]">중요 알림을 이메일로 받습니다.</p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={() => handleToggleNotification("email")}
                    className="data-[state=checked]:bg-[#4dabf7]"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base text-[#1e3a8a]">마케팅 이메일</Label>
                    <p className="text-sm text-[#495057]">프로모션 및 마케팅 정보를 받습니다.</p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={() => handleToggleNotification("marketing")}
                    className="data-[state=checked]:bg-[#4dabf7]"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base text-[#1e3a8a]">소셜 알림</Label>
                    <p className="text-sm text-[#495057]">친구 활동 및 소셜 업데이트를 받습니다.</p>
                  </div>
                  <Switch
                    checked={notifications.social}
                    onCheckedChange={() => handleToggleNotification("social")}
                    className="data-[state=checked]:bg-[#4dabf7]"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base text-[#1e3a8a]">보안 알림</Label>
                    <p className="text-sm text-[#495057]">계정 보안 관련 알림을 받습니다.</p>
                  </div>
                  <Switch
                    checked={notifications.security}
                    onCheckedChange={() => handleToggleNotification("security")}
                    className="data-[state=checked]:bg-[#4dabf7]"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base text-[#1e3a8a]">프로모션 알림</Label>
                    <p className="text-sm text-[#495057]">특별 할인 및 프로모션 정보를 받습니다.</p>
                  </div>
                  <Switch
                    checked={notifications.promotions}
                    onCheckedChange={() => handleToggleNotification("promotions")}
                    className="data-[state=checked]:bg-[#4dabf7]"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base text-[#1e3a8a]">서비스 업데이트</Label>
                    <p className="text-sm text-[#495057]">서비스 변경 및 업데이트 정보를 받습니다.</p>
                  </div>
                  <Switch
                    checked={notifications.updates}
                    onCheckedChange={() => handleToggleNotification("updates")}
                    className="data-[state=checked]:bg-[#4dabf7]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 언어 및 지역 설정 */}
        <TabsContent value="language">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-[#1e3a8a]">언어 및 지역 설정</CardTitle>
              <CardDescription>언어, 지역, 통화 및 시간 형식을 설정하세요.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="language" className="text-[#1e3a8a]">
                    언어
                  </Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger id="language" className="bg-[#e7f5ff]/30">
                      <SelectValue placeholder="언어 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ko">한국어</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="ja">日本語</SelectItem>
                      <SelectItem value="zh">中文</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region" className="text-[#1e3a8a]">
                    지역
                  </Label>
                  <Select value={region} onValueChange={setRegion}>
                    <SelectTrigger id="region" className="bg-[#e7f5ff]/30">
                      <SelectValue placeholder="지역 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="KR">대한민국</SelectItem>
                      <SelectItem value="US">미국</SelectItem>
                      <SelectItem value="JP">일본</SelectItem>
                      <SelectItem value="CN">중국</SelectItem>
                      <SelectItem value="TH">태국</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency" className="text-[#1e3a8a]">
                    통화
                  </Label>
                  <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger id="currency" className="bg-[#e7f5ff]/30">
                      <SelectValue placeholder="통화 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="KRW">한국 원 (₩)</SelectItem>
                      <SelectItem value="USD">미국 달러 ($)</SelectItem>
                      <SelectItem value="JPY">일본 엔 (¥)</SelectItem>
                      <SelectItem value="EUR">유로 (€)</SelectItem>
                      <SelectItem value="GBP">영국 파운드 (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time-format" className="text-[#1e3a8a]">
                    시간 형식
                  </Label>
                  <Select value={timeFormat} onValueChange={setTimeFormat}>
                    <SelectTrigger id="time-format" className="bg-[#e7f5ff]/30">
                      <SelectValue placeholder="시간 형식 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12시간 (AM/PM)</SelectItem>
                      <SelectItem value="24">24시간</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md bg-[#e7f5ff]/50 p-4">
                <div className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-[#4dabf7]" />
                  <div>
                    <p className="font-medium text-[#1e3a8a]">언어 자동 감지</p>
                    <p className="text-sm text-[#495057]">브라우저 언어 설정에 따라 자동으로 언어를 설정합니다.</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center">
                  <Switch className="mr-2 data-[state=checked]:bg-[#4dabf7]" />
                  <Label className="text-[#1e3a8a]">자동 언어 감지 사용</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 보안 설정 */}
        <TabsContent value="security">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-[#1e3a8a]">보안 설정</CardTitle>
              <CardDescription>계정 보안 및 개인정보 보호 설정을 관리하세요.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base text-[#1e3a8a]">2단계 인증</Label>
                    <p className="text-sm text-[#495057]">로그인 시 추가 인증 단계를 요구합니다.</p>
                  </div>
                  <Switch
                    checked={twoFactorAuth}
                    onCheckedChange={setTwoFactorAuth}
                    className="data-[state=checked]:bg-[#4dabf7]"
                  />
                </div>

                {twoFactorAuth && (
                  <div className="ml-6 mt-2 rounded-md bg-[#e7f5ff]/50 p-3">
                    <p className="text-sm text-[#1e3a8a]">
                      2단계 인증이 활성화되었습니다. 로그인 시 이메일로 인증 코드가 전송됩니다.
                    </p>
                  </div>
                )}

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base text-[#1e3a8a]">로그인 알림</Label>
                    <p className="text-sm text-[#495057]">새로운 기기에서 로그인 시 알림을 받습니다.</p>
                  </div>
                  <Switch
                    checked={loginAlerts}
                    onCheckedChange={setLoginAlerts}
                    className="data-[state=checked]:bg-[#4dabf7]"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base text-[#1e3a8a]">로그인 정보 저장</Label>
                    <p className="text-sm text-[#495057]">기기에 로그인 정보를 저장합니다.</p>
                  </div>
                  <Switch
                    checked={saveLoginInfo}
                    onCheckedChange={setSaveLoginInfo}
                    className="data-[state=checked]:bg-[#4dabf7]"
                  />
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-[#1e3a8a]">로그인 기록</h3>
                <div className="space-y-3">
                  <div className="rounded-md bg-[#e7f5ff]/30 p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-[#1e3a8a]">서울, 대한민국</p>
                        <p className="text-sm text-[#495057]">Chrome - Windows • 오늘 12:34</p>
                      </div>
                      <Badge className="bg-[#4dabf7]">현재 세션</Badge>
                    </div>
                  </div>

                  <div className="rounded-md bg-[#f8f9fa] p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-[#1e3a8a]">서울, 대한민국</p>
                        <p className="text-sm text-[#495057]">Safari - iOS • 어제 18:45</p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 text-[#495057] hover:text-[#1e3a8a]">
                        로그아웃
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-md bg-[#f8f9fa] p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-[#1e3a8a]">부산, 대한민국</p>
                        <p className="text-sm text-[#495057]">Chrome - Android • 3일 전</p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 text-[#495057] hover:text-[#1e3a8a]">
                        로그아웃
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-[#1e3a8a]">개인정보 다운로드</h3>
                <p className="text-sm text-[#495057]">저장된 모든 개인정보와 데이터를 다운로드할 수 있습니다.</p>
                <Button variant="outline" className="mt-2 border-[#4dabf7] text-[#1c7ed6] hover:bg-[#e7f5ff]">
                  <Shield className="mr-2 h-4 w-4" />
                  개인정보 다운로드
                </Button>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-[#1e3a8a]">모든 기기에서 로그아웃</h3>
                <p className="text-sm text-[#495057]">모든 기기에서 즉시 로그아웃됩니다. 다시 로그인해야 합니다.</p>
                <Button variant="outline" className="mt-2 border-[#ff6b6b] text-[#ff6b6b] hover:bg-[#fff5f5]">
                  <LogOut className="mr-2 h-4 w-4" />
                  모든 기기에서 로그아웃
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-4">
        <Button
          variant="outline"
          className="border-[#adb5bd] text-[#495057] hover:bg-[#e7f5ff] hover:text-[#1e3a8a]"
          onClick={() => router.push("/mypage")}
        >
          취소
        </Button>
        <Button className="bg-[#ffd43b] text-[#1e3a8a] hover:bg-[#fcc419]" onClick={handleSaveSettings}>
          <Save className="mr-2 h-4 w-4" />
          설정 저장
        </Button>
      </div>
    </div>
  )
}
