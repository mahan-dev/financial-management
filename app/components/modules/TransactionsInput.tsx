"use client";
import React, { useEffect, useState } from "react";
import TextInput from "@/modules/TextInput";
import styles from "@/modules/styles/transactionsInput/route.module.css";

const TransactionsInput = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  });

  const inputValues = [
    {
      name: "title",
      title: "عنوان تراکنش",
      type: "text",
    },
    {
      name: "description",
      title: "توضحیات",
      type: "text",
    },
    {
      name: "price",
      title: " مبلغ ",
      type: "text",
    },
  ];

  type FormKeys = keyof typeof form;
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name)
    setForm({ ...form, [name as FormKeys]: value });
  };

  useEffect(() => {
    console.log(form);
    
  }, [form]);

  return (
    <section className={styles.container}>
      <form action="">
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
        <button type="submit"></button>
      </form>
    </section>
  );
};

export default TransactionsInput;
