"use client";
import React, { useState } from "react";
import Link from "next/link";

import RegisterForm from "@/modules/RegisterForm";
import styles from "@/templates/styles/signinPage/route.module.css";

const SignInPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = () => {};
  return (
    <div className={styles.container}>
      <RegisterForm
        submitHandler={submitHandler}
        form={form}
        setForm={setForm}
        title="فرم ورود"
        button="ورود"
      />
      <span className={styles.container__footer}>
        آیا حساب کاربری ندارید ؟<Link href={"/signup"}>ثبت نام</Link>
      </span>
    </div>
  );
};

export default SignInPage;
