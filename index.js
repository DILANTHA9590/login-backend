import express from "express";
import connectDB from "./db/coonectDB.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is Runnig on Port 3000");
});
