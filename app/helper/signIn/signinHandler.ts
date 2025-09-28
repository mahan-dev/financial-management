import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

interface SignIn {
  email: string;
  password: string;
}
export const signInHandler = async ({ email, password }: SignIn) => {
  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  if (res.error) toast.error(res.error, { duration: 2000 });
  else if (res.status === 200) toast.success("با موفقیت وارد شدید");
};
