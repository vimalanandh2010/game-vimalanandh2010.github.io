let correctNumber = Math.floor(Math.random() * 50) + 1;
let guessCount = 0;
let startTime = new Date();
document.getElementById("startTime").textContent = startTime.toLocaleTimeString();
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const revealBtn = document.getElementById("revealBtn");
const resetBtn = document.getElementById("resetBtn");
const resultDisplay = document.getElementById("result");
const correctNumberDisplay = document.getElementById("correctNumber");
const logTableBody = document.querySelector("#logTable tbody");
function logGuess(guess, outcome) {
  guessCount++;
  const row = document.createElement("tr");
  const countCell = document.createElement("td");
  countCell.textContent = guessCount;
  row.appendChild(countCell);
  const guessCell = document.createElement("td");
  guessCell.textContent = guess;
  row.appendChild(guessCell);
  const resultCell = document.createElement("td");
  resultCell.textContent = outcome;
  row.appendChild(resultCell);
  const timeCell = document.createElement("td");
  timeCell.textContent = new Date().toLocaleTimeString();
  row.appendChild(timeCell);
  logTableBody.appendChild(row);
}
guessBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 50) {
    alert("Please enter a valid number between 1 and 50.");
    return;
  }

  if (guess === correctNumber) {
    resultDisplay.textContent = "🎉 Correct! You guessed the number!";
    resultDisplay.style.color = "green";
    correctNumberDisplay.textContent = `Number was: ${correctNumber}`;
    logGuess(guess, "Correct");
    endGame();
  } else if (guess < correctNumber) {
    resultDisplay.textContent = "⬆️ Too low!";
    resultDisplay.style.color = "orange";
    logGuess(guess, "Too low");
  } else {
    resultDisplay.textContent = "⬇️ Too high!";
    resultDisplay.style.color = "orange";
    logGuess(guess, "Too high");
  }

  guessInput.value = "";
  guessInput.focus();
});

revealBtn.addEventListener("click", () => {
  correctNumberDisplay.textContent = `Number was: ${correctNumber}`;
  resultDisplay.textContent = "🔍 Number revealed!";
  resultDisplay.style.color = "red";
  endGame();
});
resetBtn.addEventListener("click", () => {
  correctNumber = Math.floor(Math.random() * 50) + 1;
  guessCount = 0;
  startTime = new Date();
  document.getElementById("startTime").textContent = startTime.toLocaleTimeString();
  document.getElementById("endTime").textContent = "--";
  resultDisplay.textContent = "";
  correctNumberDisplay.textContent = "";
  logTableBody.innerHTML = "";
  guessInput.value = "";
  guessInput.focus();
});
function endGame() {
  document.getElementById("endTime").textContent = new Date().toLocaleTimeString();
  guessInput.disabled = true;
  guessBtn.disabled = true;
}
