import { authOptions } from "@/app/helper/auth/authOption";
import SignupPage from "@/templates/SignupPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");
  return (
    <div>
      <SignupPage />
    </div>
  );
};

export default page;
