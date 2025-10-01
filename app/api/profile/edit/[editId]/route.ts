import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import connectDb from "@/app/utils/ConnectDb";
import { authOptions } from "@/app/helper/auth/authOption";
import User from "@/app/models/user";

export const PATCH = async (req: Request) => {
  try {
    await connectDb();

    const { title } = await req.json();
    console.log(title);

    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json(
        {
          status: "Failed",
          error: "ابتدا وارد حساب کابری خود شوید",
        },
        { status: 401 }
      );

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        {
          status: "Failed",
          error: "حساب کابری پیدانشد",
        },
        { status: 404 }
      );

    console.log("Put API");

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
