const { db } = require("../config/firebase");

// GET all emergencies
const getEmergencies = async (req, res) => {
  try {

    const snapshot = await db.collection("emergencies").get();

    const emergencies = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(emergencies);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching emergencies" });
  }
};


// UPDATE emergency status
const resolveEmergency = async (req, res) => {
  try {

    const id = req.params.id;

    await db.collection("emergencies").doc(id).update({
      status: "Resolved"
    });

    res.json({ message: "Emergency resolved" });

  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};

module.exports = {
  getEmergencies,
  resolveEmergency
};