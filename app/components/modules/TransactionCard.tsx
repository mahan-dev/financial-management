"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { Profile } from "@/helper/myTransactions/ProfileHandler";
import { deleteCard } from "@/helper/transactionCard/deleteHandler";
import styles from "@/modules/styles/transactionCard/route.module.css";

import { sp } from "@/utils/ReplaceNumber";
import { HiArrowNarrowLeft } from "react-icons/hi";

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

          <Link
            href={`/dashboard/my-transactions/detailsPage/${_id}`}
            className={styles.card__link}
          >
            مشخصات
            <HiArrowNarrowLeft />
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
