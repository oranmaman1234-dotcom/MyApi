const express = require("express");
const router = express.Router();
const {
  addItem,
  getInventoryByBusiness
} = require("../controllers/inventoryController");

router.post("/", addItem);
router.get("/:businessId", getInventoryByBusiness);

module.exports = router;
