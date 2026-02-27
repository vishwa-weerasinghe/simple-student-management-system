
let students = [];

function addStudent() {
    const id = document.getElementById('studentId').value.trim();
    const name = document.getElementById('studentName').value.trim();
    const course = document.getElementById('course').value.trim();
    const marks = document.getElementById('marks').value;
    // 2. Validate inputs (no empty values, marks 0–100)
    if (id === "" || name === "" || course === "" || marks === "") {
        alert("All fields are required!");
        return;
    }
    if (marks < 0 || marks > 100) {
        alert("Marks must be a number between 0 and 100.");
        return;
    }
    // 3. Store student as an object in the array
    const student = {
        id: id,
        name: name,
        course: course,
        marks: marks
    };
    students.push(student);
    // 4. Clear input fields
    document.getElementById('studentId').value = "";
    document.getElementById('studentName').value = "";
    document.getElementById('course').value = "";
    document.getElementById('marks').value = "";
    // 5. Display students
    displayStudents(students);
}

// TODO #3: Display students in the table
function displayStudents(list) {
    // 1. Clear table body
    const tableBody = document.getElementById('studentTable');
    tableBody.innerHTML = "";
    // 2. Loop through student list
    list.forEach((student, index) => {
        // 3. Calculate Pass/Fail (>=50 Pass)
        const result = student.marks >= 50 ? "Pass" : "Fail";
        const resultClass = student.marks >= 50 ? "pass" : "fail";
        // 4. Create table rows dynamically
        const row = `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.course}</td>
                    <td>${student.marks}</td>
                    <td class="${resultClass}">${result}</td>
                    <td>
                        <button onclick="deleteStudent(${index})">Delete</button>
                    </td>
                </tr>
            `;
        tableBody.innerHTML += row;
    });
}

// TODO #5: Delete student by index
function deleteStudent(index) {
    // Remove student from array
    students.splice(index, 1);
    // Refresh table
    displayStudents(students);

}

// TODO #6: Search student by ID or Name
function searchStudent() {
    // Filter student list
    const fStudents = document.getElementById('search').value.toLowerCase();
    const filtered = students.filter(s =>
        s.id.toLowerCase().startsWith(fStudents) ||
        s.name.toLowerCase().startsWith(fStudents)
    );
    // Display filtered students
    displayStudents(filtered);
}