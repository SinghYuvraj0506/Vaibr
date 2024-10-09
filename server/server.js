const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./config/database");
const userController = require("./controllers/userController");

// database connection
connectDB();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

/* routes */

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.post("/api/user/register", userController.registerUser);
app.post("/api/user/login", userController.loginUser);
app.post("/api/user/verifyOtp", userController.verifyOtp);

app.use("/", (req, res) => {
    res.status(404).json({ message: "route not found" });
});

// port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server started");
});
