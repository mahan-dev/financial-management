"use client";
import React from "react";
import Link from "next/link";

import styles from "@/modules/styles/sidebar/route.module.css";

import { RiAccountBox2Fill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiAddBoxFill } from "react-icons/ri";
import { IoExit } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { signOut } from "next-auth/react";

interface SidebarProps {
  email: string;
}
const SideBar = ({ email }: SidebarProps) => {
  return (
    <div className={styles.container}>
      <ul className={styles.container__list}>
        <div className="break-all border-b-2 pb-1 mb-1">
          <RiAccountCircleFill className="text-[2rem] m-auto mb-2" />
          <p className="break-all break-words">{email}</p>
        </div>

        <li>
          <Link href={"/dashboard"}>
            <RiAccountBox2Fill />
            حساب کابری
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/my-transactions"}>
            <FaMoneyBillTransfer />
            تراکنش های من
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/add-transactions"}>
            <RiAddBoxFill />
            ثبت تراکنش
          </Link>
        </li>
        <li className={styles.exit}>
          <Link href={"/dashboard/add-transactions"} onClick={() => signOut()}>
            <IoExit />
            خروج
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
