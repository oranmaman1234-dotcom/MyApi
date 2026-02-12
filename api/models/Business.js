const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({
  ownerUid: {
    type: String,
    required: true
  },
  ownerName: {          // ✅ הוספנו
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: { 
    type: String,
    required: true
  },
    pic: { 
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Business", BusinessSchema);
