const mongoose = require("mongoose");

const userScheema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      require: [true, "Please add the email"],
    },
    password: {
      type: String,
      require: [true, "please add the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userScheema);
