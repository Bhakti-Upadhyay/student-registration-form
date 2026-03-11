const express = require("express");
const router = express.Router();
const controller = require("../controllers/enrollmentController");

router.post("/", controller.enrollCourse);
router.get("/", controller.getEnrollments);

module.exports = router;