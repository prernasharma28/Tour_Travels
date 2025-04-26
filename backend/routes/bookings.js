import express from "express";
import {
  createBooking,
  getAllBooking,
} from "../controllers/bookingController.js";
import { verifyToken } from "../utils/verifyToken.js"; // ✅ Not verifyAdmin

const router = express.Router();

// ✅ This allows any logged-in user to access
router.post("/", verifyToken, createBooking);
router.get("/all", verifyToken, getAllBooking);

export default router;

