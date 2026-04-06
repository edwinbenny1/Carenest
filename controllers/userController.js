const { db } = require("../config/firebase");


// GET ALL USERS
const getUsers = async (req, res) => {
  try {

    const snapshot = await db.collection("users").get();

    const users = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(users);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};


// GET SINGLE USER
const getUserById = async (req, res) => {
  try {

    const doc = await db.collection("users").doc(req.params.id).get();

    if (!doc.exists) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ id: doc.id, ...doc.data() });

  } catch (error) {
    res.status(500).json({ message: "Error fetching user" });
  }
};


// CREATE USER
const createUser = async (req, res) => {
  try {

    const newUser = {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      status: "Active",
      lastActive: "Just now"
    };

    const docRef = await db.collection("users").add(newUser);

    res.json({ id: docRef.id, ...newUser });

  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};


// UPDATE USER
const updateUser = async (req, res) => {
  try {

    const userRef = db.collection("users").doc(req.params.id);

    await userRef.update(req.body);

    res.json({ message: "User updated successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error updating user" });
  }
};


// DELETE USER
const deleteUser = async (req, res) => {
  try {

    await db.collection("users").doc(req.params.id).delete();

    res.json({ message: "User deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
};


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};