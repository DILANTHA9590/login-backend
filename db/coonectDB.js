import mongoose from "mongoose";
import dotenv from "dotenv"; // Load environment variables from .env file

dotenv.config(); // Load data from .env file

export default async function connectDB() {
  try {
    const MongoUrl = process.env.MONGO_URL;

    if (!MongoUrl) {
      throw new Error(
        "MONGO_URL is not defined in the .env file. Did you check?"
      );
    }

    console.log("MongoDB URL:", MongoUrl); // Log for debugging

    const conn = await mongoose.connect(MongoUrl); // No need for extra options

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // Stop the process if connection fails
  }
}
