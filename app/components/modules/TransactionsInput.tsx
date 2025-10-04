"use client";
import React, { FormEvent, useState } from "react";
import TextInput from "@/modules/TextInput";
import styles from "@/modules/styles/transactionsInput/route.module.css";
import Categories from "@/modules/Categories";
import { FormValues } from "@/modules/interface/FormValues";
import { addHandler } from "@/helper/transactionInput/AddHandler";
import Loader from "@/app/loader/Loader";
import DatePicker from "@/modules/CustomDatePicker";
import { ProfileSchema } from "@/models/profile";
import { editCard } from "@/app/helper/transactionCard/editHandler";

interface TransactionsData {
  data?: ProfileSchema;
  button?: string;
}

const TransactionsInput = ({ data, button }: TransactionsData) => {
  const [form, setForm] = useState<FormValues>({
    title: data?.title || "",
    description: data?.description || "",
    price: data?.price || "",
    category: data?.category || ["none"],
    transactionType: data?.transactionType || ["none"],
    transactionDate: data?.transactionDate || new Date(),
    _id: (data?._id as string) || "",
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
      textarea: true,
    },
    {
      id: "price",
      name: "price",
      title: " مبلغ ",
      type: "text",
    },
  ];

  const categoriesValue = [
    {
      form: form,
      setForm: setForm,
      name: "category",
      label: "دسته بندی",
    },
    {
      form: form,
      setForm: setForm,
      name: "transactionType",
      label: " نوع تراکنش ",
      transactionType: true,
    },
  ];

  type FormKeys = keyof typeof form;
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name as FormKeys]: value });
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data) {
      await editCard({ form, setLoading });
    } else if (!data) {
      await addHandler({ form, setForm, setLoading });
    }
  };

  return (
    <section className={styles.container}>
      <form onSubmit={submitHandler}>
        {inputValues.map((item) => {
          const { name, title, type, textarea } = item;
          return (
            <TextInput
              key={title}
              name={name}
              title={title}
              textarea={textarea}
              type={type}
              onChange={changeHandler}
              value={form[name]}
            />
          );
        })}

        {categoriesValue.map((item) => (
          <Categories
            key={item.name}
            form={item.form}
            setForm={item.setForm}
            name={item.name}
            label={item.label}
            transactionType={item.transactionType}
          />
        ))}

        <DatePicker form={form} setForm={setForm} title="تاریخ تراکنش" />

        {loading ? (
          <Loader />
        ) : (
          <button type="submit" disabled={loading}>
            {button ? button : "ذخیره تراکنش"}
          </button>
        )}
      </form>
    </section>
  );
};

export default TransactionsInput;
