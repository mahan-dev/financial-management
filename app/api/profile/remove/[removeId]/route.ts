import connectDb from "@/app/utils/ConnectDb";
import { NextResponse } from "next/server";

export const DELETE = async () => {
  console.log("deleteAPI")
  try {
    await connectDb();

    return NextResponse.json({
      status: "Success",
      message: "با موفقبت انجام شد",
    });
  } catch {
    return NextResponse.json(
      {
        status: "Failed",
        error: "مشکلی در سمت سرور رخ داده",
      },
      {
        status: 500,
      }
    );
  }
};
