const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: "Business", required: true },
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ["CREATED", "COMPLETED", "CANCELLED"],
    default: "CREATED"
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);

