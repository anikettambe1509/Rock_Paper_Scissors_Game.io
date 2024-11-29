const choices = document.querySelectorAll('.choice');
const resultDisplay = document.getElementById('result');
const resetButton = document.getElementById('reset-btn');

let userChoice = '';
let computerChoice = '';

const choicesArray = ['rock', 'paper', 'scissors'];

// Get computer's random choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choicesArray[randomIndex];
}

// Determine the winner
function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a Draw!";
  }
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'You Win!';
  }
  return 'Computer Wins!';
}

// Handle user choice
choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    userChoice = e.target.getAttribute('data-choice');
    computerChoice = getComputerChoice();

    const result = determineWinner(userChoice, computerChoice);
    resultDisplay.innerHTML = `
      You chose: <strong>${userChoice}</strong><br>
      Computer chose: <strong>${computerChoice}</strong><br>
      <strong>${result}</strong>
    `;

    resetButton.style.display = 'block';
    choices.forEach((btn) => (btn.disabled = true));
  });
});

// Reset the game
resetButton.addEventListener('click', () => {
  resultDisplay.textContent = '';
  resetButton.style.display = 'none';
  choices.forEach((btn) => (btn.disabled = false));
});
