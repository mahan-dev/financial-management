"use client";
import React, { useEffect, useState } from "react";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  plugins,
} from "chart.js";

import { DataCollection } from "@/app/utils/chartData";
import Loader from "@/app/loader/Loader";
import { ChartJsFont } from "@/app/utils/chartJsFont";
import { sp } from "@/app/utils/ReplaceNumber";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface ChartData {
  total: number[];
  received: number[];
  payment: number[];
}

const ChartJs = () => {
  const [data, setData] = useState<ChartData>(null);
  const [pNumber, setPnumber] = useState<string>(null);

  ChartJsFont(); // Chart Font

  const dataHandler = async () => {
    const res = await DataCollection();
    if (res) {
      setData(res);
      setPnumber(sp(res.total.toString()));
    }
  };

  useEffect(() => {
    dataHandler();
  }, []);

  const chartData = {
    labels: ["کل تراکنشات", "پرداختی", "دریافتی"],
    datasets: [
      {
        data: data !== null ? [data.total, data.payment, data.received] : [],
        backgroundColor: ["#2563eb", "orange", "yellow"],
      },
    ],
  };

  return (
    <div className="mt-3 text-center" style={{ width: "200px" }}>
      {data !== null ? <Doughnut data={chartData} /> : <Loader />}
      <p className="mt-4"> کل تراکنشات:  {data && pNumber}</p>
    </div>
  );
};

export default ChartJs;
