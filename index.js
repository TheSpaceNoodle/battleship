import { Gameboard } from "./Classes/index.js";

// const gameboard = new Gameboard();
// gameboard.placeShip([0, 0], [0, 3]);
// console.log(gameboard.gameboard);
const main = document.getElementById("main");

const generateGameboard = (gameboard) => {
  const gameboardDiv = document.createElement("div");

  gameboardDiv.classList.add("gameboard");
  gameboardDiv.innerHTML = `
        <h2>Gameboard</h2>
        <div class="grid">
        ${gameboard
          .map((row, rowIndex) =>
            row
              .map(
                (cell, cellIndex) =>
                  `<div class="cell" data-row="${rowIndex}" data-cell="${cellIndex}">${cell}</div>`
              )
              .join("")
          )
          .join("")}
        </div>
    `;

  return gameboardDiv;
};

main.innerHTML = generateGameboard(new Gameboard().gameboard);
