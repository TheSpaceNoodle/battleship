class Ship {
  hits = 0;

  constructor(length) {
    this.shipLength = length;
  }

  isSunk() {
    return this.hits === this.shipLength;
  }

  hit() {
    this.hits += 1;
  }
}

export default Ship;
