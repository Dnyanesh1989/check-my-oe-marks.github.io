// Sample student data (replace with your actual data)
const students = [
    { roll: 59887, name: "CHAKOR SHREYA RAMESH", results: { Maths: "--",} },
    { roll: 59349, name: "DINGAR KHUSHI ANIL", results: { Maths: 11} },
    { roll: 103, name: "Charlie", results: { Maths: 85, Science: 91, English: 89 } }
];

function showResult() {
    const rollInput = document.getElementById('rollInput').value;
    const resultDiv = document.getElementById('result');

    const student = students.find(s => s.roll == rollInput); // Find student by roll number

    if (student) {
        let resultHTML = `<h3>${student.name} - Roll Number: ${student.roll}</h3>`;
        resultHTML += "<p>Results:</p><ul>";
        for (const subject in student.results) {
            resultHTML += `<li>${subject}: ${student.results[subject]}</li>`;
        }
        resultHTML += "</ul>";
        resultDiv.innerHTML = resultHTML;
    } else {
        resultDiv.innerHTML = "<p>No student found with that roll number.</p>";
    }
}