import React from "react";
import SideBar from "@/modules/SideBar";

interface DashboardProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardProps) => {
  return (
    <div className="mt-12">
      <aside>
        <SideBar />
      </aside>

      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
