const { db, messaging } = require("../config/firebase");


// =============================
// SEND NOTIFICATION
// =============================
const sendNotification = async (req, res) => {

  try {

    const { title, message, target, schedule } = req.body;

    const notification = {
      title,
      message,
      target,
      date: schedule || new Date().toISOString(),
      status: schedule ? "Scheduled" : "Sent",
      createdAt: new Date()
    };

    // Save notification to Firestore
    const doc = await db.collection("notifications").add(notification);

    // =============================
    // REALTIME PUSH + SOCKET
    // =============================
    if (!schedule) {

      const payload = {
        notification: {
          title: title,
          body: message
        },
        topic: target === "All Users" ? "all" : target.toLowerCase()
      };

      await messaging.send(payload);

      // Emit realtime notification to frontend via socket
      const io = req.app.get("io");

      io.emit("newNotification", {
        id: doc.id,
        ...notification
      });

    }

    res.json({
      id: doc.id,
      ...notification
    });

  } catch (err) {

    console.error("Notification Error:", err);

    res.status(500).json({
      message: "Notification failed"
    });

  }

};



// =============================
// GET NOTIFICATIONS
// =============================
const getNotifications = async (req, res) => {

  try {

    const snapshot = await db
      .collection("notifications")
      .orderBy("createdAt", "desc")
      .get();

    const notifications = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(notifications);

  } catch (err) {

    console.error("Fetch Notification Error:", err);

    res.status(500).json({
      message: "Error fetching notifications"
    });

  }

};


module.exports = {
  sendNotification,
  getNotifications
};