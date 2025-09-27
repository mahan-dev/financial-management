"use client";
import React, { useState } from "react";
import Link from "next/link";

import RegisterForm from "@/modules/RegisterForm";
import styles from "@/templates/styles/signupPage/route.module.css";
import axios from "axios";
import { formAuth } from "@/templates/interface/formInterface";
import { signupHandler } from "@/app/helper/signUp/signupHandler";

const SignupPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await signupHandler({form})
  };
  return (
    <div className={styles.container}>
      <RegisterForm
        submitHandler={submitHandler}
        form={form}
        setForm={setForm}
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
