"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import styles from "@/templates/styles/signinPage/route.module.css";
import RegisterForm from "@/modules/RegisterForm";
import { signInHandler } from "@/helper/signIn/signinHandler";

const SignInPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form;

    const res = await signInHandler({ email, password, setLoading });
    if (res) router.push("/dashboard");
  };
  return (
    <div className={styles.container}>
      <RegisterForm
        submitHandler={submitHandler}
        form={form}
        setForm={setForm}
        loading={loading}
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
