const asyncHandler = require("express-async-handler");

//@descPOST  register a user
//@Route GET api/users/register
//@access public
const registerUser = asyncHandler((req, res) => {
  res.json({ message: "register the user" });
});

//@desc POST login user
//@Route POST api/users/login
//@access public
const loginUser = asyncHandler((req, res) => {
  res.json({ message: "login user" });
});

//@desc GET current users
//@Route POST api/users/current
//@access public
const currentUser = asyncHandler((req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
