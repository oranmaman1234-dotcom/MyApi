const Order = require("../models/Order");
const InventoryItem = require("../models/InventoryItem");



module.exports = {
    getDashboardStats : async (req, res) => {
        try {
            const { businessId } = req.params;

            const orders = await Order.find({ businessId });
            const inventory = await InventoryItem.find({ businessId });

            const totalOrders = orders.length;
            const cancelledOrders = orders.filter(o => o.status === "CANCELLED").length;
            const completedOrders = orders.filter(o => o.status === "COMPLETED").length;

            const totalIncome = orders
                .filter(o => o.status === "COMPLETED")
                .reduce((sum, o) => sum + o.price, 0);

            const cancelRate = totalOrders === 0
                ? 0
                : (cancelledOrders / totalOrders) * 100;

            const lowStockItems = inventory
                .filter(i => i.quantity <= i.minQuantity)
                .map(i => i.name);

            res.json({
                businessId,
                totalOrders,
                completedOrders,
                cancelledOrders,
                cancelRate: Number(cancelRate.toFixed(2)),
                totalIncome,
                lowStockItems
            });

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

