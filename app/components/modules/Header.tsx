import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "@/layout/styles/route.module.css";
import { useSession } from "next-auth/react";

import { HiMenuAlt2 } from "react-icons/hi";
import SideBarContent from "./SideBarContent";

const Header = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { data } = useSession();

  const clickHandler = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!show) return;
      console.log("hi");
      if (menuRef.current.contains(target)) return;
      console.log("hi");
      setShow(false);

      document.addEventListener("click", clickHandler);
      return () => {
        document.removeEventListener("click", clickHandler);
      };
    },
    [show]
  );

  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [clickHandler]);

  return (
    <header className={styles.container__header}>
      <ul>
        <li>
          <Link href={"/"}>صفحه اصلی</Link>
        </li>
      </ul>

      <div className={styles.container__status}>
        <Link href={"/signup"}>ورود</Link>
        <HiMenuAlt2 onClick={() => setShow(!show)} />
      </div>

      <div
        className={`${styles["container__sidebar-display"]} ${
          show ? "translate-x-0" : "-translate-x-full"
        } `}
        ref={menuRef}
      >
        <SideBarContent email={data?.user.email} show={show} setShow={setShow} />
      </div>
    </header>
  );
};

export default Header;
