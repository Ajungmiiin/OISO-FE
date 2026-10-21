import { useAuthCheck } from '@/hooks/use-auth-check'

import { useAuthStore } from '@/stores/auth-store'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

const GUEST_ALLOWED_PATHS = ['/', '/place', '/course']

export const Route = createFileRoute('/(authentication)')({
  // 렌더 사이클 밖(라우팅 매칭)에서 접근 제어 → useLocation/Navigate 없이 무한 루프 위험 없음.
  // persist된 role을 동기로 읽어 즉시 판정(me를 기다리지 않음). user 세션 유효성은
  // RouteComponent의 useAuthCheck가 background로 재판정한다.
  beforeLoad: ({ location }) => {
    const role = useAuthStore.getState().role

    if (role === null) {
      throw redirect({ to: '/login' })
    }

    if (role === 'guest') {
      if (!GUEST_ALLOWED_PATHS.includes(location.pathname)) {
        throw redirect({ to: '/login' })
      }
    }
  },

  component: RouteComponent,
})

function RouteComponent() {
  // role 스토어 동기화용 (beforeLoad와 동일 쿼리 캐시를 공유해 추가 요청은 없음)
  useAuthCheck()
  return <Outlet />
}
