const express = require("express");
const router = express.Router();
const { addItem, getInventoryByBusiness } = require("../controllers/inventoryController");

// אם יש middleware לאימות Firebase
// const { authenticate } = require("../middleware/auth");
// router.use(authenticate);

router.post("/", addItem);
router.get("/:businessId", getInventoryByBusiness);

module.exports = router;
