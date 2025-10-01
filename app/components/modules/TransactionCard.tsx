"use client";
import React from "react";
import { Profile } from "@/helper/myTransactions/ProfileHandler";
import { sp } from "@/utils/ReplaceNumber";

import styles from "@/modules/styles/transactionCard/route.module.css";
import { deleteCard } from "@/helper/transactionCard/deleteHandler";
import { useRouter } from "next/navigation";

interface CardProps {
  profile: Profile[];
}

const TransactionCard = ({ profile }: CardProps) => {
  const router = useRouter();
  const editHandler = async (id: string) => {
    router.push(`/dashboard/my-transactions/${id}`);
  };

  const deleteHandler = async (id: string) => {
    const res = await deleteCard(id);
    console.log(res);
  };

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
            <button
              className={styles.card__edit}
              onClick={() => editHandler(_id)}
            >
              ویرایش
            </button>
            <button
              className={styles.card__delete}
              onClick={() => deleteHandler(_id)}
            >
              حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionCard;
