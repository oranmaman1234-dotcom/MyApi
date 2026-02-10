const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({
  ownerUid: {
    type: String, // firebase uid
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Business", BusinessSchema);
