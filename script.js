const selectionButton = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const myScore = document.querySelector("[my-score]");
const computerScore = document.querySelector("[computer-score]");
const arrItem = [
  {
    name: "batu",
    emoji: "✊",
    beats: "gunting",
  },
  {
    name: "kertas",
    emoji: "✋",
    beats: "batu",
  },
  {
    name: "gunting",
    emoji: "✌",
    beats: "kertas",
  },
];

selectionButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    const selectionItem = button.dataset.selection;
    const selection = arrItem.find((item) => item.name === selectionItem);
    displayResult(selection);
  });
});

function displayResult(selection) {
  const computerSelection = playRound();
  const iamWinner = theWinnerIs(selection, computerSelection);
  const computerWinner = theWinnerIs(computerSelection, selection);

  showSelectionResult(computerSelection, computerWinner);
  showSelectionResult(selection, iamWinner);

  if (iamWinner) addScore(myScore);
  if (computerWinner) addScore(computerScore);
}

function addScore(score) {
  score.innerText = parseInt(score.innerText) + 1;
}

function showSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

function theWinnerIs(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function playRound() {
  const randomIndex = Math.floor(Math.random() * arrItem.length);
  return arrItem[randomIndex];
}
