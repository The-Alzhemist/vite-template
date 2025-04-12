import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  AuthenticationSlice,
  createAuthenticationSlice,
} from './authenticationSlice'

export interface AppStore extends AuthenticationSlice {}
export const useAppStore = create<AppStore>()(
  persist(
    (set, get, api) => ({
      ...createAuthenticationSlice(set, get, api),
    }),
    {
      name: 'persist:authentication',
      partialize: state => ({
        isAuth: state.isAuth,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    }
  )
)
