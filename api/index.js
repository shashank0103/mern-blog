import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import bodyParser from "body-parser"; 
dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

const app = express();
app.use(bodyParser.json())  // ✅ Middleware must be before routes

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
