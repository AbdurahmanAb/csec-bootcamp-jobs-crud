import { Request, Response } from 'express';
const Job = require('../models/jobModel');
export const createJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, company,location, salary } = req.body;
      const job = await Job.create({ title, company,location, salary });
      res.status(201).json({
          "job": job,
            "message": "Job created successfully"
      });
  ;
  } catch (err) {
      res.status(500).json({
            "Error":err
    })
  }
}
export const getJob = async (req: Request, res: Response): Promise<void> => { 
    try {
        const jobs = await Job.find();
        res.status(200).json({
            "jobs":jobs
        })
    } catch (err) {
res.json(err)
     }
}
export const getJobById = async (req: Request, res: Response): Promise<void> => { 
    try {
        const id = req.params.id;
        const job = await Job.findById(id);
        res.status(200).json({
            "job": job,
            "message":"Job found"
        })
    } catch (e) {
        res.json({
            "Error":e
        })
    }
}