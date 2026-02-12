const express = require("express");
const router = express.Router();
const { createBusiness, getBusinesses } = require("../controllers/businessController");

// אם יש לך middleware לאימות Firebase, תוסיף כאן
// const { authenticate } = require("../middleware/auth");
// router.use(authenticate);

router.post("/", createBusiness);
router.get("/", getBusinesses);

module.exports = router;
