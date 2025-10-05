"use server";

import connectDb from "@/utils/ConnectDb";
import { getServerSession } from "next-auth";

import { authOptions } from "@/helper/auth/authOption";
import { profileHandler } from "@/helper/myTransactions/ProfileHandler";

export const DataCollection = async () => {
  await connectDb();
  const session = await getServerSession(authOptions);
  const [profileLength] = await profileHandler(session);
  const { profiles } = profileLength;

  const received = profiles
    .filter((item) => item.transactionType.includes("received"))
    .map((item) => Number(item.price))
    .reduce((acc, cur) => acc + cur);

  const payment = profiles
    .filter((item) => item.transactionType.includes("payment"))
    .map((item) => +item.price)
    .reduce((acc, cur) => acc + cur);

  const profileNumber = profiles.map((item) => +item.price);
  const totalTransaction = profileNumber.reduce((acc, cur) => acc + cur); //total Transactions

  return {
    total: [totalTransaction],
    received : [received],
    payment : [payment],
  };
};
