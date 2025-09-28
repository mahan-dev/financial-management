import { signIn } from "next-auth/react";
import React, { SetStateAction } from "react";
import toast from "react-hot-toast";

interface SignIn {
  email: string;
  password: string;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}
export const signInHandler = async ({
  email,
  password,
  setLoading,
}: SignIn) => {
  setLoading(true);
  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  if (res.error) {
    toast.error(res.error, { duration: 2000 });
    setLoading(false);
    return false;
  } else if (res.status === 200) {
    toast.success("با موفقیت وارد شدید");
    setLoading(false);
    return true;
  }
};
