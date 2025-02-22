import express from "express";
import connectDB from "./db/coonectDB.js";
import dotenv from "dotenv"; // Load environment variables from .env file
import authRoutes from "./routes/auth.routes.js";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDB();
  console.log("Server is Runnig on Port 3000");
});
