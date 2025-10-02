import React from "react";
import styles from "@/templates/styles/addTransactionsPage/route.module.css";
import TransactionsInput from "@/modules/TransactionsInput";
import { ProfileSchema } from "@/models/profile";

interface AddProps {
  data?: ProfileSchema;
  title?: string;
  button?: string;
}
const AddTransactionsPage = ({ data, title, button }: AddProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>
        {title ? title : "ثبت تراکنش"}
      </h2>
      <TransactionsInput
        data={data &&JSON.parse(JSON.stringify(data))}
        button={button}
      />
    </div>
  );
};

export default AddTransactionsPage;
