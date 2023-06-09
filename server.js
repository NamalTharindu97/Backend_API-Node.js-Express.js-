const express = require("express");
const errorHandler = require("./middleware/errHandler");
const dbConnection = require("./config/dbConnection");

const app = express();
const dotenv = require("dotenv").config();

dbConnection();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
