import AddTransactionsPage from "@/app/components/templates/AddTransactionsPage";
import connectDb from "@/app/utils/ConnectDb";
import Profile from "@/models/profile";
import React from "react";

interface pageProps {
  params: Promise<{ profileId: string }>;
}

const page = async ({ params }: pageProps) => {
  const { profileId } = await params;

  await connectDb();
  const profile = await Profile.findOne({ _id: profileId }).select("-userId");
  if (!profile)
    return (
      <h2 className="bg-red-200 text-red-600 p-2 rounded-md">
        مشکلی پیش آمده است
      </h2>
    );

  return (
    <div>
      <AddTransactionsPage
        data={profile}
        title="ویرایش تراکنش"
        button=" ذخیره تغییرات "
      />
    </div>
  );
};

export default page;
