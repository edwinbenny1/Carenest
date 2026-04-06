const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {

  const { email, password } = req.body;

  if (email === "admin@aal.com" && password === "admin123") {
    return res.json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });

});

module.exports = router;