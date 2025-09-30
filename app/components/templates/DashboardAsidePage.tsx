import React from "react";
import SideBar from "@/modules/SideBar";
import styles from "@/templates/styles/dashboardPage/route.module.css";

import { getServerSession } from "next-auth";
import { authOptions } from "@/helper/auth/authOption";

interface DashboardProps {
  children: React.ReactNode;
}
const DashboardAsidePage = async ({ children }: DashboardProps) => {
  const session = await getServerSession(authOptions);

  return (
    <section className={styles.container}>
      <SideBar email={session.user.email} />
      <div className="w-full">{children}</div>
    </section>
  );
};

export default DashboardAsidePage;
