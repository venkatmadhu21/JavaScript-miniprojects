// Get references to the HTML elements by their IDs
const generateBtn = document.getElementById("generateBtn");  // Button to trigger QR code generation
const qrText = document.getElementById("qrText");            // Input field where user types the text or URL
const qrImage = document.getElementById("qrImage");          // Image element where QR code will be displayed
const qrBox = document.getElementById("qrCodeBox");          // Container box that holds the QR image

// Add click event listener to the Generate button
generateBtn.addEventListener("click", () => {
  // Get and trim the value entered by the user (removes extra spaces)
  const inputValue = qrText.value.trim();

  // If input field is empty, show an alert and stop further execution
  if (inputValue === "") {
    alert("Please enter some text or a URL.");
    return; // Exit the function early
  }

  // Create the URL to fetch the QR code from the API
  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(inputValue)}`;
  
  // Set the source of the image element to the generated QR code URL
  qrImage.src = qrURL;

  // Display the QR code container box (in case it's hidden by default)
  qrBox.style.display = "block";
});
