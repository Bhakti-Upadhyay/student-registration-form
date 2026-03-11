const Enrollment = require("../models/Enrollment");

exports.enrollCourse = async (req, res) => {
  const enroll = new Enrollment(req.body);
  await enroll.save();
  res.json(enroll);
};

exports.getEnrollments = async (req, res) => {
  const data = await Enrollment.find();
  res.json(data);
};