const InventoryItem = require("../models/InventoryItem");
const mongoose = require("mongoose");

exports.addItem = async (req, res) => {
  try {
    const { businessId, productId, name, quantity, minQuantity } = req.body;

    const newItem = new InventoryItem({
      businessId: new mongoose.Types.ObjectId(businessId),
      productId,
      name,
      quantity,
      minQuantity,
      lastUpdated: new Date()
    });

    const saved = await newItem.save();

    res.status(201).json({
      id: saved._id,
      businessId: saved.businessId,
      productId: saved.productId,
      name: saved.name,
      quantity: saved.quantity,
      minQuantity: saved.minQuantity,
      lastUpdated: saved.lastUpdated,
      createdAt: saved.createdAt,
      updatedAt: saved.updatedAt
    });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getInventoryByBusiness = async (req, res) => {
  try {
    const items = await InventoryItem.find({
      businessId: req.params.businessId
    });

    const formatted = items.map(item => ({
      id: item._id,
      businessId: item.businessId,
      productId: item.productId,
      name: item.name,
      quantity: item.quantity,
      minQuantity: item.minQuantity,
      lastUpdated: item.lastUpdated,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    }));

    res.status(200).json(formatted);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
