function speedDetector() {
    let speed = prompt("Enter the car's speed (km/h):");

    // Convert input to a number
    speed = parseFloat(speed);

    // Validate input
    if (isNaN(speed) || speed < 0) {
        alert("Invalid input! Please enter a valid speed.");
        return;
    }

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        alert("Ok");
        console.log("Ok");
    } else {
        // Calculate demerit points
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        if (demeritPoints > 12) {
            alert("License suspended");
            console.log("License suspended");
        } else {
            alert(`Points: ${demeritPoints}`);
            console.log(`Points: ${demeritPoints}`);
        }
    }
}
