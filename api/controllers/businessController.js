// controllers/businessController.js
const Business = require("../models/Business");

// Create a business
const createBusiness = async (req, res) => {
  try {
    const newBusiness = new Business(req.body);
    const saved = await newBusiness.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all businesses
const getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBusiness,
  getBusinesses,
};
