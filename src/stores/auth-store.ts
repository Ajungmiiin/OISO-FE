import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type AuthRole = 'user' | 'guest' | null

interface AuthStoreState {
  role: AuthRole
  logout: () => void
  setAuthRole: (role: AuthRole) => void
}

// role을 localStorage에 유지 → 새로고침에도 로그인/게스트 상태가 유지됨.
// user 세션 유효성은 /api/auth/me(background) + axios 인터셉터가 재판정한다.
export const useAuthStore = create<AuthStoreState>()(
  persist(
    (set) => ({
      role: null,
      logout: () =>
        set(() => ({
          role: null,
        })),
      setAuthRole: (role) =>
        set(() => ({
          role,
        })),
    }),

    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ role: state.role }),
    },
  ),
)

export const useAuth = () => {
  const role = useAuthStore((state) => state.role)

  return {
    role,
    isLoggedIn: role === 'user',
    isGuest: role === 'guest',
  }
}
