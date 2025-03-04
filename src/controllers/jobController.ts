import { Request, Response } from 'express';
const Job = require('../models/jobModel');
export const createJob = async (req: Request, res: Response): Promise<void> => {
  try {
  
  
  
  } catch (err) {
      res.status(500).json({
            "Error":err
    })
  }
}
export const getJob = async (req: Request, res: Response): Promise<void> => { 
    try {
        
    } catch (err) {
res.json(err)
     }
}
export const getJobById = async (req: Request, res: Response): Promise<void> => { 
    try {
        const id = req.params.id;
     
    } catch (e) {
        res.json({
            "Error":e
        })
    }
}