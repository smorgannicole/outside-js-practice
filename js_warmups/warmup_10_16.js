// Generate a random number between 1 and 100 (inclusive)
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Initialize the number of attempts
let attempts = 0;

// Function to handle the user's guess
const checkGuess = () => {
    // Get the user's guess from the input field
    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
    // Check if the guess is valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        checkGuess();
    } else {
        // they have entered a valid number
        // Increment the number of attempts
        attempts++;
        // Check if the guess is correct
        if (userGuess === targetNumber) {
            // if true, display a winning message
            alert(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
            return;
        } else {
            // if false, provide a hint and call checkGuess() again
            const hint = userGuess < targetNumber ? "Try a higher number." : "Try a lower number.";
            alert(`Incorrect guess. ${hint}`);
            checkGuess();
        }
    }
};

// Start the game
checkGuess();