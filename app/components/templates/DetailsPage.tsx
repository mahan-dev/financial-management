import React from "react";
import { FormValues } from "@/modules/interface/FormValues";
import styles from "@/templates/styles/detailsPage/route.module.css";

interface DetailsProps {
  data: FormValues;
}
const DetailsPage = ({ data }: DetailsProps) => {
  console.log(data);
  const { title, category, price, transactionDate } = data;
  const formattedDate = new Date(transactionDate).toLocaleDateString("fa-IR");
  return (
    <div className={styles.container}>
      <h2>تراکنش من</h2>

      <div className={styles.container__content}>
        <p> عنوان : {title}</p>
        <p>دسته بندی : {category}</p>
        <p>قیمت : {price}</p>
        <p>تاریخ ایجاد : {formattedDate}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
