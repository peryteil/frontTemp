"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ThumbsUp, MessageSquare, Share2, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"

interface CommunityPostDetailProps {
  postId: string
}

export function CommunityPostDetail({ postId }: CommunityPostDetailProps) {
  const router = useRouter()
  const [post, setPost] = useState<any>(null)
  const [comments, setComments] = useState<any[]>([])
  const [newComment, setNewComment] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    // 실제 구현에서는 API 호출로 데이터를 가져옵니다
    // 여기서는 데모 데이터를 사용합니다
    const fetchData = () => {
      setIsLoading(true)

      // 모든 게시판의 게시글 데이터 통합
      const allPosts = [
        // 꿀팁 게시판
        {
          id: "1",
          title: "도쿄 여행 꿀팁 모음 (교통, 숙소, 쇼핑)",
          author: "여행고수",
          authorImage: "/abstract-profile-two.png",
          date: "2025년 4월 18일",
          views: 1243,
          likes: 89,
          comments: 23,
          tags: ["도쿄", "일본", "꿀팁"],
          color: "#ff6b6b",
          category: "tips",
          content: `
## 도쿄 여행을 위한 꿀팁 모음

안녕하세요, 여행고수입니다! 이번에 도쿄 여행을 다녀왔는데요, 유용했던 정보들을 공유합니다.

### 교통

1. **스이카(Suica) 카드 구매하기**: 편의점이나 역에서 구매 가능하며, 지하철, 버스, 편의점 등에서 사용할 수 있어요.
2. **도쿄 메트로 패스**: 24시간, 48시간, 72시간 패스가 있어요. 관광지를 많이 다닐 계획이라면 이 패스가 경제적입니다.
3. **야마노테선(JR)**: 도쿄 주요 관광지를 순환하는 노선이에요. 시부야, 신주쿠, 아키하바라 등을 쉽게 이동할 수 있습니다.

### 숙소

1. **신주쿠/시부야**: 번화가에 위치해 있어 교통이 편리하고 쇼핑하기 좋아요.
2. **우에노/아사쿠사**: 전통적인 분위기를 느끼고 싶다면 추천해요.
3. **도쿄역/긴자**: 고급 호텔이 많고 쇼핑하기 좋아요.

### 쇼핑

1. **돈키호테**: 화장품, 과자, 전자제품 등 다양한 상품을 저렴하게 구매할 수 있어요.
2. **다이소**: 100엔 숍으로 저렴한 기념품이나 생활용품을 구매하기 좋아요.
3. **아키하바라**: 전자제품, 애니메이션 관련 상품을 구매하기 좋아요.

### 음식

1. **이치란 라멘**: 개인 부스에서 혼자 조용히 라멘을 즐길 수 있어요.
2. **스시 자니**: 저렴하게 회전 초밥을 즐길 수 있어요.
3. **츠키지 시장**: 신선한 해산물을 맛볼 수 있어요.

### 팁

1. **포켓 와이파이 대여**: 공항에서 대여하면 편리해요.
2. **화장실 찾기**: 편의점, 백화점, 지하철역에 깨끗한 화장실이 많아요.
3. **영어 메뉴**: 관광지 주변 식당에는 영어 메뉴가 있는 곳이 많아요.

도쿄 여행 계획 중이신 분들께 도움이 되었으면 좋겠습니다! 질문 있으시면 댓글 남겨주세요.
          `,
          images: [
            "/tokyo-metro-network.png",
            "/suica-tokyo-commute.png",
            "/shinjuku-cityscape-view.png",
            "/asakusa-ryokan-tranquility.png",
          ],
        },
        {
          id: "2",
          title: "유럽 배낭여행 준비물 체크리스트",
          author: "유럽러버",
          authorImage: "/abstract-profile-two.png",
          date: "2025년 4월 15일",
          views: 987,
          likes: 76,
          comments: 18,
          tags: ["유럽", "배낭여행", "체크리스트"],
          color: "#4dabf7",
          category: "tips",
          content: `
## 유럽 배낭여행 준비물 체크리스트

안녕하세요, 유럽러버입니다! 유럽 배낭여행을 준비하시는 분들을 위해 체크리스트를 공유합니다.

### 필수 서류
- 여권 (유효기간 6개월 이상)
- 비자 (필요한 경우)
- 여행자보험 증서
- 항공권 e-티켓
- 숙소 예약 확인서
- 국제 운전면허증 (렌트카 이용 시)

### 의류
- 속옷 (7일치)
- 양말 (7일치)
- 티셔츠 (5-7벌)
- 긴팔 셔츠/블라우스 (2-3벌)
- 바지/스커트 (2-3벌)
- 가디건/자켓 (1-2벌)
- 방수 자켓/우산
- 편안한 신발 (2켤레)
- 수영복 (해변 방문 시)

### 전자기기
- 스마트폰 + 충전기
- 보조배터리
- 카메라 + 충전기 + 메모리카드
- 어댑터/변환 플러그
- 이어폰/헤드폰

### 세면도구
- 칫솔/치약
- 샴푸/컨디셔너 (소형)
- 바디워시 (소형)
- 선크림
- 화장품 (기초)
- 면도기
- 생리용품

### 의약품
- 상비약 (두통약, 소화제, 지사제)
- 밴드/반창고
- 개인 처방약

### 기타
- 작은 배낭 (도시 관광용)
- 물병 (접이식)
- 자물쇠
- 안대/귀마개
- 여행용 세탁세제
- 노트/펜
- 현금/카드

### 디지털 준비물
- 구글맵 오프라인 지도 다운로드
- 번역 앱 설치
- 숙소/항공권 앱 설치
- 유럽 교통 앱 설치

유럽 여행 준비 중이신 분들께 도움이 되었으면 좋겠습니다! 질문이나 추가할 내용이 있으시면 댓글 남겨주세요.
          `,
          images: ["/backpacking-europe-essentials.png", "/travel-essentials.png"],
        },
        {
          id: "3",
          title: "동남아 여행 시 주의사항 및 꿀팁",
          author: "아시아탐험가",
          authorImage: "/abstract-profile-two.png",
          date: "2025년 4월 12일",
          views: 756,
          likes: 54,
          comments: 12,
          tags: ["동남아", "태국", "베트남"],
          color: "#51cf66",
          category: "tips",
          content: `
## 동남아 여행 시 주의사항 및 꿀팁

안녕하세요, 아시아탐험가입니다! 동남아 여행을 계획 중이신 분들을 위해 주의사항과 꿀팁을 공유합니다.

### 주의사항

1. **물 조심하기**: 수돗물은 마시지 말고 반드시 생수를 구매해서 마시세요.
2. **음식 조심하기**: 길거리 음식은 현지인이 많이 찾는 곳에서 먹는 것이 좋아요.
3. **모기 조심하기**: 모기 퇴치제를 꼭 챙기세요. 뎅기열, 말라리아 등의 위험이 있어요.
4. **소매치기 조심하기**: 번화가나 관광지에서는 소지품 관리에 주의하세요.
5. **바가지요금 조심하기**: 택시나 툭툭 이용 시 미터기 사용을 요청하거나 가격을 미리 흥정하세요.

### 국가별 꿀팁

#### 태국
- **왕실 존중하기**: 태국에서는 왕실에 대한 존중이 매우 중요해요.
- **사원 방문 시 복장**: 어깨와 무릎을 가리는 옷을 입어야 해요.
- **그랩(Grab) 앱**: 택시 이용 시 그랩 앱을 사용하면 편리해요.

#### 베트남
- **도로 건너기**: 오토바이가 많아 횡단보도에서도 조심해서 건너야 해요.
- **흥정하기**: 시장에서는 흥정이 필수예요. 처음 제시된 가격의 50-70%가 적정해요.
- **커피 문화**: 베트남 커피는 꼭 맛보세요. 에그커피, 코코넛커피가 유명해요.

#### 싱가포르
- **벌금 조심하기**: 껌 씹기, 쓰레기 버리기 등에 높은 벌금이 부과돼요.
- **호커센터**: 저렴하고 맛있는 현지 음식을 즐길 수 있어요.
- **교통카드**: EZ-Link 카드를 구매하면 대중교통 이용이 편리해요.

### 준비물
- 모기 퇴치제
- 선크림 (SPF50 이상)
- 상비약 (소화제, 지사제, 두통약)
- 생수통
- 휴대용 선풍기 (더운 날씨 대비)
- 방수 가방/파우치 (스콜이 자주 내려요)

동남아 여행 계획 중이신 분들께 도움이 되었으면 좋겠습니다! 질문이나 추가할 내용이 있으시면 댓글 남겨주세요.
          `,
          images: ["/golden-thai-temple.png", "/bustling-vietnamese-food-stall.png", "/marina-bay-twilight.png"],
        },
        // 자유게시판
        {
          id: "4",
          title: "방금 도쿄 여행 다녀왔어요! (사진 많음)",
          author: "도쿄여행자",
          authorImage: "/abstract-profile-two.png",
          date: "2025년 4월 20일",
          views: 342,
          likes: 28,
          comments: 15,
          tags: ["도쿄", "여행후기", "사진"],
          color: "#ff6b6b",
          category: "free",
          content: `
## 도쿄 여행 후기 (with 사진)

안녕하세요, 도쿄여행자입니다! 지난주에 4박 5일로 도쿄 여행을 다녀왔어요. 정말 좋았던 곳들과 사진을 공유합니다!

### Day 1: 시부야 & 하라주쿠

시부야 스크램블 교차로에서 시작했어요. 정말 사람이 많더라고요! 하치코 동상도 보고, 시부야 스카이에 올라가서 전망도 즐겼습니다.

오후에는 하라주쿠로 이동해서 타케시타 거리에서 쇼핑도 하고, 메이지 신궁도 방문했어요. 신궁은 도심 속 숲 같은 느낌이라 정말 좋았습니다.

저녁은 오모테산도 힐스에서 먹었는데, 분위기가 정말 좋았어요!

### Day 2: 아사쿠사 & 스카이트리

아침에 센소지 사원을 방문했어요. 아침 일찍 가서 사람이 적을 때 구경했습니다. 나카미세 거리에서 기념품도 구경하고 간식도 먹었어요.

점심 후에는 스카이트리에 올라갔는데, 전망이 정말 끝내줬어요! 맑은 날이라 후지산도 보였습니다.

### Day 3: 우에노 & 아키하바라

우에노 공원에서 산책하고 국립 박물관도 방문했어요. 공원 내 연못에서 보트도 탔는데 재밌었습니다.

오후에는 아키하바라에서 전자제품 쇼핑과 애니메이션 굿즈도 구경했어요. 메이드 카페도 가봤는데 독특한 경험이었습니다!

### Day 4: 오다이바 & 레인보우 브릿지

오다이바에서 건담 동상도 보고, 팀랩 보더리스도 방문했어요. 팀랩은 정말 환상적이었습니다!

저녁에는 레인보우 브릿지의 야경을 보며 크루즈를 탔는데, 도쿄의 밤 풍경이 너무 아름다웠어요.

### Day 5: 긴자 & 도쿄역

마지막 날은 긴자에서 쇼핑하고, 도쿄역 주변을 구경했어요. 도쿄역 건물이 생각보다 웅장하고 아름다웠습니다.

### 총평

도쿄는 정말 깨끗하고, 대중교통이 편리하고, 음식도 맛있고, 볼거리가 정말 많은 도시였어요! 다음에는 교토와 오사카도 방문해보고 싶습니다.

질문 있으시면 댓글 남겨주세요!
          `,
          images: [
            "/placeholder.svg?height=400&width=600&query=Tokyo Shibuya Crossing Crowd",
            "/placeholder.svg?height=400&width=600&query=Tokyo Skytree View",
            "/placeholder.svg?height=400&width=600&query=Tokyo Sensoji Temple",
            "/placeholder.svg?height=400&width=600&query=Tokyo Odaiba Gundam",
          ],
        },
        {
          id: "5",
          title: "여행 중 겪은 황당한 에피소드",
          author: "웃픈여행",
          authorImage: "/abstract-profile-two.png",
          date: "2025년 4월 17일",
          views: 567,
          likes: 89,
          comments: 42,
          tags: ["에피소드", "웃긴이야기"],
          color: "#4dabf7",
          category: "free",
          content: `
## 여행 중 겪은 황당한 에피소드들

안녕하세요, 웃픈여행입니다! 여행 중에 겪었던 황당하고 웃긴 에피소드들을 공유합니다.

### 1. 공항에서의 해프닝

프랑스 파리로 가는 비행기를 타려고 공항에 도착했는데, 게이트 앞에서 한참을 기다리다가 문득 이상함을 느꼈어요. 알고 보니 제가 착각해서 하루 일찍 공항에 온 거였습니다! 😅 결국 공항 근처 호텔에서 하루를 더 묵게 되었어요.

### 2. 언어 장벽의 비극

이탈리아 로마에서 식당에 갔는데, 메뉴가 전부 이탈리아어였어요. 구글 번역기로 열심히 번역했는데, '폴포'라는 메뉴가 '문어'라는 걸 모르고 주문했어요. 저는 해산물 알레르기가 있는데... 다행히 첫 입에 이상함을 느끼고 먹지 않았지만, 정말 아찔했습니다!

### 3. 호텔 방 잘못 들어간 사건

태국 방콕의 한 호텔에 체크인하고 방으로 올라갔어요. 카드키로 문을 열고 들어갔는데, 침대에 누군가의 짐이 있는 거예요! 알고 보니 프론트에서 방 번호를 잘못 알려줬던 거였어요. 다행히 방 주인은 없었지만, 정말 식은땀이 났습니다.

### 4. 렌트카 수난시대

미국 하와이에서 렌트카를 빌렸는데, 운전석이 오른쪽인 줄 알고 계속 조수석으로 타려고 했어요. 미국은 운전석이 왼쪽인데 말이죠! 게다가 주유구가 어디 있는지 몰라서 주유소에서 한참을 헤맸던 기억이 나네요.

### 5. 기차 놓친 사연

유럽 여행 중 스위스에서 이탈리아로 가는 기차를 타려고 했어요. 시간에 맞춰 플랫폼에 도착했는데, 기차가 떠나는 걸 보고 당황했죠. 알고 보니 스위스는 시간을 정말 정확하게 지켜서, 출발 시간 1분 전에 문이 닫힌다는 걸 몰랐던 거예요!

### 6. 화장실 대참사

일본 여행 중에 전자동 화장실을 처음 봤는데, 버튼이 너무 많아서 혼란스러웠어요. 실수로 비데 버튼을 눌렀는데, 수압이 너무 세서 물이 화장실 밖으로 튀었습니다. 당황해서 아무 버튼이나 눌렀더니 더 상황이 악화됐어요... 결국 화장실에서 나올 때는 바지가 다 젖어있었답니다. 😂

여러분도 여행 중 겪은 황당한 에피소드가 있으면 댓글로 공유해주세요!
          `,
          images: [
            "/placeholder.svg?height=400&width=600&query=Funny Travel Situation",
            "/placeholder.svg?height=400&width=600&query=Japan Toilet Buttons",
          ],
        },
        // 여행메이트
        {
          id: "6",
          title: "5월 초 방콕 여행 동행 구해요 (20대 여성)",
          author: "방콕가자",
          authorImage: "/abstract-profile-two.png",
          date: "2025년 4월 19일",
          views: 234,
          likes: 12,
          comments: 8,
          tags: ["방콕", "동행", "5월"],
          color: "#ffd43b",
          category: "mate",
          content: `
## 5월 초 방콕 여행 동행 구합니다

안녕하세요! 5월 초에 방콕 여행을 계획 중인 20대 여성입니다.
혼자 여행하려고 했는데, 동행이 있으면 더 재미있을 것 같아 글을 올립니다.

### 여행 정보
- 기간: 2025년 5월 1일 ~ 5월 5일 (4박 5일)
- 장소: 태국 방콕
- 항공편: 인천-방콕 (대한항공)
- 숙소: 수쿰빗 지역 호텔 (아직 미정)

### 여행 스타일
- 느긋하게 여행하는 것을 좋아합니다.
- 맛집 탐방과 쇼핑을 좋아합니다.
- 주요 관광지는 꼭 방문하고 싶어요.
- 사진 찍는 것을 좋아합니다.

### 방문 예정 장소
- 왕궁
- 왓 아룬
- 왓 포
- 짜뚜짝 시장
- 아시아티크
- 터미널 21 쇼핑몰
- 카오산 로드

### 동행 조건
- 20대 여성 (안전상의 이유로)
- 비흡연자
- 여행 일정에 맞출 수 있는 분
- 서로 예의를 지키고 배려할 수 있는 분

관심 있으신 분은 댓글이나 쪽지 주세요!
여행 전에 만나서 서로 얘기해보고 결정해도 좋을 것 같습니다.
          `,
          images: [
            "/placeholder.svg?height=400&width=600&query=Bangkok Grand Palace",
            "/placeholder.svg?height=400&width=600&query=Bangkok Wat Arun",
          ],
        },
        {
          id: "7",
          title: "다음 주 제주도 렌트카 동행 1명 구함",
          author: "제주드라이버",
          authorImage: "/abstract-profile-two.png",
          date: "2025년 4월 18일",
          views: 187,
          likes: 9,
          comments: 14,
          tags: ["제주도", "렌트카", "동행"],
          color: "#51cf66",
          category: "mate",
          content: `
## 다음 주 제주도 렌트카 동행 1명 구합니다

안녕하세요! 다음 주에 제주도 여행을 계획 중인 30대 남성입니다.
렌트카를 예약해놓았는데, 같이 여행할 동행을 구합니다.

### 여행 정보
- 기간: 2025년 4월 29일 ~ 5월 2일 (3박 4일)
- 장소: 제주도 전역
- 교통: 렌트카 (중형 SUV)
- 숙소: 서귀포시 호텔 (2인 1실, 트윈베드)

### 여행 계획
- 1일차: 제주 동부 (성산일출봉, 우도, 섭지코지)
- 2일차: 제주 남부 (중문관광단지, 천지연폭포, 서귀포 맛집)
- 3일차: 제주 서부 (협재해변, 한림공원, 오설록)
- 4일차: 제주 북부 (한라산, 제주시내)

### 여행 스타일
- 아침 일찍 출발해서 많은 곳을 다니는 것을 선호합니다.
- 사진 찍는 것을 좋아합니다.
- 맛집 탐방에 관심이 많습니다.
- 드라이브를 좋아합니다.

### 동행 조건
- 20-30대 남녀 무관
- 여행 일정에 맞출 수 있는 분
- 운전 가능하시면 더 좋습니다 (필수는 아님)
- 여행 경비는 1/N로 나눠서 계산할 예정입니다.

관심 있으신 분은 댓글이나 쪽지 주세요!
          `,
          images: [
            "/placeholder.svg?height=400&width=600&query=Jeju Seongsan Ilchulbong",
            "/placeholder.svg?height=400&width=600&query=Jeju Hyeopjae Beach",
          ],
        },
      ]

      // 게시글 ID에 해당하는 게시글 찾기
      const foundPost = allPosts.find((post) => post.id === postId)

      if (foundPost) {
        setPost(foundPost)

        // 댓글 데이터 생성 (데모용)
        const demoComments = [
          {
            id: 1,
            author: "여행초보",
            authorImage: "/abstract-profile-two.png",
            content: "정말 유용한 정보 감사합니다! 다음 달에 도쿄 여행 갈 예정인데 많은 도움이 될 것 같아요.",
            date: "2025년 4월 19일",
            likes: 5,
          },
          {
            id: 2,
            author: "일본마니아",
            authorImage: "/abstract-profile-two.png",
            content: "스이카 카드는 정말 필수인 것 같아요. 저도 도쿄 갈 때마다 항상 사용하는데 너무 편리해요!",
            date: "2025년 4월 19일",
            likes: 3,
          },
          {
            id: 3,
            author: "세계여행자",
            authorImage: "/abstract-profile-two.png",
            content: "혹시 도쿄에서 영어가 잘 통하나요? 일본어를 전혀 못해서 걱정이에요.",
            date: "2025년 4월 20일",
            likes: 0,
          },
        ]

        setComments(demoComments)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [postId])

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return

    const newCommentObj = {
      id: comments.length + 1,
      author: "나",
      authorImage: "/abstract-profile-two.png",
      content: newComment,
      date: "방금 전",
      likes: 0,
    }

    setComments([...comments, newCommentObj])
    setNewComment("")
  }

  const handleLike = () => {
    setLiked(!liked)
    if (!liked) {
      setPost({ ...post, likes: post.likes + 1 })
    } else {
      setPost({ ...post, likes: post.likes - 1 })
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#4dabf7] border-t-transparent"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-[#1e3a8a]">게시글을 찾을 수 없습니다</h2>
        <p className="mb-6 text-[#495057]">요청하신 게시글이 존재하지 않거나 삭제되었습니다.</p>
        <Button onClick={() => router.push("/community")} className="bg-[#4dabf7] text-white hover:bg-[#339af0]">
          커뮤니티로 돌아가기
        </Button>
      </div>
    )
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      {/* 헤더 */}
      <div className="mb-6 flex items-center">
        <Button variant="ghost" size="sm" className="mr-2 text-[#495057]" onClick={() => router.push("/community")}>
          <ArrowLeft className="mr-1 h-4 w-4" />
          목록으로
        </Button>
        <div className="ml-auto flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className={`${liked ? "bg-[#4dabf7] text-white" : "text-[#495057]"}`}
            onClick={handleLike}
          >
            <ThumbsUp className="mr-1 h-4 w-4" />
            좋아요 {post.likes}
          </Button>
          <Button variant="outline" size="sm" className="text-[#495057]">
            <Share2 className="mr-1 h-4 w-4" />
            공유하기
          </Button>
        </div>
      </div>

      {/* 게시글 제목 및 정보 */}
      <div className="mb-4">
        <div className="mb-2 flex flex-wrap gap-1">
          {post.tags.map((tag: string) => (
            <Badge key={tag} className="bg-[#e7f5ff] text-[#1c7ed6] hover:bg-[#d0ebff]">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="mb-2 text-2xl font-bold text-[#1e3a8a]">{post.title}</h1>
        <div className="flex items-center justify-between text-sm text-[#495057]">
          <div className="flex items-center">
            <Avatar className="mr-2 h-6 w-6">
              <AvatarImage src={post.authorImage || "/placeholder.svg"} alt={post.author} />
              <AvatarFallback>{post.author[0]}</AvatarFallback>
            </Avatar>
            <span className="mr-3">{post.author}</span>
            <Clock className="mr-1 h-3 w-3 text-[#4dabf7]" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Eye className="mr-1 h-3 w-3 text-[#4dabf7]" />
            <span>{post.views}</span>
          </div>
        </div>
      </div>

      <Separator className="my-4 bg-[#e9ecef]" />

      {/* 게시글 내용 */}
      <div className="mb-8">
        <div
          className="prose max-w-none prose-headings:text-[#1e3a8a] prose-a:text-[#4dabf7]"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br>") }}
        />

        {/* 이미지 */}
        {post.images && post.images.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {post.images.map((image: string, index: number) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`게시글 이미지 ${index + 1}`}
                  className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <Separator className="my-6 bg-[#e9ecef]" />

      {/* 댓글 섹션 */}
      <div>
        <h3 className="mb-4 flex items-center text-lg font-bold text-[#1e3a8a]">
          <MessageSquare className="mr-2 h-5 w-5 text-[#4dabf7]" />
          댓글 {comments.length}개
        </h3>

        {/* 댓글 작성 */}
        <div className="mb-6 flex items-start space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/abstract-profile-two.png" alt="내 프로필" />
            <AvatarFallback>나</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="댓글을 작성해주세요..."
              className="mb-2 resize-none border-[#d0ebff] focus-visible:ring-[#4dabf7]"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button className="ml-auto bg-[#4dabf7] text-white hover:bg-[#339af0]" onClick={handleCommentSubmit}>
              댓글 작성
            </Button>
          </div>
        </div>

        {/* 댓글 목록 */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="rounded-lg bg-[#f8f9fa] p-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="mr-2 h-6 w-6">
                    <AvatarImage src={comment.authorImage || "/placeholder.svg"} alt={comment.author} />
                    <AvatarFallback>{comment.author[0]}</AvatarFallback>
                  </Avatar>
                  <span className="mr-2 font-medium text-[#1e3a8a]">{comment.author}</span>
                  <span className="text-xs text-[#868e96]">{comment.date}</span>
                </div>
                <Button variant="ghost" size="sm" className="h-6 text-[#495057]">
                  <ThumbsUp className="mr-1 h-3 w-3" />
                  {comment.likes}
                </Button>
              </div>
              <p className="text-[#495057]">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
