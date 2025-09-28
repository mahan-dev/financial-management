import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import DashboardPage from "@/templates/DashboardPage";
import { authOptions } from "@/helper/auth/authOption";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signup");
  return <DashboardPage />;
};

export default Dashboard;
