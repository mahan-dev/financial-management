import { FormValues } from "@/modules/interface/FormValues";
import { authOptions } from "@/helper/auth/authOption";
import Profile from "@/models/profile";
import User from "@/models/user";
import connectDb from "@/utils/ConnectDb";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDb();
    const res: FormValues = await req.json();
    const { title, description, price, category, transactionDate } = res;

    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json(
        {
          status: "Failed",
          error: "وارد حساب کابری خود شوید",
        },
        { status: 401 }
      );

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        {
          status: "Failed",
          error: "حساب کابری پیدا نشد",
        },
        { status: 404 }
      );

    const newProfile = await Profile.create({
      title,
      description,
      price: +price,
      category,
      transactionDate,
      userId: new Types.ObjectId(user._id),
    });

    return NextResponse.json(
      { status: "Success", message: "ذخیره شد", data: newProfile },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        status: "Failed",
        error: "مشکلی در سمت سرور رخ داده",
      },
      { status: 500 }
    );
  }
};
