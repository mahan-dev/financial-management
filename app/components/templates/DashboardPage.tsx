import React from "react";
import ChartJs from "@/templates/Chartjs";

interface DashboardProps {
  date: string;
}
const DashboardPage = ({ date }: DashboardProps) => {
    const formatDate = new Date(date).toLocaleDateString("fa-IR")
  return (
    <div>
      <h2>سلام 👋 خوش آمدید</h2>
      
      <p className=" w-fit rounded-md px-2 py-1 mt-12 bg-blue-200 text-blue-600 ">تاریخ عضویت : {formatDate}</p>

      <ChartJs />
    </div>
  );
};

export default DashboardPage;
