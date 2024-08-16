const gameBoard = require("./gameBoard");

const gbd = gameBoard();

const player = () => {
  return [
    {
      type: "real",
      GameBoard: gbd.getBoard(),
    },
    {
      type: "computer",
      GameBoard: gbd.getBoard(),
    },
  ];
};

module.exports = player;
