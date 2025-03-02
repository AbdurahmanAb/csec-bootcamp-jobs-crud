import { Request } from "express";
import { createJob, getJob, getJobById } from "../controllers/jobController";
import { handleValidationErrors, validateJob } from "../middleware/validator";

const express = require("express");
const jobRouter = express.Router();

jobRouter.get("/", getJob);
jobRouter.post("/",validateJob,handleValidationErrors, createJob);
jobRouter.get("/:id", getJobById);

export default jobRouter;