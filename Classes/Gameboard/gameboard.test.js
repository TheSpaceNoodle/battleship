import Gameboard from "./index.js";

test("Should be able to add ships to the game board", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([0, 0], [0, 2]);

  expect(gameboard.shipsList.length).toBe(1);
  expect(gameboard.shipsLeft).toBe(1);
});

test("Should be able to destroy ships", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([0, 0], [0, 0]);

  gameboard.receiveAttack([0, 0]);

  expect(gameboard.shipsList.length).toBe(1);
  expect(gameboard.shipsLeft).toBe(0);
  expect(gameboard.gameboard[0][0].isHit).toBe(true);
});
