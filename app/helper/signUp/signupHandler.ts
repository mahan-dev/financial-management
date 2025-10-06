import axios from "axios";
import { formAuth } from "@/templates/interface/formInterface";
import toast from "react-hot-toast";
import React, { SetStateAction } from "react";

interface SignUp {
  form: formAuth;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}

export const signupHandler = async ({ form, setLoading }: SignUp) => {
  try {
    setLoading(true);
    const res = await axios.post<formAuth>("api/signup", form);
    const { email, password, rePassword } = form;

    if (!email || !password || !rePassword) {
      toast.error("فیلد هارا خالی نگذارید", { duration: 2000 });
      return;
    }
    if (password !== rePassword) {
      toast.error("رمز ها برابر نیست", { duration: 2000 });
      return;
    }
    const SuccessStatus = res.status === 201;
    if (SuccessStatus) {
      toast.success("حساب کابری ایجاد شد");
    }
    return true;
  } catch (error) {
    const errorMessage = error?.response?.data.error;

    toast.error(errorMessage, { duration: 2000 });
    return false;
  } finally {
    setLoading(false);
  }
};
