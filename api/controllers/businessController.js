const Business = require("../models/Business");


module.exports = {
    createBusiness: async (req, res) => {
        try {
            const business = await Business.create(req.body);
            res.status(201).json(business);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    getBusinesses: async (req, res) => {
        try {
            const businesses = await Business.find();
            res.json(businesses);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}


