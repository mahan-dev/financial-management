import React from "react";
import SideBar from "@/modules/SideBar";
import styles from "@/templates/styles/dashboardPage/route.module.css";

interface DashboardProps {
  children: React.ReactNode;
}
const DashboardAsidePage = ({ children }: DashboardProps) => {
  return (
    <section className={styles.container}>
      <SideBar />
      <div className="w-full">{children}</div>
    </section>
  );
};

export default DashboardAsidePage;
