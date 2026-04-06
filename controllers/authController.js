const { db } = require("../config/firebase");

exports.loginAdmin = async (req, res) => {

  const { email, password } = req.body;

  if (email !== "admin@aal.com") {
    return res.status(401).json({
      message: "Unauthorized admin"
    });
  }

  try {

    const adminRef = db.collection("admins").doc("mainAdmin");

    const doc = await adminRef.get();

    if (!doc.exists) {
      return res.status(404).json({
        message: "Admin not found"
      });
    }

    const adminData = doc.data();

    if (password === adminData.password) {

      return res.json({
        message: "Login successful",
        role: "admin"
      });

    }

    return res.status(401).json({
      message: "Invalid password"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error"
    });

  }

};