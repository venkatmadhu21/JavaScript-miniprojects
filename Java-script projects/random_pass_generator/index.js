// Selecting important elements from the HTML DOM
const btnEl = document.querySelector(".btn"); // "Generate" button
const inputEl = document.getElementById("input"); // Input field where password will be displayed
const copyIconEl = document.querySelector(".fa-copy"); // Copy icon next to the input field
const alertContainerEl = document.querySelector(".alert-container"); // Alert box that shows "Password Copied"

// Event listener for the Generate button
btnEl.addEventListener("click", () => {
  createPassword(); // Call the function to generate a random password
});

// Event listener for the Copy icon
copyIconEl.addEventListener("click", () => {
  copyPassword(); // Call the function to copy the password to clipboard

  // Show the alert only if the input field is not empty
  if (inputEl.value) {
    alertContainerEl.classList.remove("active"); // Remove 'active' class to show alert
    setTimeout(() => {
      alertContainerEl.classList.add("active"); // Add 'active' class again to hide alert after 2 seconds
    }, 2000); // Alert will disappear after 2000 milliseconds (2 seconds)
  }
});

// Function to generate a random password
function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Characters used for creating the password (includes numbers, lowercase, uppercase, symbols)

  const passwordLength = 14; // Length of the generated password
  let password = ""; // Empty string to build the password

  // Loop to generate each character of the password
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length); // Generate a random index
    password += chars.substring(randomNum, randomNum + 1); // Get the character at random index and add it to password
  }

  inputEl.value = password; // Display the generated password in the input field

  alertContainerEl.innerText = password + " copied!"; // Set the alert message (optional)
}

// Function to copy the generated password to clipboard
function copyPassword() {
  inputEl.select(); // Select the text inside the input field
  inputEl.setSelectionRange(0, 9999); // For mobile devices: selects a range of characters

  navigator.clipboard.writeText(inputEl.value); // Copy the selected text to the clipboard
}
