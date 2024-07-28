import express from "express";
import { createHotel, getMyHotel, getMyHotels, updateMyHotel } from "../controllers/hotel.controller.js";
// import { upload } from "../utils/multer.js";
import verifyToken from "../utils/verifyToken.js";
import multer from "multer"

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage :storage,
  limits : {
    fileSize : 5 * 1024 * 1024,
  },
});


router.post("/create-hotel", verifyToken, upload.array('imageFiles', 10), createHotel);
router.get("/my-hotels", verifyToken, getMyHotels);
router.get("/:hotel_id",verifyToken, getMyHotel);
router.put("/:hotel_id", verifyToken, upload.array("imageFiles", 10), updateMyHotel)

export default router;