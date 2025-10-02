"use client";
import React, { useEffect, useState } from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

import { DataCollection } from "@/app/utils/chartData";
import Loader from "@/app/loader/Loader";
// import { Data } from "@/utils/chartData";

// Register needed chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ChartJs = () => {
  const [data, setData] = useState<number | null>(null);

  const dataHandler = async () => {
    const res = await DataCollection();
    setData(res);
  };
  console.log(data);

  useEffect(() => {
    dataHandler();
  });
  const chartData = {
    labels: ["کل تراکنشات"],
    datasets: [
      {
        label: "",
        data: data !== null ? [data] : [],
        backgroundColor: ["#2563eb"],
        borderColor: "gray",
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="mt-3" style={{ width: "200px" }}>
      {data !== null ? <Doughnut data={chartData} /> : <Loader />}
    </div>
  );
};

export default ChartJs;
