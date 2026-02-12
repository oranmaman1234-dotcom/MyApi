const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true
  },
  productId: {        // ✅ תואם לאנדרואיד
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ["CREATED", "COMPLETED", "CANCELLED"],
    default: "CREATED"
  },
  closedAt: {         // ✅ תואם לאנדרואיד
    type: Date,
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);
