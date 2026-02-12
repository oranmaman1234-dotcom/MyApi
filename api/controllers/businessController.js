// controllers/businessController.js

const Business = require("../models/Business");

// Create a business
const createBusiness = async (req, res) => {
  try {
    const { ownerUid, ownerName, name, address, pic} = req.body;

    const newBusiness = new Business({
      ownerUid,
      ownerName,
      name,
      address ,
      pic
    });

    const saved = await newBusiness.save();

    res.status(201).json({
      businessId: saved._id,
      ownerUid: saved.ownerUid,
      ownerName: saved.ownerName,
      name: saved.name,
      address: saved.address,
      pic:saved.pic,
      createdAt: saved.createdAt,
      updatedAt: saved.updatedAt
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all businesses
const getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();

    const formatted = businesses.map(b => ({
      businessId: b._id,
      ownerUid: b.ownerUid,
      ownerName: b.ownerName,
      name: b.name,
      address: b.address,
      pic:saved.pic,
      createdAt: b.createdAt,
      updatedAt: b.updatedAt
    }));

    res.status(200).json(formatted);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBusiness,
  getBusinesses,
};
