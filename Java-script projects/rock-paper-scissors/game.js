// Select all button elements (rock, paper, scissors)
const buttons = document.querySelectorAll("button");

// Get the result display element
const resultEl = document.getElementById("result");

// Get the elements to display user and computer scores
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// Add click event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Play a round when a button is clicked
    const result = playRound(button.id, computerPlay());

    // Display the result message
    resultEl.textContent = result;
  });
});

// Function to randomly select the computer's choice
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];  // Possible choices
  const randomChoice = Math.floor(Math.random() * choices.length); // Get a random index
  return choices[randomChoice]; // Return the random choice
}

// Function to play one round of the game
function playRound(playerSelection, computerSelection) {
  // If both choices are the same, it's a tie
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  // Conditions where the player wins
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;  // Increment player's score
    playerScoreEl.textContent = playerScore;  // Update score on screen
    return "You win! " + playerSelection + " beats " + computerSelection;
  }

  // Otherwise, the computer wins
  else {
    computerScore++;  // Increment computer's score
    computerScoreEl.textContent = computerScore;  // Update score on screen
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}
