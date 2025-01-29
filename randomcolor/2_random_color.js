let button = document.getElementById("colorButton");
let bodyBackground = document.body;
let colorHistory = []; // Array to store the color history
let originalColor = "white"; // Store the original color

// Function to generate a random color
function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", function() {
    // Store the current color in history before changing it
    colorHistory.push(bodyBackground.style.backgroundColor || originalColor);

    // Instant color change to a random color
    let newColor = getRandomColor();
    bodyBackground.style.backgroundColor = newColor;

    // Gradually revert through the color history
    let currentIndex = colorHistory.length - 1;

    let interval = setInterval(function() {
        if (currentIndex > 0) {
            bodyBackground.style.backgroundColor = colorHistory[currentIndex - 1];
            currentIndex--;
        } else {
            bodyBackground.style.backgroundColor = originalColor;
            clearInterval(interval); // Stop the interval once it reaches the original color
        }
    }, 1000); // Change color every 1 second (adjustable)
});


button.addEventListener("mouseover", function() {
    button.style.backgroundColor = getRandomColor();  // Change button color on hover
});

// Reset the button's color when the mouse leaves
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = originalButtonColor;  // Reset color when the mouse leaves
});