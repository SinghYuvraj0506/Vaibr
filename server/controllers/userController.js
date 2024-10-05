const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ msg: "email already exists", success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({ name, email, password: hashedPassword });
        res.send({ msg: "user registered", success: true, newUser });
    } catch (error) {
        res.status(500).send({ msg: "an error occurred", success: false });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            return res.status(400).send({ msg: "email not found", success: false });
        }
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(400).send({ msg: "wrong email or password", success: false });
        }
        const token = jwt.sign({ id: existingUser._id }, process.env.SECRET_KEY, {
            expiresIn: "1h",
        });
        res.send({ msg: "login successful", success: true, existingUser, token });
    } catch (error) {
        res.status(500).send({ msg: "an error occurred", success: false });
    }
};

module.exports = {
    registerUser,
    loginUser,
};
