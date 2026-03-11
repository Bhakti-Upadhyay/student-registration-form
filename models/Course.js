const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: String,
  courseCode: String,
  instructor: String
});

module.exports = mongoose.model("Course", courseSchema);
