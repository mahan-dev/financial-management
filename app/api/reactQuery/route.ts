import { authOptions } from "@/app/helper/auth/authOption";
import Profile from "@/app/models/profile";
import User from "@/app/models/user";
import connectDb from "@/app/utils/ConnectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDb();

    const { search } = await req.json();

    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json(
        { status: "Error", error: "احراز هویت نشده اید" },
        { status: 401 }
      );
    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        {
          status: "Failed",
          error: "حساب کاربری پیدا نشد",
        },
        { status: 404 }
      );

    const profile = await Profile.find({
      title: {
        $regex: search,
        $options: "i",
      },
    }).select("-userId");

    return NextResponse.json({
      status: "Success",
      message: "success",
      data: profile,
    });
  } catch {
    console.log("error");
    return NextResponse.json(
      { status: "Fai1led", error: "error" },
      { status: 500 }
    );
  }
};
