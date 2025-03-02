import { Request, Response } from "express";
import User from "../models/userModel";
import { validateUser, handleValidationErrors } from "../middleware/validator";
import { ApiResponse } from "../utils/apiResponse";

// @desc    Get all users
// @route   GET /api/users
// @access  Public
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    ApiResponse.success(res, "Users fetched successfully", users);
  } catch (err) {
    ApiResponse.error(res, "Failed to fetch users", err);
  }
};

// @desc    Create a user
// @route   POST /api/users
// @access  Public
export const createUser = 
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, age } = req.body;
      const user = await User.create({ name, email, age });
      ApiResponse.success(res, "User created successfully", user, 201);
    } catch (err) {
      ApiResponse.error(res, "Failed to create user", err);
    }
  }


// @desc    Update a user
// @route   PUT /api/users/:id
// @access  Public
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });
      ApiResponse.success(res, "User updated successfully", user);
    } catch (err) {
      ApiResponse.error(res, "Failed to update user", err);
    }
  }


// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Public
export const deleteUser = async (
    req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    ApiResponse.success(res, "User deleted successfully");
  } catch (err) {
    ApiResponse.error(res, "Failed to delete user", err);
  }
};
