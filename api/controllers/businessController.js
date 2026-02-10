const Business = require("../models/Business");

exports.createBusiness = async (req, res) => {
  try {
    const business = await Business.create(req.body);
    res.status(201).json(business);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBusinessesByUser = async (req, res) => {
  try {
    const businesses = await Business.find({
      ownerUid: req.params.firebaseUid
    });
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
