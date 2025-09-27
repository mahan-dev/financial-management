import { authOptions } from "@/app/helper/auth/authOption";
import User from "@/app/models/user";
import { hashPassword } from "@/app/utils/auth";
import connectDb from "@/app/utils/ConnectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDb();

    const { email, password } = await req.json();

    if (!email || !password)
      return NextResponse.json(
        {
          status: "Failed",
          error: "اطلاعات را به صورت صحیح وارد کنید",
        },
        { status: 422 }
      );

    const user = await User.findOne({ email });
    if (user)
      return NextResponse.json(
        {
          status: "Failed",
          error: "حساب کابری وجود دارد",
        },
        { status: 404 }
      );

    const hashedPassword = await hashPassword(password);

    const createUser = await User.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { status: "Success", message: "کابر ایجاد شد", data: createUser },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        status: "Failed",
        error: "مشکلی در اتصال به دیتابیس وجود دارد",
      },
      { status: 500 }
    );
  }
};
