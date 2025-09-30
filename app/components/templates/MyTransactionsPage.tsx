import React from "react";
import { getServerSession } from "next-auth";

import { authOptions } from "@/helper/auth/authOption";
import { profileHandler } from "@/helper/myTransactions/ProfileHandler";
import connectDb from "@/app/utils/ConnectDb";

const MyTransactionsPage = async () => {
    await connectDb()
  const session = await getServerSession(authOptions);
  const userProfile = await profileHandler(session);
  console.log(userProfile)
  return <div></div>;
};

export default MyTransactionsPage;
