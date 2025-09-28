"use client";
import React from "react";
import styles from "@/layout/styles/route.module.css";
import Header from "@/modules/Header";
import Footer from "@/modules/Footer";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <section className={styles.container}>
      
      <Header />
      <main className="min-h-[100vh]">{children}</main>
      
      <Footer />
    </section>
  );
};

export default layout;
