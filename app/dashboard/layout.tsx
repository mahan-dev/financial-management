import React from "react";
import DashboardPage from "@/app/components/templates/DashboardAsidePage";

interface DashboardProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardProps) => {
  return <DashboardPage>{children}</DashboardPage>;
};

export default DashboardLayout;
