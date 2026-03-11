const Student = require("../models/Student");


// Register Student

exports.registerStudent = async (req, res) => {

try {

const student = new Student({

name: req.body.name,
enrollmentNumber: req.body.enrollmentNumber,
email: req.body.email,
password: req.body.password

});

await student.save();

res.status(201).json({
message: "Student Registered Successfully",
student
});

}

catch(error){

res.status(500).json({
message: "Error registering student",
error
});

}

};



// Get all students

exports.getStudents = async (req,res)=>{

try{

const students = await Student.find();

res.json(students);

}

catch(error){

res.status(500).json({error});

}

};