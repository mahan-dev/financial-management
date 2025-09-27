"use client";
import React, { useEffect, useState } from "react";
import styles from "@/modules/styles/registerForm.module.css";

interface RegisterProps {
  title: string;
}
const RegisterForm = ({ title }: RegisterProps) => {
  const [form, setForm] = useState({ email: "", password: "", rePassword: "" });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <h2>{title}</h2>

        <form className={styles.container__form}>
          <label htmlFor="email">ایمیل :</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="ایمیل"
            onChange={changeHandler}
          />
          <label htmlFor="password">رمزعبور</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="رمزعبور"
            onChange={changeHandler}
          />
          <label htmlFor="rePassword">تکرار رمزعبور</label>
          <input
            type="text"
            id="rePassword"
            name="rePassword"
            placeholder="تکرار رمزعبور"
            onChange={changeHandler}
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
