"use client";
import React from "react";
import { Profile } from "@/helper/myTransactions/ProfileHandler";
import { sp } from "@/utils/ReplaceNumber";

import styles from "@/modules/styles/transactionCard/route.module.css";
import { deleteCard } from "@/helper/transactionCard/deleteHandler";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

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
    if (res) {
      toast.success("پاک شد");
      router.refresh();
    }
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

          <Link href={`/dashboard/my-transactions/detailsPage/${_id}`} className="bg-blue-100 text-blue-600 rounded-md px-2 py-1">
            مشخصات
          </Link>

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
