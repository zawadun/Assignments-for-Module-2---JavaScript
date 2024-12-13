function startProgram() {
    let numbers = [];
    let input;
    
    while (true) {
        input = prompt("Enter a number:");
        
        // Check if the user clicked "Cancel" or entered an empty input
        if (input === null || input === "") {
            break;
        }

        // Convert the input to a number
        input = parseFloat(input);

        // Check if the input is a valid number
        if (isNaN(input)) {
            alert("Please enter a valid number.");
            continue;
        }

        // Check if the number has already been entered
        if (numbers.includes(input)) {
            alert("This number has already been entered. Stopping the program.");
            break;
        }

        // Add the number to the array
        numbers.push(input);
    }

    // Sort the numbers in ascending order
    numbers.sort((a, b) => a - b);

    // Display the numbers in the console
    console.log("Numbers entered: " + numbers.join(", "));
    
    // Display the numbers on the webpage
    document.getElementById("output").textContent = "Numbers entered: " + numbers.join(", ");
}
