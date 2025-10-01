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

  return (
    <div>
      <AddTransactionsPage data={profile} />
    </div>
  );
};

export default page;
