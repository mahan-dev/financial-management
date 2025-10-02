"use server";

import connectDb from "@/utils/ConnectDb";
import { getServerSession } from "next-auth";

import { authOptions } from "@/helper/auth/authOption";
import { profileHandler } from "@/helper/myTransactions/ProfileHandler";

export const DataCollection = async () => {
  await connectDb();
  const session = await getServerSession(authOptions);
  const [profileLength] = await profileHandler(session);
  const profileNumber = profileLength.profiles.map((item) => +item.price);
  const result = profileNumber.reduce((acc, cur) => acc + cur); //total Transactions

  return result;
};
