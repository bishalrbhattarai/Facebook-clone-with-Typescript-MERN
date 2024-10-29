import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
async function connection(): Promise<void> {
  try {
    const connection = await mongoose.connect(MONGO_URI!);
    console.log("Connected to Database");
  } catch (error: any) {
    console.log(error);
  }
}

export default connection;