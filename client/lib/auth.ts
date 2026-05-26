"use client";

import { api } from "@/lib/api";
import { ApiResponse, AuthUser, UserRole } from "@/types";
import { AxiosError } from "axios";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
  specialisation?: string;
  licenseNumber?: string;
  organisationName?: string;
  registrationNumber?: string;
  institutionName?: string;
  institutionAddress?: string;
  latitude?: number;
  longitude?: number;
}

interface AuthResponseData {
  user: AuthUser;
}

export function getErrorMessage(error: unknown) {
  const axiosError = error as AxiosError<{ message?: string | string[] }>;
  const message = axiosError.response?.data?.message;

  if (Array.isArray(message)) {
    return message.join(", ");
  }

  return message ?? "Something went wrong.";
}

export async function loginUser(payload: LoginCredentials) {
  const response = await api.post<ApiResponse<AuthResponseData>>("/auth/login", payload);
  return response.data.data.user;
}

export async function registerUser(payload: RegisterPayload) {
  const response = await api.post<ApiResponse<AuthResponseData>>("/auth/register", payload);
  return response.data.data.user;
}

export async function logoutUser() {
  await api.post("/auth/logout");
}

export async function refreshSession() {
  const response = await api.post<ApiResponse<AuthResponseData>>("/auth/refresh");
  return response.data.data.user;
}

export async function getCurrentUser() {
  const response = await api.get<ApiResponse<AuthUser>>("/auth/me");
  return response.data.data;
}

export async function verifyCurrentUser() {
  try {
    return await getCurrentUser();
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response?.status !== 401) {
      throw error;
    }

    await refreshSession();
    return getCurrentUser();
  }
}
