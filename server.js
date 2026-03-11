const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/students", require("./routes/studentRoutes"));
app.use("/courses", require("./routes/courseRoutes"));
app.use("/enroll", require("./routes/enrollmentRoutes"));
app.use("/students", studentRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});