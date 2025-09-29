"use client";
import React, { FormEvent, useEffect, useState } from "react";
import TextInput from "@/modules/TextInput";
import styles from "@/modules/styles/transactionsInput/route.module.css";
import Categories from "@/modules/Categories";
import { FormValues } from "@/modules/interface/FormValues";

const TransactionsInput = () => {
  const [form, setForm] = useState<FormValues>({
    title: "",
    description: "",
    price: "",
    category:["none"],
  });

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
      title: "توضحیات",
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
    console.log(name);
    setForm({ ...form, [name as FormKeys]: [value] });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hi");
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

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
              value={form[name as FormKeys]}
            />
          );
        })}

        <Categories form={form} setForm={setForm} name="category" />

        <button type="submit"> ذخیره تراکنش </button>
      </form>
    </section>
  );
};

export default TransactionsInput;
