const gameBoard = require("./gameBoard");
const GameBoard = gameBoard();

beforeEach(() => {
  GameBoard.initializeBoard();
});

test("If no parameters by default gameBoard returns an empty board", () => {
  expect(GameBoard.getBoard()).toStrictEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("First ship should be placed at specified position", () => {
  GameBoard.placeShip(3, 3, 1, 0);
  expect(GameBoard.getBoard()).toStrictEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "1", "", "", "", "", "", "", ""],
    ["", "", "1", "", "", "", "", "", "", ""],
    ["", "", "1", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("Second ship should be placed at specified position", () => {
  GameBoard.placeShip(6, 6, 2, 1);
  expect(GameBoard.getBoard()).toStrictEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "2", "2", "2", "2", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("Second ship should be positioned horizontally", () => {
  GameBoard.placeShip(6, 6, 2, 0);
  expect(GameBoard.getBoard()).toStrictEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "2", "", "", "", ""],
    ["", "", "", "", "", "2", "", "", "", ""],
    ["", "", "", "", "", "2", "", "", "", ""],
    ["", "", "", "", "", "2", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("The last ship should be positioned at specified position", () => {
  GameBoard.placeShip(3, 3, 4, 0);
  expect(GameBoard.getBoard()).toStrictEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "4", "", "", "", "", "", "", ""],
    ["", "", "4", "", "", "", "", "", "", ""],
    ["", "", "4", "", "", "", "", "", "", ""],
    ["", "", "4", "", "", "", "", "", "", ""],
    ["", "", "4", "", "", "", "", "", "", ""],
    ["", "", "4", "", "", "", "", "", "", ""],
    ["", "", "4", "", "", "", "", "", "", ""],
    ["", "", "4", "", "", "", "", "", "", ""],
  ]);
});

test("Should be able to place all ships", () => {
  GameBoard.placeShip(1, 2, 1, 1);
  GameBoard.placeShip(6, 8, 2, 0);
  GameBoard.placeShip(4, 5, 3, 1);
  GameBoard.placeShip(3, 3, 4, 0);
  expect(GameBoard.getBoard()).toStrictEqual([
    ["", "1", "1", "1", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "4", "", "", "", "", "", "", ""],
    ["", "", "4", "", "3", "3", "3", "3", "3", "3"],
    ["", "", "4", "", "", "", "", "", "", ""],
    ["", "", "4", "", "", "", "", "2", "", ""],
    ["", "", "4", "", "", "", "", "2", "", ""],
    ["", "", "4", "", "", "", "", "2", "", ""],
    ["", "", "4", "", "", "", "", "2", "", ""],
    ["", "", "4", "", "", "", "", "", "", ""],
  ]);
});

test("Receive attack returns true when a ship is attacked", () => {
  GameBoard.placeShip(1, 2, 1, 1);
  GameBoard.placeShip(6, 8, 2, 0);
  GameBoard.placeShip(4, 5, 3, 1);
  GameBoard.placeShip(3, 3, 4, 0);
  expect(GameBoard.receiveAttack(0, 1)).toBe(true);
});

test("Receive attack returns false when no ship is effected by the attack", () => {
  GameBoard.placeShip(1, 2, 1, 1);
  GameBoard.placeShip(6, 8, 2, 0);
  GameBoard.placeShip(4, 5, 3, 1);
  GameBoard.placeShip(3, 3, 4, 0);
  expect(GameBoard.receiveAttack(1, 1)).toBe(false);
});

test("report function returns false if all ships are not sunk", () => {
  expect(GameBoard.report()).toBe(false);
});

test("report function returns true if all the ships are sunk", () => {
  GameBoard.placeShip(1, 1, 1, 1);
  GameBoard.placeShip(2, 1, 2, 1);
  GameBoard.placeShip(3, 1, 3, 1);
  GameBoard.placeShip(4, 1, 4, 1);
  GameBoard.receiveAttack(0, 1);
  GameBoard.receiveAttack(0, 2);
  GameBoard.receiveAttack(0, 3);
  GameBoard.receiveAttack(1, 0);
  GameBoard.receiveAttack(1, 1);
  GameBoard.receiveAttack(1, 2);
  GameBoard.receiveAttack(1, 3);
  GameBoard.receiveAttack(2, 0);
  GameBoard.receiveAttack(2, 1);
  GameBoard.receiveAttack(2, 2);
  GameBoard.receiveAttack(2, 3);
  GameBoard.receiveAttack(2, 4);
  GameBoard.receiveAttack(2, 5);
  GameBoard.receiveAttack(3, 0);
  GameBoard.receiveAttack(3, 1);
  GameBoard.receiveAttack(3, 2);
  GameBoard.receiveAttack(3, 3);
  GameBoard.receiveAttack(3, 4);
  GameBoard.receiveAttack(3, 5);
  GameBoard.receiveAttack(3, 6);
  GameBoard.receiveAttack(3, 7);
  expect(GameBoard.report()).toBe(true);
});

test("Should return a message if user attacks in the same position", () => {
  GameBoard.placeShip(1, 1, 1, 1);
  GameBoard.placeShip(2, 1, 2, 1);
  GameBoard.placeShip(3, 1, 3, 1);
  GameBoard.placeShip(4, 1, 4, 1);
  GameBoard.receiveAttack(0, 1);
  expect(GameBoard.receiveAttack(0, 1)).toMatch("Cannot attack twice in same position");
})