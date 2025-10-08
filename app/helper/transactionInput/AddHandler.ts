import React, { SetStateAction } from "react";
import { FormValues } from "@/modules/interface/FormValues";
import axios from "axios";
import toast from "react-hot-toast";
import { Response } from "@/helper/interface/Response";

interface AddProps {
  form: FormValues;
  setForm: React.Dispatch<SetStateAction<FormValues>>;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}
export const addHandler = async ({ form, setForm, setLoading }: AddProps) => {
  try {
    const { title, description, price, category, transactionType } = form;
    setLoading(true);
    if (
      !title ||
      !description ||
      !price ||
      category.includes("none") ||
      transactionType.includes("none")
    ) {
      toast.error("فیلد هارا خالی نگذارید", { duration: 2000 });

      return;
    }

    if (isNaN(+price)) {
      toast.error("لطفا شماره وارد کنید", { duration: 2000 });
      return;
    }

    const res = await axios.post<Response>("/api/profile/add", form, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    console.log(res);
    const successMessage = res.status === 200;
    if (successMessage) {
      toast.success(res.data.message);
      setForm({
        title: "",
        description: "",
        price: "",
        category: ["none"],
        transactionType: ["none"],
        transactionDate: new Date(),
      });
    }
    return true;
  } catch (error) {
    toast.error("مشکلی رخ داده است", { duration: 2000 });
    console.log("error", error);
    return false;
  } finally {
    setLoading(false);
  }
};
