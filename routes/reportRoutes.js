const express = require("express");
const router = express.Router();

const {
  getEmergencyReports,
  getSystemLogs
} = require("../controllers/reportController");

router.get("/reports", getEmergencyReports);
router.get("/logs", getSystemLogs);

module.exports = router;