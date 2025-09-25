import mongoose from "mongoose";

const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;

  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    console.log("Database connected👌");
  } catch {
    console.log("connection failed❌");
  }
};

export default connectDb;
