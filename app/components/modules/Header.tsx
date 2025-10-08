"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import styles from "@/layout/styles/route.module.css";
import { useSession } from "next-auth/react";

import { HiMenuAlt2 } from "react-icons/hi";
import SideBarContent from "@/modules/SideBarContent";
import { MenuNavigation } from "@/modules/MenuNavigation";
import { MdAccountBox } from "react-icons/md";
const Header = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { data } = useSession();

  MenuNavigation({ show, setShow, menuRef });
  return (
    <header className={styles.container__header}>
      <ul>
        <li>
          <Link href={"/"}>صفحه اصلی</Link>
        </li>
      </ul>

      <div className={styles.container__status}>
        {data ? (
          <MdAccountBox className="text-[1.6rem] max-md:hidden" />
        ) : (
          <Link href={"/signup"}>ورود</Link>
        )}

        <span className={styles.status__menuNavigation}>
          <HiMenuAlt2 onClick={() => setShow(!show)} />
        </span>
      </div>

      <div
        className={`${styles["container__sidebar-display"]} ${
          show ? "translate-x-0" : "-translate-x-full"
        } `}
        ref={menuRef}
      >
        <SideBarContent
          email={data?.user.email}
          show={show}
          setShow={setShow}
        />
      </div>
    </header>
  );
};

export default Header;
