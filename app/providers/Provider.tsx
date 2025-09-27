"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Toaster } from "react-hot-toast";

interface ProviderProps {
  children: React.ReactNode;
}
const Provider = ({ children }: ProviderProps) => {
  return (
    <>
      <SessionProvider>
        {children}
        <Toaster />
      </SessionProvider>
    </>
  );
};

export default Provider;
