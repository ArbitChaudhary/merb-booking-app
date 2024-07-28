import express from "express";
import verifyToken from "../utils/verifyToken.js";
import { getUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/get-user", verifyToken, getUser)

export default router