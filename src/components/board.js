const board = (playerId) => {
  const gameBoard = document.createElement("div");
  gameBoard.id = "gameBoard";
  let rowCount = 10;
  let colCount = 10;
  for (let rowCounter = 0; rowCounter < rowCount; rowCounter++) {
    const row = document.createElement("div");
    for (let colCounter = 0; colCounter < colCount; colCounter++) {
      const cell = document.createElement("div");
      cell.id = "cell" + rowCounter + colCounter;
      cell.classList.add("droppable");
      cell.style.width = "55px";
      cell.style.height = "55px";
      row.appendChild(cell);
    }
    gameBoard.appendChild(row);
  }
  return gameBoard;
};

export { board };
