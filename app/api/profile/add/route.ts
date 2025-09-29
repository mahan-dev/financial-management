import { FormValues } from "@/app/components/modules/interface/FormValues";
import { authOptions } from "@/app/helper/auth/authOption";
import Profile from "@/app/models/profile";
// import Profile from "@/app/models/profile";
import User from "@/app/models/user";
import connectDb from "@/app/utils/ConnectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDb();
    const res: FormValues = await req.json();
    console.log(res);
    const { title, description, price, category } = res;

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
    });
    console.log(newProfile);

    return NextResponse.json(
      { status: "Success", message: "دخیره شد", data: newProfile },
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
