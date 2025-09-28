"use client";
import React, { SetStateAction } from "react";
import { formAuth } from "@/templates/interface/formInterface";
import styles from "@/modules/styles/register/route.module.css";
import Loader from "@/app/loader/Loader";

interface RegisterProps {
  title: string;
  submitHandler: (e: React.FormEvent) => void;
  form: formAuth;
  setForm: React.Dispatch<SetStateAction<formAuth>>;
  loading: boolean;
  rePassword?: boolean;
  button: string;
}
const RegisterForm = ({
  title,
  submitHandler,
  form,
  setForm,
  loading,
  rePassword,
  button,
}: RegisterProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <h2 className={styles.content_title}>{title}</h2>

        <form className={styles.container__form} onSubmit={submitHandler}>
          <label htmlFor="email">ایمیل :</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="ایمیل"
            onChange={changeHandler}
          />
          <label htmlFor="password">رمزعبور :</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="رمزعبور"
            onChange={changeHandler}
          />
          {rePassword && (
            <>
              <label htmlFor="rePassword">تکرار رمزعبور :</label>
              <input
                type="password"
                id="rePassword"
                name="rePassword"
                placeholder="تکرار رمزعبور"
                onChange={changeHandler}
              />
            </>
          )}
          <>
            {loading ? (
              <Loader />
            ) : (
              <button className="mt-4" type="submit">
                {button}
              </button>
            )}
          </>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
