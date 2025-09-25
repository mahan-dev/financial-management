import { model, Model, models, Schema } from "mongoose";
import { userInterface } from "@/models/interface/userSchema";

const userSchema = new Schema<userInterface>({
  amount: String,
  price: String,
  type: [String],
  category: [String],
  date: Date,
  note: String,
});

const User: Model<userInterface> =
  models.user || model<userInterface>("user", userSchema);
export default User;
