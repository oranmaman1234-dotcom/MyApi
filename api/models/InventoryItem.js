const mongoose = require("mongoose");

const InventoryItemSchema = new mongoose.Schema({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true
  },
  productId: {          // ✅ תואם לאנדרואיד
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  minQuantity: {
    type: Number,
    required: true
  },
  lastUpdated: {        // ✅ תואם לאנדרואיד
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model("InventoryItem", InventoryItemSchema);
