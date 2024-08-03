const Ships = require("./ship");

const ships = Ships();

ships.forEach((ship) => {
  test("By default ship is not sunk", () => {
    expect(ship.sunk).toBe(false);
  });

  test("By default hit count is zero", () => {
    expect(ship.hitCount).toEqual(0);
  });

  test("Hit count should increase upon hitting", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hitCount).toEqual(3);
    ship.hitCount = 0;
  });

  test("Hitting the ship until it's length should sink the ship", () => {
    for (i = 0; i < ship.length; i++) {
      ship.hit();
    }
    expect(ship.isSunk()).toBe(true);
  });
});
