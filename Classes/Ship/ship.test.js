import Ship from "./index.js";

test("Ship can't be hit", () => {
  const ship = new Ship(4);

  ship.hit();

  expect(ship.hits).toBe(1);
});

test("Ship doesn't sink", () => {
  const ship = new Ship(1);

  ship.hit();

  expect(ship.isSunk()).toBe(true);
});
