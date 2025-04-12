import { StateCreator } from 'zustand'

export interface AuthenticationSlice {
  accessToken?: string
  refreshToken?: string
  isAuth: boolean
  fromPath?: string
  logout: () => void
  tokenExpired: (fromPath: string) => void
  setToken: (accessToken: string, refreshToken: string) => void
}

const initialAuthState = {
  accessToken: undefined,
  refreshToken: undefined,
  isAuth: false,
  isRefreshing: false,
  fromPath: undefined,
}

export const createAuthenticationSlice: StateCreator<
  AuthenticationSlice
> = set => ({
  accessToken: undefined,
  refreshToken: undefined,
  fromPath: undefined,
  isAuth: false,
  logout: () => {
    set({ ...initialAuthState })
  },
  tokenExpired: (fromPath: string) => {
    set({ ...initialAuthState, fromPath })
  },
  setToken: (accessToken, refreshToken) => {
    set({
      ...initialAuthState,
      accessToken,
      refreshToken,
      isAuth: true,
    })
  },
})
