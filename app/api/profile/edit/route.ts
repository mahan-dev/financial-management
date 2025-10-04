import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import connectDb from "@/app/utils/ConnectDb";
import { authOptions } from "@/app/helper/auth/authOption";
import User from "@/app/models/user";
import { Types } from "mongoose";
import Profile from "@/app/models/profile";

export const PATCH = async (req: Request) => {
  try {
    await connectDb();
    const {
      title,
      description,
      price,
      category,
      transactionDate,
      transactionType,
      _id,
    } = await req.json();
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

    const profile = await Profile.findOne({ _id });

    const userId = user._id as Types.ObjectId;
    const profileId = profile.userId as Types.ObjectId;

    if (
      !title ||
      !description ||
      !price ||
      category["none"] ||
      transactionType["none"] ||
      !transactionDate
    )
      return NextResponse.json(
        {
          status: "Failed",
          error: "اطلاعات معتبر وارد کنید",
        },
        { status: 422 }
      );

    if (!userId.equals(profileId))
      return NextResponse.json(
        {
          status: "Failed",
          error: "دسترسی شما به آگهی محدود شده است",
        },
        { status: 403 }
      );

    Object.assign(profile, {
      title,
      description,
      price,
      category,
      transactionDate,
    });
    await profile.save();

    return NextResponse.json(
      {
        status: "Success",
        message: "با موفقیت انجام شد",
      },
      { status: 200 }
    );
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
