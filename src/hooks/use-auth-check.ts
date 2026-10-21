import { useQuery } from '@tanstack/react-query'
import { useAuthStore } from '@/stores/auth-store'
import { checkAuth } from '@/api/auth'
import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'

export function useAuthCheck() {
  const authRole = useAuthStore((s) => s.role)
  const logout = useAuthStore((s) => s.logout)
  const navigate = useNavigate()

  const { data: authenticated } = useQuery({
    queryKey: ['auth', 'check'],
    queryFn: checkAuth,
    retry: false,
    enabled: authRole === 'user',
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  })

  useEffect(() => {
    // user인데 me가 false → refresh까지 실패한 진짜 비로그인. 세션 종료 처리.
    if (authRole === 'user' && authenticated === false) {
      logout()
      navigate({ to: '/login', replace: true })
    }
  }, [authRole, authenticated, logout, navigate])
}
