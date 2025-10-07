"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { defaultOptions } from "@/configs/reactQuery";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const queryClient = new QueryClient({
    defaultOptions,
  });
  return (
    <>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <Toaster />
      </SessionProvider>
    </>
  );
};

export default Provider;
