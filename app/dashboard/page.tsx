import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import DashboardPage from "@/templates/DashboardPage";
import { authOptions } from "@/helper/auth/authOption";
import connectDb from "@/utils/ConnectDb";
import User from "@/models/user";
import { userInterface } from "@/models/interface/userSchema";

interface UserCreatedAt extends userInterface {
  createdAt: string;
}
const Dashboard = async () => {
  await connectDb();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signup");

  const user: UserCreatedAt = await User.findOne({ email: session.user.email });
  return <DashboardPage date={user.createdAt} />;
};

export default Dashboard;
