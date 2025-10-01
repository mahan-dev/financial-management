import { FormValues } from "@/modules/interface/FormValues";
import User from "@/app/models/user";
import { Types } from "mongoose";
import { Session } from "next-auth";


export interface Profile extends FormValues {
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

export interface UserProfile {
  email: string;
  password: string;
  userId: Types.ObjectId;
  _id: Types.ObjectId;
  createdAt: Date;
  profiles: Profile[];
}

export const profileHandler = async (
  session: Session
): Promise<UserProfile[]> => {


  return await User.aggregate<UserProfile>([
    {
      $match: { email: session.user.email },
    },
    {
      $lookup: {
        from: "profiletransactions",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
};
