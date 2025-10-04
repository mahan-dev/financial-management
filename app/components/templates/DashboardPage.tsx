import React from "react";
import ChartJs from "@/app/components/modules/Chartjs";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/helper/auth/authOption";

interface DashboardProps {
  date: string;
}
const DashboardPage = async ({ date }: DashboardProps) => {
  const formatDate = new Date(date).toLocaleDateString("fa-IR");
  const session = await getServerSession(authOptions);
  const [userName] = session.user.email.split("@");
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>سلام {userName || ""} 👋 خوش آمدید </h2>

        <p className=" w-fit rounded-md px-2 py-1 bg-blue-200 text-blue-600 ">
          تاریخ عضویت : {formatDate}
        </p>
      </div>
      <ChartJs />
    </div>
  );
};

export default DashboardPage;
