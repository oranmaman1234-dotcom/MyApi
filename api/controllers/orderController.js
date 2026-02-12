const Order = require("../models/Order");
const mongoose = require("mongoose");

exports.createOrder = async (req, res) => {
  try {
    const { businessId, productId, price, status, closedAt } = req.body;

    const newOrder = new Order({
      businessId: new mongoose.Types.ObjectId(businessId),
      productId,
      price,
      status: status || "CREATED",
      closedAt: closedAt || null
    });

    const saved = await newOrder.save();

    res.status(201).json({
      orderId: saved._id,
      businessId: saved.businessId,
      productId: saved.productId,
      price: saved.price,
      status: saved.status,
      createdAt: saved.createdAt,
      closedAt: saved.closedAt,
      updatedAt: saved.updatedAt
    });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOrdersByBusiness = async (req, res) => {
  try {
    const orders = await Order.find({
      businessId: req.params.businessId
    });

    const formatted = orders.map(o => ({
      orderId: o._id,
      businessId: o.businessId,
      productId: o.productId,
      price: o.price,
      status: o.status,
      createdAt: o.createdAt,
      closedAt: o.closedAt,
      updatedAt: o.updatedAt
    }));

    res.status(200).json(formatted);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
