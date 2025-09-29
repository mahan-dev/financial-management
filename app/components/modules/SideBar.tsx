import React from "react";
import Link from "next/link";

import { RiAccountBox2Fill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiAddBoxFill } from "react-icons/ri";
import { IoExit } from "react-icons/io5";
import styles from "@/modules/styles/sidebar/route.module.css";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.container__list}>
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
          <Link href={"/dashboard/add-transactions"}>
            <IoExit />
            خروج
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
