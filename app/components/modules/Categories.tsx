import React, { SetStateAction } from "react";
import { FormValues } from "@/modules/interface/FormValues";

interface CategoriesProps {
  form: FormValues;
  setForm: React.Dispatch<SetStateAction<FormValues>>;
  name: string;
  label: string;
}
const Categories = ({ form, setForm, name, label }: CategoriesProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name as keyof FormValues]: [value] });
  };

  return (
    <>
      <h2 className=" mt-8">{label}</h2>
      <select
        className="w-fit mt-4 outline-none cursor-pointer border-2 border-blue-600 rounded-md"
        onChange={changeHandler}
        value={form.category[0]}
        name={name}
      >
        <option className="cursor-pointer" value="none" disabled>
          انتخاب نشده
        </option>
        <option value="coffee">کافه</option>
        <option value="store">مغازه</option>
        <option value="bill">قبض</option>
        <option value="clothe">لباس</option>
        <option value="other">بقیه</option>
      </select>
    </>
  );
};

export default Categories;
