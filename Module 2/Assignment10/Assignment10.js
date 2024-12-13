// Function to run the voting program
function startVoting() {
    // Ask the number of candidates
    let numCandidates = parseInt(prompt("How many candidates are there?"));
    
    // Initialize an array to store candidate names and vote counts
    let candidates = [];

    // Get names for the candidates
    for (let i = 1; i <= numCandidates; i++) {
        let name = prompt(`Name for candidate ${i}:`);
        candidates.push({ name: name, votes: 0 });
    }

    // Ask for the number of voters
    let numVoters = parseInt(prompt("How many voters are there?"));

    // Loop through each voter and record their vote
    for (let i = 1; i <= numVoters; i++) {
        let vote = prompt(`Voter ${i}, who do you vote for?`);
        
        // Find the candidate with the name matching the vote
        let candidate = candidates.find(candidate => candidate.name.toLowerCase() === vote.toLowerCase());

        // If the candidate exists, increment their vote count
        if (candidate) {
            candidate.votes++;
        } else {
            console.log("Invalid vote: " + vote);
        }
    }

    // Sort candidates based on the number of votes (descending order)
    candidates.sort((a, b) => b.votes - a.votes);

    // Get the winner
    let winner = candidates[0];

    // Display the winner and the voting results
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
    console.log("Results:");
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}

// Start the voting process
startVoting();
