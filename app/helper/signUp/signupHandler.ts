import axios from "axios";
import { formAuth } from "@/templates/interface/formInterface";
import toast from "react-hot-toast";

interface SignUp {
  form: formAuth;
}

export const signupHandler = async ({ form }: SignUp) => {
  try {
    const res = await axios.post<formAuth>("api/signup", form);
    const SuccessStatus = res.status === 201;
    if (SuccessStatus) {
      toast.success("حساب کابری ایجاد شد");
    }
  } catch (error) {
    const errorMessage = error?.response?.data.error;
    console.log(errorMessage);
    toast.error(errorMessage, { duration: 2000 });
    // toast.error(error?.error)
  }
};
