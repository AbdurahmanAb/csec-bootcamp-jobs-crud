import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction): void => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
};

export default logger;
