import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import todoRoute from "./routes/todo.route.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT || 4002;
const DB_URI = process.env.MONGODB_URI;

// middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Default for local dev
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
    ],
  })
);

// Handle preflight requests explicitly (optional)
app.options("*", cors());

// Database connection code
try {
  await mongoose.connect(DB_URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}

// routes
app.use("/todo", todoRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});