function calculateArea() {
    // Get the radius from the user using the prompt() function
    let radius = parseFloat(prompt("Enter the radius of the circle:"));

    // Check if the input is valid
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return;
    }

    // Calculate the area of the circle
    let area = Math.PI * Math.pow(radius, 2);

    // Round off the result to two decimal places
    let roundedArea = area.toFixed(2);

    // Display the result
    alert(`The area of the circle with radius ${radius} is ${roundedArea}`);
}
calculateArea();
