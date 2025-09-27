import React from "react";
import Link from "next/link";

import RegisterForm from "@/modules/RegisterForm";
import styles from "@/templates/styles/signupPage/route.module.css"

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <RegisterForm title={" فرم ثبت نام "} />

      <span className={styles.container__footer}>
        آیا حساب کاربری دارید ؟<Link href={"/signin"}>ورود</Link>
      </span>
    </div>
  );
};

export default SignupPage;
