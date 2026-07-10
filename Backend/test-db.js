import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

try {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ Connected to:", conn.connection.host);
  process.exit(0);
} catch (err) {
  console.error(err);
  process.exit(1);
}