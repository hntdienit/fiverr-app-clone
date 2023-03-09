import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
// import { deleteUser, getUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteUser);
// router.delete("/:id", deleteUser);
// router.get("/:id", getUser);
router.get("/test", deleteUser)

export default router;