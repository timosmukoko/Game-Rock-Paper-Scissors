
function play() {

  let choices = ["Rock", "Paper", "Scissors"];
  let maxTries = 3;
  let tryCount = 0;
  let hasWon = false;
  // Function to get the computer's choice
  function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  // Function to determine the winner
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Paper" && computerChoice === "Rock") ||
      (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
      hasWon = true; // Set hasWon to true to stop the game
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }

  while (tryCount < maxTries && !hasWon) {
    tryCount++;

    // Prompt the user to make a choice
    let userChoice = prompt(`Attempt ${tryCount}: Choose Rock, Paper, or Scissors`);
    userChoice = userChoice ? userChoice.trim() : "";
    //userChoice = userChoice.toLocaleLowerCase();

    // Validate user choice
    if (!choices.includes(userChoice)) {
      alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
      tryCount--; // Decrement tryCount to allow another attempt
      continue; // Skip the rest of the loop and prompt again
    }

    // Get the computer's choice and determine the winner
    let computerChoice = getComputerChoice();
    alert(`Computer chose: ${computerChoice}`);

    let result = determineWinner(userChoice, computerChoice);
    alert(result);

    if (hasWon) {
      alert("Congratulations! You won the game!");
    } else if (tryCount === maxTries) {
      alert("Sorry, you've used all your attempts. Better luck next time!");
    }
  }
}
