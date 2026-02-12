const express = require("express");
const router = express.Router();
const { createOrder, getOrdersByBusiness } = require("../controllers/orderController");

// אם יש middleware לאימות Firebase
// const { authenticate } = require("../middleware/auth");
// router.use(authenticate);

router.post("/", createOrder);
router.get("/:businessId", getOrdersByBusiness);

module.exports = router;
