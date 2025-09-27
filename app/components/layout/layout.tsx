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

        <Link href={"/signup"}>ورود</Link>
      </header>

      <main className="min-h-[100vh]">{children}</main>

      <footer className={styles.container__footer}>
        <p className="w-[70%] max-sm:w-auto">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد.
        </p>

        <ul className={styles.footer__list}>
          <li>
            <Link href={"/"}>مدیریت آسان</Link>
          </li>
          <li>
            <Link href={"/"}>مدیریت مالی</Link>
          </li>
          <li>
            <Link href={"/"}>مدیریت سرمایه</Link>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default layout;
