import React from "react";
import DashboardPage from "@/templates/DashboardAsidePage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/helper/auth/authOption";
import { redirect } from "next/navigation";

interface DashboardProps {
  children: React.ReactNode;
}
const DashboardLayout = async({ children }: DashboardProps) => {
  const session = await getServerSession(authOptions)
  if(!session) redirect("/signup")
  return <DashboardPage>{children}</DashboardPage>;
};

export default DashboardLayout;
