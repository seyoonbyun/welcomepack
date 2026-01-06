// LandingPage는 이제 DetailPage로 리다이렉트됩니다
// 레퍼런스 페이지는 단일 페이지 구조이므로 상세 페이지를 메인으로 사용합니다
import { useEffect } from 'react'
import { useLocation } from 'wouter'

export default function LandingPage() {
  const [, setLocation] = useLocation()
  
  useEffect(() => {
    // 랜딩 페이지 접근 시 상세 페이지로 리다이렉트
    setLocation('/detail')
  }, [setLocation])
  
  return null
}
