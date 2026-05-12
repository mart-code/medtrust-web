'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthUser, UserRole } from '@/types';
import { api, setTokens, clearTokens } from '@/lib/api';

interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  isLoading: boolean;
  setUser: (user: AuthUser | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchMe: () => Promise<void>;
  isAuthenticated: () => boolean;
  hasRole: (role: UserRole) => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      isLoading: false,

      setUser: (user) => set({ user }),

      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const { data } = await api.post('/auth/login', { email, password });
          const { accessToken, refreshToken } = data.data ?? data;
          setTokens(accessToken, refreshToken);
          set({ accessToken });
          await get().fetchMe();
        } finally {
          set({ isLoading: false });
        }
      },

      logout: async () => {
        try {
          const { default: Cookies } = await import('js-cookie');
          const refreshToken = Cookies.get('refresh_token');
          if (refreshToken) {
            await api.post('/auth/logout', { refreshToken }).catch(() => {});
          }
        } finally {
          clearTokens();
          set({ user: null, accessToken: null });
        }
      },

      fetchMe: async () => {
        try {
          const { data } = await api.get('/auth/me');
          set({ user: data.data ?? data });
        } catch {
          set({ user: null });
        }
      },

      isAuthenticated: () => !!get().user,

      hasRole: (role) => get().user?.role === role,
    }),
    {
      name: 'medtrust-auth',
      partialize: (state) => ({ user: state.user, accessToken: state.accessToken }),
    },
  ),
);
