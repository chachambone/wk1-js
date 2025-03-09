function grade_gen(){
    let marks = prompt("Input students marks")

    // Convert input to a number
    marks = parseFloat(marks)

    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input! Please enter a number between 0 and 100.");
        return;
    }

    // Determine grade 

    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Display output
    alert(`Marks: ${marks}\nGrade: ${grade}`);
    console.log(`Marks: ${marks}, Grade: ${grade}`);
}
