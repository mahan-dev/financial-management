import { model, Model, models, Schema } from "mongoose";
import { userInterface } from "@/models/interface/userSchema";

const userSchema = new Schema<userInterface>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<userInterface> =
  models.financeDb || model<userInterface>("financeDb", userSchema);
export default User;
