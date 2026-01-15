const express = require("express");
const router = express.Router();
const {createOrder ,getOrdersByBusiness } = require("../controllers/orderController");

router.post("/", createOrder);
router.get("/:businessId", getOrdersByBusiness);

module.exports = router;
