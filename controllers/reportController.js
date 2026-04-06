const { db } = require("../config/firebase");

const getEmergencyReports = async (req, res) => {
  try {

    const snapshot = await db.collection("emergency_reports").get();

    const reports = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(reports);

  } catch (err) {
    res.status(500).json({ message: "Error fetching reports" });
  }
};


const getSystemLogs = async (req, res) => {
  try {

    const snapshot = await db.collection("system_logs").get();

    const logs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(logs);

  } catch (err) {
    res.status(500).json({ message: "Error fetching logs" });
  }
};

module.exports = {
  getEmergencyReports,
  getSystemLogs
};