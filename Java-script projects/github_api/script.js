// Selecting required DOM elements
const searchBtn = document.getElementById("searchBtn");
const usernameInput = document.getElementById("usernameInput");
const userCard = document.getElementById("userCard");

// Event listener for the "Search" button
searchBtn.addEventListener("click", () => {
  // Get the entered GitHub username and trim any extra whitespace
  const username = usernameInput.value.trim();

  // If input is empty, show alert and stop the process
  if (username === "") {
    alert("Please enter a GitHub username.");
    return;
  }

  // Fetch user data from GitHub API
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      // If user not found (e.g., 404), throw an error
      if (!response.ok) {
        throw new Error("User not found");
      }
      // Otherwise, convert response to JSON
      return response.json();
    })
    .then((data) => {
      // Pass the fetched data to displayUser function
      displayUser(data);
    })
    .catch((error) => {
      // Handle errors (e.g., user not found, network error)
      userCard.innerHTML = `<p style="color:red;">${error.message}</p>`;
      userCard.classList.remove("hidden");
    });
});

// Function to display user details in the card
function displayUser(user) {
  // Populate userCard with fetched user data
  userCard.innerHTML = `
    <img src="${user.avatar_url}" alt="Avatar"> <!-- User's GitHub avatar -->
    <h3>${user.name || "No name provided"}</h3> <!-- Display name or fallback -->
    <p><strong>Username:</strong> ${user.login}</p>
    <p><strong>Bio:</strong> ${user.bio || "No bio available"}</p>
    <p><strong>Followers:</strong> ${user.followers}</p>
    <p><strong>Following:</strong> ${user.following}</p>
    <p><strong>Public Repos:</strong> ${user.public_repos}</p>
    <a href="${user.html_url}" target="_blank">View Profile on GitHub</a>
  `;
  
  // Make sure the user card is visible
  userCard.classList.remove("hidden");
}
