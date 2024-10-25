function humanchoice() {
    let x = prompt("Enter 1 for Rock, 2 for Paper, or 3 for Scissors");
    let humanin = parseInt(x);
    return humanin;
}

function computerchoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function playround(humaninput, computerinput) {
    if (humaninput === computerinput) {
        console.log("It is a draw, points will be shared");
    } 
    // Rock (1) vs. Paper (2)
    else if (humaninput === 1 && computerinput === 2) {
        console.log("Computer won, you lost.");
    } 
    else if (humaninput === 1 && computerinput === 3) {
        console.log("You win! Computer lost.");
    } 
    // Paper (2) vs. Rock (1)
    else if (humaninput === 2 && computerinput === 1) {
        console.log("You win! Computer lost.");
    } 
    else if (humaninput === 2 && computerinput === 3) {
        console.log("Computer won, you lost.");
    } 
    // Scissors (3) vs. Rock (1)
    else if (humaninput === 3 && computerinput === 1) {
        console.log("Computer won, you lost.");
    } 
    else if (humaninput === 3 && computerinput === 2) {
        console.log("You win! Computer lost.");
    } 
    else {
        console.log("Invalid input, please enter a number between 1 and 3.");
    }
}

// Game Loop
for (let i = 1; i <= 5; i++) {
    console.log("Round " + i);
    let humanSelection = humanchoice();
    let computerSelection = computerchoice();
    playround(humanSelection, computerSelection);
}
