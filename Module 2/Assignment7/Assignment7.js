function rollDice(sides) {
    // Function to return a random dice roll between 1 and the specified number of sides
    return Math.floor(Math.random() * sides) + 1;
}

function startRolling() {
    let sides = document.getElementById("sides").value; // Get number of sides from input
    if (sides < 2) {
        alert("Please enter a number greater than or equal to 2.");
        return;
    }

    let maxNumber = parseInt(sides); // The user wants to roll until the max number is rolled
    let rollResult;
    let rollsList = document.getElementById("rolls");

    // Clear the previous roll results from the list
    rollsList.innerHTML = "";

    // Keep rolling the dice until the maximum number is rolled
    do {
        rollResult = rollDice(sides);
        
        // Create a list item for each roll result and add it to the unordered list
        let listItem = document.createElement("li");
        listItem.textContent = `Rolled: ${rollResult}`;
        rollsList.appendChild(listItem);

    } while (rollResult !== maxNumber); // Stop when the roll result is equal to the maximum number

    // Once done, display a message indicating the end of the rolls
    let endMessage = document.createElement("li");
    endMessage.textContent = `You rolled the maximum number (${maxNumber})!`;
    rollsList.appendChild(endMessage);
}
