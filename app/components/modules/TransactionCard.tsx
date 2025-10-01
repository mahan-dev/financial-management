"use client";
import React from "react";

import { Profile } from "@/helper/myTransactions/ProfileHandler";
import styles from "@/modules/styles/transactionCard/route.module.css";
import { sp } from "@/utils/ReplaceNumber";

interface CardProps {
  profile: Profile[];
}

const TransactionCard = ({ profile }: CardProps) => {
  
  return (
    <div className={styles.container}>
      {profile.map(({ title, description, price, _id }) => (
        <div className={styles.container__card} key={_id.toString()}>
          <div className={styles.card__content}>
            <span className={styles.card__title}>{title}</span>
            <p>{description}</p>
            <p>{sp(price)}</p>
          </div>

          <div className={styles.card__footer}>
            <button className={styles.card__edit}>ویرایش</button>
            <button className={styles.card__delete}>حذف</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionCard;
