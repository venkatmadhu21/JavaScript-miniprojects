// Array storing the possible button colors in the game
const buttonColors = ["red", "green", "blue", "yellow"];

// Array to store the generated sequence by the game
let gamePattern = [];

// Array to store the sequence of colors clicked by the user
let userClickedPattern = [];

// Variable to track whether the game has started or not
let started = false;

// Variable to track the current level
let level = 0;

// Event listener to detect when a key is pressed to start the game
document.addEventListener("click", function () {
  if (!started) {
    // Display current level on the heading
    document.getElementById("level-title").textContent = `Level ${level}`;

    // Start the game by generating the first color
    nextSequence();

    // Set the flag to indicate that the game has started
    started = true;
  }
});

// Add click event listeners to all buttons with class "btn"
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function () {
    // Get the color (id) of the button clicked
    const userChosenColor = this.id;

    // Store the clicked color in userClickedPattern array
    userClickedPattern.push(userChosenColor);

    // Play sound for the button clicked
    playSound(userChosenColor);

    // Animate the button press visually
    animatePress(userChosenColor);

    // Check if the user's answer is correct so far
    checkAnswer(userClickedPattern.length - 1);
  });
});

// Function to generate the next color in the game sequence
function nextSequence() {
  // Reset the userClickedPattern for the next level
  userClickedPattern = [];

  // Increase the level count
  level++;

  // Update the heading text to show current level
  document.getElementById("level-title").textContent = `Level ${level}`;

  // Generate a random number between 0 and 3
  const randomNumber = Math.floor(Math.random() * 4);

  // Pick a random color based on the random number
  const randomColor = buttonColors[randomNumber];

  // Add the randomly chosen color to the game pattern
  gamePattern.push(randomColor);

  // Delay before playing sound and animation for next color
  setTimeout(() => {
    playSound(randomColor);         // Play the sound of the chosen color
    animatePress(randomColor);      // Animate the chosen button
  }, 500);
}

// Function to check the user's clicked pattern with the game pattern
function checkAnswer(currentLevel) {
  // Check if the current clicked color matches the game pattern
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // If user has completed the full sequence correctly
    if (userClickedPattern.length === gamePattern.length) {
      // Wait for 1 second and go to next sequence
      setTimeout(nextSequence, 1000);
    }
  } else {
    // If user clicked the wrong color

    playSound("wrong");  // Play wrong sound

    // Add 'game-over' class for a visual effect
    document.body.classList.add("game-over");

    // Change the heading text to show Game Over message
    document.getElementById("level-title").textContent = "Game Over! Press Any Key to Restart";

    // Remove the 'game-over' class after a short delay
    setTimeout(() => {
      document.body.classList.remove("game-over");
    }, 200);

    // Reset the game
    startOver();
  }
}

// Function to play sound corresponding to a color
function playSound(color) {
  const audio = new Audio(`sounds/${color}.mp3`);
  audio.play();
}

// Function to add a visual press effect to buttons
function animatePress(color) {
  const btn = document.getElementById(color);
  btn.classList.add("pressed");

  // Remove the pressed effect after a short delay
  setTimeout(() => btn.classList.remove("pressed"), 100);
}

// Function to reset the game variables after game over
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
