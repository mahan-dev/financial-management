"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import styles from "@/modules/styles/registerForm.module.css";
import { formAuth } from "@/templates/interface/formInterface";

interface RegisterProps {
  title: string;
  submitHandler: (e: React.FormEvent) => void;
  form: formAuth;
  setForm: React.Dispatch<SetStateAction<formAuth>>;
  rePassword?: boolean;
  button: string;
}
const RegisterForm = ({
  title,
  submitHandler,
  form,
  setForm,
  rePassword,
  button,
}: RegisterProps) => {
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

        <form className={styles.container__form} onSubmit={submitHandler}>
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
          {rePassword && (
            <>
              <label htmlFor="rePassword">تکرار رمزعبور</label>
              <input
                type="text"
                id="rePassword"
                name="rePassword"
                placeholder="تکرار رمزعبور"
                onChange={changeHandler}
              />
            </>
          )}
          <button className="mt-4" type="submit">
            {button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
