import express from "express";
import { searchHotel } from "../controllers/search.controller.js";

const router = express.Router();

router.get(`/search`, searchHotel)

export default router