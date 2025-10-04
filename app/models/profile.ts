import { Document, model, Model, models, Schema } from "mongoose";

export interface ProfileSchema extends Document {
  title: string;
  description: string;
  price: string;
  category: string[];
  transactionType: string[];
  transactionDate: Date;
  userId: object;
}

const profile = new Schema<ProfileSchema>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      enum: ["none", "coffee", "store", "bill", "clothe", "other"],
    },
    transactionType: {
      type: [String],
      enum: ["none", "payment", "received"],
    },

    transactionDate: {
      required: true,
      type: Date,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "financeDb",
    },
  },
  {
    timestamps: true,
  }
);

const Profile: Model<ProfileSchema> =
  models.profileTransaction ||
  model<ProfileSchema>("profileTransaction", profile);

export default Profile;
