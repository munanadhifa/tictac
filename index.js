// JavaScript code goes here

const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function checkWinner() {
  const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pattern of winPattern) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (!board.includes("")) {
    return "Tie";
  }
  return null;
}

function handle(index) {
  if (!gameActive || board[index] !== "") {
    return;
  }
  board[index] = currentPlayer;
  renderBoard();

  const winner = checkWinner();
  if (winner) {
    if (winner === "Tie") {
      alert("its a tie");
    } else {
      alert("Player ${winner} win!");
    }
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function renderBoard() {
  const boardElement = document.getElementById("board");
  boardElement.innerHTML = "";

  for (let i = 0; i < board.length; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = board[i];
    cell.addEventListener("click", () => handle(i));
    boardElement.appendChild(cell);
  }
}

// Initial rendering
renderBoard();
