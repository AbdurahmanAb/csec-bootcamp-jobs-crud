import { Request } from "express";
import { createJob, getJob, getJobById } from "../controllers/jobController";
import { handleValidationErrors, validateJob } from "../middleware/validator";

const express = require("express");
const jobRouter = express.Router();

jobRouter.get("/", getJob);
/* Your Job Router with validation */
/* get Job By Id */
/* update jobs */
/* delete jobs */

export default jobRouter;