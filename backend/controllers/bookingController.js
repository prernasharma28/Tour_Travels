import Booking from '../models/Booking.js';

// ✅ Create a new booking
export const createBooking = async (req, res) => {
  try {
    console.log("📦 Incoming Booking Body:", req.body);
    const {
      username,
      email,
      phone,
      tourName,
      guestSize,
      fromDate,
      toDate,
      razorpayPaymentId,
    } = req.body;

    // Validate required fields
    if (
      !username ||
      !email ||
      !phone ||
      !tourName ||
      !guestSize ||
      !fromDate ||
      !toDate ||
      !razorpayPaymentId
    ) {
      const missingFields = [];
      if (!username) missingFields.push('username');
      if (!email) missingFields.push('email');
      if (!phone) missingFields.push('phone');
      if (!tourName) missingFields.push('tourName');
      if (!guestSize) missingFields.push('guestSize');
      if (!fromDate) missingFields.push('fromDate');
      if (!toDate) missingFields.push('toDate');
      if (!razorpayPaymentId) missingFields.push('razorpayPaymentId');

      console.log("❌ Missing fields:", missingFields);

      return res.status(400).json({
        success: false,
        message: `Missing fields in booking request: ${missingFields.join(', ')}`,
      });
    }

    const newBooking = new Booking({
      username,
      email,
      phone,
      tourName,
      guestSize,
      fromDate,
      toDate,
      razorpayPaymentId,
      userId: req.user?.id,
    });

    const savedBooking = await newBooking.save();
    console.log("✅ Booking saved:", savedBooking);
    res.status(201).json({
      success: true,
      message: "Booking successful",
      data: savedBooking,
    });
  } catch (err) {
    console.error("❌ Booking creation error:", err.message, err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// ✅ Get all bookings (admin only)
export const getAllBooking = async (req, res) => {
  try {
    const bookings = await Booking.find(); 

    if (!bookings || bookings.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No bookings found",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "All bookings fetched successfully",
      data: bookings,
    });
  } catch (err) {
    console.error("❌ Error fetching bookings:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};