import { model, Model, models, Schema } from "mongoose";
import { userInterface } from "@/models/interface/userSchema";

const userSchema = new Schema<userInterface>({
  email: String,
  password: String,
  amount: String,
  price: String,
  type: [String],
  category: [String],
  date: Date,
  note: String,
});

const User: Model<userInterface> =
  models.financeDb || model<userInterface>("financeDb", userSchema);
export default User;
