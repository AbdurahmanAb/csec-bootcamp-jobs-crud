import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoute";
import logger from "./middleware/logger";
import errorHandler from "./middleware/errorHandler";
import rateLimiter from "./middleware/rateLimiter";
import jobRouter from "./routes/jobsRoute";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(rateLimiter);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRouter);

// // Error Handling Middleware
// app.use(errorHandler);

export default app;
