// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    phone: String,
    tourName: String,
    guestSize: Number,
    fromDate: Date,            
    toDate: Date,              
    razorpayPaymentId: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }         
);

export default mongoose.model("Booking", bookingSchema);