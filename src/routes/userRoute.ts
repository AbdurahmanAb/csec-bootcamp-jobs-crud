import express from "express";
import {
  getUsers,
    createUser,
updateUser,
  deleteUser,
} from "../controllers/userController";
import { handleValidationErrors, validateUser } from "../middleware/validator";

const router = express.Router();

router.get("/", getUsers);
router.post("/", validateUser, handleValidationErrors,

  createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
