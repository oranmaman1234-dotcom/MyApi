const mongoose = require("mongoose");

const InventoryItemSchema = new mongoose.Schema({
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: "Business", required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  minQuantity: { type: Number, required: true }
});

module.exports = mongoose.model("InventoryItem", InventoryItemSchema);
