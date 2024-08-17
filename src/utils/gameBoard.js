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
      return false;
    }

    const ship = ships[shipIndex - 1];
    let indicator = 0;

    const checkForOverlap = (row, col, length, axis) => {
      for (let postionCounter = 0; postionCounter < length; postionCounter++) {
        const r = axis === 0 ? row + postionCounter : row;
        const c = axis === 1 ? col + postionCounter : col;
        if (board[r][c] !== "" && board[r][c] !== shipIndex.toString()) {
          return false;
        }
      }
      return true;
    };

    const clearOldPosition = (row, col, length, axis) => {
      for (let postionCounter = 0; postionCounter < length; postionCounter++) {
        const r = axis === 0 ? row + postionCounter : row;
        const c = axis === 1 ? col + postionCounter : col;
        if (board[r][c] === shipIndex.toString()) {
          board[r][c] = "";
        }
      }
    };

    if (!checkForOverlap(rowPosition - 1, colPosition - 1, ship.length, axis)) {
      return false;
    }

    clearOldPosition(rowPosition - 1, colPosition - 1, ship.length, axis);

    for (
      let postionCounter = 0;
      postionCounter < ship.length;
      postionCounter++
    ) {
      const r = axis === 0 ? rowPosition - 1 + postionCounter : rowPosition - 1;
      const c = axis === 1 ? colPosition - 1 + postionCounter : colPosition - 1;
      board[r][c] = shipIndex.toString();
      indicator++;
    }

    return ship.length === indicator;
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
