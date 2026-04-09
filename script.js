function showResult() {
    const roll = document.getElementById("rollInput").value;
    const resultDiv = document.getElementById("result");

    const students = {
    58152: {nm:"F.Y.B.Sc. (Animation)", name: "KODRE YASH SHANKAR", marks: 20}
	
	
    };

    if (students[roll]) {
        const status = students[roll].marks >= 50 ? "Pass" : "Fail";
        const badge = status === "Pass" ? "success" : "danger";

        resultDiv.innerHTML = `
            <div class="alert alert-info">
			<h5>Class: ${students[roll].nm}</h5>
                <h5>Name: ${students[roll].name}</h5>
                <p>Marks: <strong>${students[roll].marks}</strong></p>
                <span class="badge bg-${badge}">${status}</span>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `<div class="alert alert-danger">Result not found!</div>`;
    }
}
