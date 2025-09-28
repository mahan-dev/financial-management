import React from "react";

interface DashboardProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardProps) => {
  return <div>
    <h1>layout</h1>
    {children}
    <h3>layout</h3>
    </div>;
};

export default DashboardLayout;
