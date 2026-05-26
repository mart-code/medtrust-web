"use client";

import {
  LoginCredentials,
  RegisterPayload,
  getErrorMessage,
  loginUser,
  logoutUser,
  registerUser,
  verifyCurrentUser,
} from "@/lib/auth";
import { queryClient } from "@/lib/query-client";
import { AuthUser, UserRole } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { toast } from "react-toastify";

const AUTH_QUERY_KEY = ["auth", "current-user"] as const;

const ROLE_DASHBOARDS: Record<UserRole, string> = {
  patient: "/patient/dashboard",
  doctor: "/doctor/dashboard",
  organisation: "/organisation/dashboard",
  institution: "/institution/dashboard",
  super_admin: "/admin/dashboard",
};

type AuthStatus = "loading" | "authenticated" | "unauthenticated";

interface AuthContextValue {
  user: AuthUser | null;
  status: AuthStatus;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: LoginCredentials) => Promise<AuthUser>;
  register: (payload: RegisterPayload) => Promise<AuthUser>;
  logout: () => Promise<void>;
  verifyToken: () => Promise<AuthUser | null>;
  getDashboardPath: (role?: UserRole | null) => string;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const authQuery = useQuery({
    queryKey: AUTH_QUERY_KEY,
    queryFn: verifyCurrentUser,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (user) => {
      queryClient.setQueryData(AUTH_QUERY_KEY, user);
      toast.success("Login successful!");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (user) => {
      queryClient.setQueryData(AUTH_QUERY_KEY, user);
      toast.success("Account created successfully.");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.setQueryData(AUTH_QUERY_KEY, null);
      toast.success("Signed out successfully.");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
    onSettled: () => {
      queryClient.removeQueries({ queryKey: AUTH_QUERY_KEY });
      setIsLoggingOut(false);
    },
  });

  useEffect(() => {
    if (!authQuery.isError || isLoggingOut) {
      return;
    }

    queryClient.setQueryData(AUTH_QUERY_KEY, null);
  }, [authQuery.isError, isLoggingOut, queryClient]);

  const value = useMemo<AuthContextValue>(() => {
    const user = authQuery.data ?? null;
    const isLoading =
      authQuery.isLoading ||
      authQuery.isFetching ||
      loginMutation.isPending ||
      registerMutation.isPending ||
      logoutMutation.isPending;

    return {
      user,
      status: user ? "authenticated" : isLoading ? "loading" : "unauthenticated",
      isAuthenticated: Boolean(user),
      isLoading,
      login: loginMutation.mutateAsync,
      register: registerMutation.mutateAsync,
      logout: async () => {
        setIsLoggingOut(true);
        await logoutMutation.mutateAsync();
        router.push("/login");
      },
      verifyToken: async () => {
        try {
          return await queryClient.fetchQuery({
            queryKey: AUTH_QUERY_KEY,
            queryFn: verifyCurrentUser,
            staleTime: 0,
          });
        } catch {
          queryClient.setQueryData(AUTH_QUERY_KEY, null);
          return null;
        }
      },
      getDashboardPath: (role) => {
        if (!role) {
          return "/login";
        }

        return ROLE_DASHBOARDS[role];
      },
    };
  }, [
    authQuery.data,
    authQuery.isFetching,
    authQuery.isLoading,
    loginMutation.mutateAsync,
    loginMutation.isPending,
    logoutMutation.mutateAsync,
    logoutMutation.isPending,
    queryClient,
    registerMutation.mutateAsync,
    registerMutation.isPending,
    router,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export function resetAuthCache() {
  queryClient.removeQueries({ queryKey: AUTH_QUERY_KEY });
}
