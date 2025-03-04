import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateUser = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 5 })
    .withMessage("Name must be at least 5 characters long"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("age")
    .notEmpty()
    .withMessage("Age is required")
    .isInt({ min: 1 })
    .withMessage("Age must be a positive number"),
];

export const validateJob = [
 /* Job Validator */
];






export const handleValidationErrors = (
  req,
  res,
  next,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
