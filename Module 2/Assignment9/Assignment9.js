function even(numbers) {
    // Create a new array to store even numbers
    let evenNumbers = [];

    // Loop through the numbers array and check if the number is even
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) { // If the number is even
            evenNumbers.push(numbers[i]); // Add it to the evenNumbers array
        }
    }

    // Return the new array with even numbers
    return evenNumbers;
}

// Hardcoded array of numbers
let numbersArray = [2, 7, 4, 3, 8, 5, 10];

// Call the even function and store the result in a new variable
let evenArray = even(numbersArray);

// Print both the original and the new array to the console
console.log("Original array:", numbersArray);
console.log("Array with even numbers:", evenArray);
