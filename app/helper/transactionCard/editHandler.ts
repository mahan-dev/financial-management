import { FormValues } from "@/app/components/modules/interface/FormValues";
import axios from "axios";
import React, { SetStateAction } from "react";
import toast from "react-hot-toast";

interface EditProps {
  form: FormValues;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}
export const editCard = async ({ form, setLoading }: EditProps) => {
  try {
    setLoading(true);
    const res = await axios.patch(`/api/profile/edit`, form);
    if (res.status === 200) toast.success(res.data.message as string);
  } catch {
    toast.error("مشکلی رخ داده است", { duration: 2000 });
  } finally {
    setLoading(false);
  }
};
