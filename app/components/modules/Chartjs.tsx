"use client";
import React, { useEffect, useState } from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

import { DataCollection } from "@/app/utils/chartData";
import Loader from "@/app/loader/Loader";
import { ChartJsFont } from "@/app/utils/chartJsFont";
import { sp } from "@/app/utils/ReplaceNumber";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ChartJs = () => {
  const [data, setData] = useState<string | null>(null);
  const [pNumber, setPnumber] = useState<string>(null);

  ChartJsFont(); // Chart Font

  const dataHandler = async () => {
    const res = await DataCollection();
    if (res) {
      setData(res);
      setPnumber(sp(res));
    }
  };

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
    <div className="mt-3 text-center" style={{ width: "200px" }}>
      {data !== null ? <Doughnut data={chartData} /> : <Loader />}
      <p className="mt-4">{data && pNumber}</p>
    </div>
  );
};

export default ChartJs;
