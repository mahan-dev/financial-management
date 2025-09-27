import React from "react";
import Link from "next/link";

import RegisterForm from "@/modules/RegisterForm";
import styles from "@/templates/styles/signinPage/route.module.css"

const SignInPage = () => {
  return (
    <div className={styles.container}>
      <RegisterForm title="فرم ورود" />
       <span className={styles.container__footer}>
        آیا حساب کاربری ندارید ؟<Link href={"/signin"}>ثبت نام</Link>
      </span>
    </div>
  );
};

export default SignInPage;
