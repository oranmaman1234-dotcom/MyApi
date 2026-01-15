const InventoryItem = require("../models/InventoryItem");

module.exports = {
    addItem: async (req, res) => {
        try {
            const item = await InventoryItem.create(req.body);
            res.status(201).json(item);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    getInventoryByBusiness: async (req, res) => {
        try {
            const items = await InventoryItem.find({ businessId: req.params.businessId });
            res.json(items);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

}

