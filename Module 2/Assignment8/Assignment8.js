function concat(array) {
    let concatenatedString = "";

    // Loop through each string in the array and concatenate them
    for (let i = 0; i < array.length; i++) {
        concatenatedString += array[i]; // Add the current element to the string
    }

    return concatenatedString;
}

// Hardcoded array of strings
let namesArray = ["Johnny", "Monica", "Joey", "Mark"];

// Call the concat function and display the result
let result = concat(namesArray);

// Display the result on the HTML page
document.getElementById("result").textContent = result;
