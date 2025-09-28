import React from "react";
import Link from "next/link";

import { RiAccountBox2Fill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiAddBoxFill } from "react-icons/ri";
import styles from "@/modules/styles/sidebar/route.module.css";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.container__list}>
        <li>
          <Link href={""}>
            <RiAccountBox2Fill />
            حساب کابری
          </Link>
        </li>
        <li>
          <Link href={""}>
            <FaMoneyBillTransfer />
            تراکنش های من
          </Link>
        </li>
        <li>
          <Link href={""}>
          <RiAddBoxFill />
          ثبت تراکنش
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default SideBar;
