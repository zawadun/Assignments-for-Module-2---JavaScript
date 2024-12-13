function rollDice() {
    // Function to return a random dice roll between 1 and 6
    return Math.floor(Math.random() * 6) + 1;
}

function mainProgram() {
    let rollResult;
    let rollsList = document.getElementById("rolls");

    // Keep rolling the dice until the result is 6
    do {
        rollResult = rollDice();
        
        // Create a list item and add the roll result to the unordered list
        let listItem = document.createElement("li");
        listItem.textContent = `Rolled: ${rollResult}`;
        rollsList.appendChild(listItem);
        
    } while (rollResult !== 6); // Stop when the roll result is 6
}

// Assign the main program to be triggered when the button is clicked
function rollDice() {
    mainProgram();
}
