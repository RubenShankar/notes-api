console.log("THIS IS AUTH ROUTE");

console.log("AUTH ROUTES LOADED");

const express = require("express");
const router = express.Router();

const { register, login,users } = require("../controller/authController");    // connection with controller

const auth = require("../middleware/authMiddleware");   // connection with middleware

router.post("/register", register);

router.post("/login", login);

router.get("/users",auth,users);

module.exports = router;
