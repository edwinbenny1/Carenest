const express = require("express");
const router = express.Router();

const {
  sendNotification,
  getNotifications
} = require("../controllers/notificationController");


// SEND NOTIFICATION
// POST /api/notifications/send
router.post("/send", sendNotification);


// GET ALL NOTIFICATIONS
// GET /api/notifications
router.get("/", getNotifications);


module.exports = router;