import React from "react";
import styles from "@/templates/styles/addTransactionsPage/route.module.css";
import TransactionsInput from "@/modules/TransactionsInput";
import { ProfileSchema } from "@/models/profile";

interface AddProps {
  data: ProfileSchema;
}
const AddTransactionsPage = ({ data }: AddProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}> ثبت تراکنش </h2>
      <TransactionsInput data={JSON.parse(JSON.stringify(data))} />
    </div>
  );
};

export default AddTransactionsPage;
