"use client";
import React, { useState } from "react";
import Link from "next/link";

import RegisterForm from "@/modules/RegisterForm";
import styles from "@/templates/styles/signupPage/route.module.css";
import { signupHandler } from "@/app/helper/signUp/signupHandler";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signupHandler({ form, setLoading });
    if(res) router.push("/signin")
  };
  return (
    <div className={styles.container}>
      <RegisterForm
        submitHandler={submitHandler}
        form={form}
        setForm={setForm}
        loading={loading}
        title={" فرم ثبت نام "}
        rePassword={true}
        button="ثبت نام"
      />

      <span className={styles.container__footer}>
        آیا حساب کاربری دارید ؟<Link href={"/signin"}>ورود</Link>
      </span>
    </div>
  );
};

export default SignupPage;
