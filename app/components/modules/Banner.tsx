import React from "react";
import Image from "next/image";

import styles from "@/modules/styles/banner/route.module.css";

import pic from "@/public/images/pic-1.jpg";

interface BannerPros {
  title: string;
}
const Banner = ({ title }: BannerPros) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>{title} </h2>

      <div className={styles.container__content}>
        <Image
          src={pic}
          alt={"عکس بنر"}
          width={250}
          height={200}
          sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         250px"
        />

        <p>
          مدیریت مالی فرآیندی است که با برنامه‌ریزی، سازمان‌دهی، هدایت و کنترل
          منابع مالی به منظور دستیابی به اهداف سازمانی سر و کار دارد. در این
          حوزه، تحلیل جریان‌های نقدی، کنترل هزینه‌ها و پیش‌بینی درآمدها نقش
          اساسی دارند. متخصصان مدیریت مالی با ارزیابی وضعیت اقتصادی،
          سرمایه‌گذاری‌های سودآور را شناسایی کرده و راهکارهایی برای افزایش
          بهره‌وری و کاهش ریسک ارائه می‌دهند. همچنین، مدیریت صحیح بودجه می‌تواند
          از بروز بحران‌های مالی جلوگیری کرده و رشد پایدار کسب‌وکار را تضمین
          کند. امروزه با پیشرفت فناوری و گسترش بازارهای جهانی، مدیریت مالی
          نیازمند استفاده از ابزارهای نوین مانند نرم‌افزارهای تحلیلی، داده‌کاوی
          و هوش مصنوعی است تا بتواند تصمیمات دقیق‌تری در شرایط پیچیده اقتصادی
          اتخاذ نماید.
        </p>
      </div>
    </div>
  );
};

export default Banner;
