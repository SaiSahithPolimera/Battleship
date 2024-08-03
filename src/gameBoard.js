const gameBoard = (rowPosition, colPosition, shipIndex, axis = 1) => {
  const board = [];
  let rowSize = 10;
  let colSize = 10;
  for (let rowIndex = 0; rowIndex < rowSize; rowIndex++) {
    let row = [];
    for (let colIndex = 0; colIndex < colSize; colIndex++) {
      row.push("");
    }
    board.push(row);
  }
  if (
    rowPosition === undefined ||
    colPosition === undefined ||
    shipIndex === undefined
  ) {
    return board;
  }
  return "";
};

module.exports = gameBoard;
