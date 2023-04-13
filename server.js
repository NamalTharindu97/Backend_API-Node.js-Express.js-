const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
