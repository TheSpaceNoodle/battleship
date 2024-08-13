import Ship from "../Ship/index.js";

class Gameboard {
  gameboard = Array(10)
    .fill(null)
    .map(() =>
      Array(10)
        .fill(null)
        .map(() => ({ isHit: false, ship: null }))
    );

  shipsList = [];
  shipsLeft = 0;

  placeShip(coordinates1, coordinates2) {
    const [x1, y1] = coordinates1;
    const [x2, y2] = coordinates2;

    if (x1 !== x2 && y1 !== y2) {
      throw new Error("ship has to be aligned to at least 1 axis");
    }

    const shipSize = Math.abs(x1 + y1 - x2 - y2) + 1;
    const ship = new Ship(shipSize);

    if (x1 === x2) {
      for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
        this.gameboard[x1][i].ship = ship;
      }
    } else {
      for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
        this.gameboard[i][y1].ship = ship;
      }
    }

    this.shipsList.push(ship);
    this.shipsLeft += 1;
  }

  receiveAttack(coordinates) {
    const [x, y] = coordinates;
    const cell = this.gameboard[x][y];

    if (cell.isHit) {
      throw new Error("Those coordinates were already bombed");
    }

    cell.isHit = true;

    if (cell.ship) {
      cell.ship.hit();

      if (cell.ship.isSunk()) {
        this.shipsLeft -= 1;
      }
    }
  }
}

export default Gameboard;
