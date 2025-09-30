import { FormValues } from "@/modules/interface/FormValues";
import User from "@/app/models/user";
import { Types } from "mongoose";
import { Session } from "next-auth";
import Profile from "@/app/models/profile";

interface Profile extends FormValues {
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

interface UserProfile {
  email: string;
  password: string;
  _id: Types.ObjectId;
  createdAt: Date;
  profiles: Profile[];
}

export const profileHandler = async (
  session: Session
): Promise<UserProfile[]> => {
  const user = await User.findOne({}, { _id: 1, email: 1 });
  console.log(user);
  const pro = await Profile.findOne({}, { userId: 1 });
  console.log("🚲 ~ ProfileHandler.ts:26 -> pro: ", pro);

  console.log(session.user.email);
  return await User.aggregate<UserProfile>([
    {
      $match: { email: session.user.email },
    },
    {
      $lookup: {
        from: "profileTransaction",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
};
