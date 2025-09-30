import Link from "next/link";
import React from "react";
import styles from "@/layout/styles/route.module.css";

const Header = () => {
  return (
    <header className={styles.container__header}>
      <ul>
        <li>
          <Link href={"/"}>صفحه اصلی</Link>
        </li>
      </ul>

      <Link href={"/signup"}>ورود</Link>
    </header>
  );
};

export default Header;
