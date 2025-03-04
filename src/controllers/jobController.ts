import { Request, Response } from 'express';
const Job = require('../models/jobModel');
export const createJob = async (req: Request, res: Response): Promise<void> => {
  try {
  
     // Create job with validtion
  
  } catch (err) {
      res.status(500).json({
            "Error":err
    })
  }
}
export const getJob = async (req: Request, res: Response): Promise<void> => { 
    try {

        // Get All Jobs
    } catch (err) {
res.json(err)
     }
}
export const getJobById = async (req: Request, res: Response): Promise<void> => { 
    try {
        const id = req.params.id;
        // Get Job By Id
     
    } catch (e) {
        res.json({
            "Error":e
        })
    }
}

// Implement also
/* update jobs */
/* delete jobs */