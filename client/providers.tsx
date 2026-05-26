"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import { AuthProvider } from "@/components/providers/auth-provider";
import { ToastContainer } from "react-toastify";

 function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {" "}
      {children}
      <ToastContainer position="top-center" autoClose={3000} theme="light" />
    </>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastProvider>{children}</ToastProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
