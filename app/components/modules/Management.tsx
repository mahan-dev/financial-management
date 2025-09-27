import React from "react";
import styles from "@/modules/styles/management.module.css";
import Image from "next/image";
import pic from "@/public/images/pic-2.jpg";

interface ManagementProps {
  title: string;
}
const Management = ({ title }: ManagementProps) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>


      <div className={styles.container__content}>
      <Image src={pic} alt="عکس مدیریت آسان" width={250} height={200}  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         250px" />
      <p>
        با مدیریت آسان کنترل کامل بر امور مالی خود داشته باشید. بودجه‌بندی،
        پیگیری درآمد و هزینه‌ها، گزارش‌گیری دقیق و تحلیل سرمایه‌گذاری‌ها، همه در
        یک پلتفرم ساده و کاربرپسند. دیگر نیازی به دفترچه‌های دستی و محاسبات
        پیچیده نیست؛ همه چیز به صورت خودکار و هوشمند مدیریت می‌شود. با ابزارهای
        پیشرفته‌ی ما، تصمیم‌گیری مالی سریع‌تر و مطمئن‌تر خواهد بود و می‌توانید
        با آرامش برنامه‌ریزی مالی خود را پیش ببرید. مدیریت آسان، راهکاری برای
        کنترل کامل، صرفه‌جویی در زمان و رشد مالی هوشمند شماست.
      </p>
      </div>
    </div>
  );
};

export default Management;
