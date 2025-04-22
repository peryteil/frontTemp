"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, User, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [birthYear, setBirthYear] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [agreeMarketing, setAgreeMarketing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 실제 구현에서는 여기에 회원가입 로직 추가
    console.log("회원가입 시도:", { email, password, name, birthYear, agreeTerms, agreeMarketing })
  }

  // 연도 옵션 생성 (현재 연도부터 100년 전까지)
  const currentYear = new Date().getFullYear()
  const yearOptions = Array.from({ length: 100 }, (_, i) => currentYear - i)

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-traveling-text">회원가입</h1>
        <p className="text-traveling-text/70">트래블링과 함께 여행을 시작해보세요!</p>
      </div>

      <div className="relative mb-8 flex justify-center">
        <div className="relative h-64 w-64">
          <svg viewBox="0 0 200 200" className="h-full w-full">
            {/* 배경 원 */}
            <circle cx="100" cy="100" r="80" fill="#e7f5ff" />

            {/* 지구본 */}
            <circle cx="100" cy="100" r="40" fill="#93c5fd" stroke="#4338ca" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="40" ry="15" fill="none" stroke="#4338ca" strokeWidth="1" />
            <path d="M60,100 L140,100" stroke="#4338ca" strokeWidth="1" />
            <path d="M100,60 L100,140" stroke="#4338ca" strokeWidth="1" />

            {/* 비행기 */}
            <path d="M150,70 L160,60 L165,65 L155,75 Z" fill="#ff9a9e" stroke="#4338ca" strokeWidth="1" />
            <path d="M150,70 Q130,90 120,130" fill="none" stroke="#4338ca" strokeWidth="1" strokeDasharray="2,2" />

            {/* 여행자 */}
            <circle cx="70" cy="60" r="10" fill="#fcd34d" stroke="#4338ca" strokeWidth="1" />
            <path d="M65,70 Q70,90 70,100 L75,100 Q75,90 80,70 Z" fill="#a78bfa" stroke="#4338ca" strokeWidth="1" />
            <line x1="70" y1="80" x2="60" y2="90" stroke="#4338ca" strokeWidth="1" />
            <line x1="75" y1="80" x2="85" y2="90" stroke="#4338ca" strokeWidth="1" />

            {/* 카메라 */}
            <rect x="55" y="90" width="10" height="8" rx="2" fill="#ff9a9e" stroke="#4338ca" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <Card className="bg-white p-6 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email" className="mb-2 block text-traveling-text">
              이메일
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="bg-traveling-background pl-10 border-traveling-text/30"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-traveling-text/50" />
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="name" className="mb-2 block text-traveling-text">
              이름
            </Label>
            <div className="relative">
              <Input
                id="name"
                type="text"
                placeholder="이름을 입력하세요"
                className="bg-traveling-background pl-10 border-traveling-text/30"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-traveling-text/50" />
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="birth-year" className="mb-2 block text-traveling-text">
              출생연도
            </Label>
            <div className="relative">
              <Select value={birthYear} onValueChange={setBirthYear}>
                <SelectTrigger className="bg-traveling-background pl-10 border-traveling-text/30">
                  <SelectValue placeholder="출생연도를 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {yearOptions.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}년
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-traveling-text/50" />
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="password" className="mb-2 block text-traveling-text">
              비밀번호
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력하세요"
                className="bg-traveling-background pl-10 pr-10 border-traveling-text/30"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-traveling-text/50" />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-traveling-text/50"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            <p className="mt-1 text-xs text-traveling-text/50">8자 이상, 영문, 숫자, 특수문자를 포함해주세요</p>
          </div>

          <div className="mb-6">
            <Label htmlFor="confirm-password" className="mb-2 block text-traveling-text">
              비밀번호 확인
            </Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="비밀번호를 다시 입력하세요"
                className="bg-traveling-background pl-10 pr-10 border-traveling-text/30"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-traveling-text/50" />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-traveling-text/50"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="mb-4 space-y-2">
            <div className="flex items-center">
              <Checkbox
                id="agree-terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked === true)}
                required
              />
              <label htmlFor="agree-terms" className="ml-2 text-sm text-traveling-text/70">
                <Link href="/terms" className="text-traveling-purple hover:underline">
                  이용약관
                </Link>{" "}
                및{" "}
                <Link href="/privacy" className="text-traveling-purple hover:underline">
                  개인정보 처리방침
                </Link>
                에 동의합니다. (필수)
              </label>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="agree-marketing"
                checked={agreeMarketing}
                onCheckedChange={(checked) => setAgreeMarketing(checked === true)}
              />
              <label htmlFor="agree-marketing" className="ml-2 text-sm text-traveling-text/70">
                마케팅 정보 수신에 동의합니다. (선택)
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-traveling-purple text-white hover:bg-traveling-purple/90">
            회원가입
          </Button>

          <div className="mt-6 flex items-center">
            <Separator className="flex-1" />
            <span className="mx-4 text-xs text-traveling-text/50">또는</span>
            <Separator className="flex-1" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex items-center justify-center border-traveling-text/30 bg-white"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex items-center justify-center border-traveling-text/30 bg-white"
            >
              <svg className="mr-2 h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </Button>
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="text-traveling-text/70">이미 계정이 있으신가요? </span>
            <Link href="/login" className="font-medium text-traveling-purple hover:underline">
              로그인
            </Link>
          </div>
        </form>
      </Card>
    </div>
  )
}
