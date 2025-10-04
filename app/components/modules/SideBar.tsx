"use client";
import React from "react";

import styles from "@/modules/styles/sidebar/route.module.css";
import SideBarContent from "@/modules/SideBarContent";

interface SidebarProps {
  email: string;
}
const SideBar = ({ email }: SidebarProps) => {
  return (
    <div className={styles.container}>
      <SideBarContent email={email} />
    </div>
  );
};

export default SideBar;
