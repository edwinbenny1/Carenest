const express = require("express");
const cors = require("cors");
require("dotenv").config();

const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);


// ================= SOCKET SERVER =================
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// store socket instance so controllers can use it
app.set("io", io);


// ================= MIDDLEWARE =================
app.use(cors({
  origin: "*",
  credentials: true
}));

app.use(express.json());


// ================= IMPORT ROUTES =================
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const emergencyRoutes = require("./routes/emergencyRoutes");
const reportRoutes = require("./routes/reportRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

console.log("Routes imported");


// ================= API ROUTES =================
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/emergencies", emergencyRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/notifications", notificationRoutes);


// ================= TEST ROUTE =================
app.get("/", (req, res) => {
  res.send("AAL Backend Running");
});


// ================= SOCKET CONNECTION =================
io.on("connection", (socket) => {

  console.log("User connected:", socket.id);

  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

});


// ================= START SERVER =================
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});