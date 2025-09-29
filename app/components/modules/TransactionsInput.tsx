"use client";
import React, { FormEvent, useState } from "react";
import TextInput from "@/modules/TextInput";
import styles from "@/modules/styles/transactionsInput/route.module.css";
import Categories from "@/modules/Categories";
import { FormValues } from "@/modules/interface/FormValues";
import { addHandler } from "@/app/helper/transactionInput/AddHandler";
import Loader from "@/app/loader/Loader";
import DatePicker from "@/app/components/modules/CustomDatePicker";

const TransactionsInput = () => {
  const [form, setForm] = useState<FormValues>({
    title: "",
    description: "",
    price: "",
    category: ["none"],
    transactionDate: new Date(),
  });

  const [loading, setLoading] = useState<boolean>(false);

  const inputValues = [
    {
      id: "title",
      name: "title",
      title: "عنوان تراکنش",
      type: "text",
    },
    {
      id: "description",
      name: "description",
      title: "توضیحات",
      type: "text",
    },
    {
      id: "price",
      name: "price",
      title: " مبلغ ",
      type: "text",
    },
  ];

  type FormKeys = keyof typeof form;
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name as FormKeys]: value });
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addHandler({ form, setForm, setLoading });
  };

  return (
    <section className={styles.container}>
      <form onSubmit={submitHandler}>
        {inputValues.map((item) => {
          const { name, title, type } = item;
          return (
            <TextInput
              key={title}
              name={name}
              title={title}
              type={type}
              onChange={changeHandler}
              value={form[name]}
            />
          );
        })}

        <Categories
          form={form}
          setForm={setForm}
          name="category"
          label="دسته بندی"
        />
        <DatePicker form={form} setForm={setForm} title="تاریخ تراکنش" />

        {loading ? (
          <Loader />
        ) : (
          <button type="submit" disabled={loading}>
            ذخیره تراکنش
          </button>
        )}
      </form>
    </section>
  );
};

export default TransactionsInput;
