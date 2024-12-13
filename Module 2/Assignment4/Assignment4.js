// This program repeatedly prompts the user for numbers until they enter zero.
// It then displays the numbers in descending order in the console.
const numList = [];
let input;

do {
    input = parseInt(prompt('Enter a positive number (or 0 to stop):'), 10);

    if (isNaN(input) || input < 0) {
        console.log('Invalid input. Please enter a positive number.');
    } else if (input !== 0) {
        numList.push(input);
    }
} while (input !== 0);

numList.sort((x, y) => y - x);
console.log('Numbers in descending order:', numList);
