const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../Controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;
