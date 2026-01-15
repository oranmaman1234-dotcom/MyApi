const Order = require("../models/Order");

module.exports = {
    createOrder: async (req, res) => {
        try {
            const order = await Order.create(req.body);
            res.status(201).json(order);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    getOrdersByBusiness: async (req, res) => {
        try {
            const orders = await Order.find({ businessId: req.params.businessId });
            res.json(orders);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

}

