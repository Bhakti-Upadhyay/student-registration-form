const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");


// Register Student

router.post("/register", studentController.registerStudent);


// Get Students

router.get("/", studentController.getStudents);


module.exports = router;