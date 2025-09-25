"use client";
import React from "react";
import styles from "@/layout/styles/route.module.css";
import Link from "next/link";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <section className={styles.container}>
      <header className={styles.container__header}>

        <ul>
          <li>
            <Link href={""}>صفحه اصلی</Link>
          </li>
        </ul>

        <span>ورود</span>
      </header>

      <main className="min-h-[100vh]">{children}</main>

      <footer className={styles.container__footer}>فوتر</footer>
    </section>
  );
};

export default layout;
