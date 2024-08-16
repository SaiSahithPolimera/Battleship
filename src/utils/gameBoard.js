const Ships = require("./ship");

const gameBoard = () => {
  let board = [];
  const ships = Ships();
  const initializeBoard = () => {
    board = [];
    let rowSize = 10;
    let colSize = 10;
    for (let rowIndex = 0; rowIndex < rowSize; rowIndex++) {
      let row = [];
      for (let colIndex = 0; colIndex < colSize; colIndex++) {
        row.push("");
      }
      board.push(row);
    }
  };

  const placeShip = (rowPosition, colPosition, shipIndex, axis = 1) => {
    if (
      rowPosition === undefined ||
      colPosition === undefined ||
      shipIndex === undefined
    ) {
      return;
    } else {
      const ship = ships[shipIndex - 1];
      if (axis === 0) {
        for (let i = 0; i < ship.length; i++) {
          board[rowPosition - 1 + i][colPosition - 1] = shipIndex.toString();
        }
      } else {
        for (let i = 0; i < ship.length; i++) {
          board[rowPosition - 1][colPosition - 1 + i] = shipIndex.toString();
        }
      }
    }
  };

  const receiveAttack = (rowPos, colPos) => {
    const board = getBoard();
    const cell = board[rowPos][colPos];
    if (board[rowPos][colPos] === "A") {
      return "Cannot attack twice in same position";
    }
    board[rowPos][colPos] = "A";
    if (cell === "1" || cell === "2" || cell === "3" || cell === "4") {
      const shipIndex = Number(cell) - 1;
      ships[shipIndex].hit();
      return true;
    } else {
      return false;
    }
  };

  const report = () => {
    let sunkShipCount = 0;
    ships.forEach((ship) => {
      if (ship.isSunk() === true) {
        sunkShipCount++;
      }
    });
    return sunkShipCount === ships.length;
  };

  const getBoard = () => {
    if (board.length === 0) {
      initializeBoard();
    }
    return board;
  };
  return { initializeBoard, getBoard, placeShip, receiveAttack, report };
};

module.exports = gameBoard;
