import React from "react";
import styles from "@/templates/styles/addTransactionsPage/route.module.css";
import TransactionsInput from "@/modules/TransactionsInput";

const AddTransactionsPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}> ثبت تراکنش </h2>
      <TransactionsInput />
    </div>
  );
};

export default AddTransactionsPage;
