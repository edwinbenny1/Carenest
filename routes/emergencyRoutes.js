const express = require("express");
const router = express.Router();

const {
  getEmergencies,
  resolveEmergency
} = require("../controllers/emergencyController");

router.get("/", getEmergencies);
router.put("/:id", resolveEmergency);

module.exports = router;