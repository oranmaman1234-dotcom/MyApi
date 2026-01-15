const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ownerId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Business", BusinessSchema);
