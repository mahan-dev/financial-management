"use client";
import React, { SetStateAction } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FormValues } from "@/modules/interface/FormValues";
import styles from "@/modules/styles/customDatePicker/route.module.css";

interface DateProps {
  form: FormValues;
  setForm: React.Dispatch<SetStateAction<FormValues>>;
  title: string;
}
const CustomDatePicker = ({ form, setForm, title }: DateProps) => {
  const changeHandler = (e: DateObject | null) => {
    const date = e.toDate();
    setForm({ ...form, transactionDate: date });
  };

  return (
    <section className="mt-8">
        <h2 className="mb-2">{title}</h2>
      <DatePicker
        inputClass={styles.datePicker}
        calendar={persian}
        locale={persian_fa}
        editable={false}
        onChange={changeHandler}
        value={form.transactionDate}
      />
    </section>
  );
};

export default CustomDatePicker;
