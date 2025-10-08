import React from "react";
import connectDb from "@/app/utils/ConnectDb";

import DetailsPage from "@/app/components/templates/DetailsPage";
import Profile from "@/app/models/profile";

interface DetailsProps {
  params: Promise<{ pageId: string }>;
}
const Details = async ({ params }: DetailsProps) => {
  const { pageId: _id } = await params;
  await connectDb();
  const profile = await Profile.findOne({ _id }).select("-userId");
  if (!profile) return <h2> مشکلی رخ داده است</h2>;
  return (
    <div>
      <DetailsPage data={JSON.parse(JSON.stringify(profile))} />
    </div>
  );
};

export default Details;
