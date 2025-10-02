import { authOptions } from "@/app/helper/auth/authOption";
import Profile from "@/app/models/profile";
import User from "@/app/models/user";
import connectDb from "@/app/utils/ConnectDb";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ removeId: string }>;
}
export const DELETE = async (req: Request, context: RouteContext) => {
  try {
    await connectDb();

    const { removeId: _id } = await context.params;


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


    if (!userId.equals(profileId))
      return NextResponse.json(
        {
          status: "Failed",
          error: "دسترسی شما به این آگهی محدود ",
        },
        { status: 403 }
      );

    await profile.deleteOne({ _id });

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
