"use client";
import React, { useState } from "react";
import Link from "next/link";

import RegisterForm from "@/modules/RegisterForm";
import styles from "@/templates/styles/signinPage/route.module.css";
import { signInHandler } from "@/helper/signIn/signinHandler";

const SignInPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form;

    await signInHandler({ email, password });
  };
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
