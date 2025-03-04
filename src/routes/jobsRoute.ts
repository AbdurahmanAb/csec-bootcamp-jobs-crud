import { Request } from "express";
import { createJob, getJob, getJobById } from "../controllers/jobController";
import { handleValidationErrors, validateJob } from "../middleware/validator";

const express = require("express");
const jobRouter = express.Router();

jobRouter.get("/", getJob);
/* Your Job Router with validation */
jobRouter.get("/:id", getJobById);

export default jobRouter;