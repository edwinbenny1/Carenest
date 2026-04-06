const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ["admin", "caregiver", "patient"],
    required: true
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  },

  // Link patient with mmWave sensor
  sensorId: {
    type: String,
    default: null
  },

  // Track user activity
  lastActive: {
    type: String,
    default: "Just now"
  }

},
{
  timestamps: true
}
);

module.exports = mongoose.model("User", UserSchema);