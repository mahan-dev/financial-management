import MyTransactionsPage from "@/app/components/templates/MyTransactionsPage";
import { authOptions } from "@/app/helper/auth/authOption";
import { profileHandler } from "@/app/helper/myTransactions/ProfileHandler";
import connectDb from "@/app/utils/ConnectDb";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  await connectDb();
  const session = await getServerSession(authOptions);
  const [userProfile] = await profileHandler(session);

  return <MyTransactionsPage profiles={userProfile} />;
};

export default page;
