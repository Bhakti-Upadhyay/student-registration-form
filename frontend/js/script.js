// SECTION SWITCHING

function showSection(id) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    const activeSection = document.getElementById(id);

    if (activeSection) {
        activeSection.classList.remove("hidden");
    }

    // Load courses when courses section opens
    if (id === "courses") {
        loadCourses();
    }
}



// REGISTER STUDENT

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            enrollmentNumber: document.getElementById("enrollment").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };

        try {

            const response = await fetch("http://localhost:5000/students/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            alert("Student Registered Successfully");

            registerForm.reset();

        } catch (error) {

            console.error("Registration Error:", error);

            alert("Error registering student");

        }

    });

}



// LOGIN (Basic Frontend Login)

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (email && password) {

            alert("Login Successful");

            showSection("courses");

        } else {

            alert("Please enter email and password");

        }

    });

}



// LOAD COURSES FROM DATABASE

async function loadCourses() {

    const tableBody = document.querySelector("#courseTable tbody");

    if (!tableBody) return;

    try {

        const response = await fetch("http://localhost:5000/courses");

        const courses = await response.json();

        tableBody.innerHTML = "";

        courses.forEach(course => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${course.courseName}</td>
                <td>${course.courseCode}</td>
                <td>${course.instructor}</td>
            `;

            tableBody.appendChild(row);

        });

    } catch (error) {

        console.error("Error loading courses:", error);

    }

}