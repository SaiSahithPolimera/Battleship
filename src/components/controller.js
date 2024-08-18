import player from "../utils/player";
import { board, isGameOver } from "./board";
import { shipContainer } from "./shipContainer";
import attackButtonImage from "../images/attackButton.jpg";
import gameBoard from "../utils/gameBoard";

const computerBoard = gameBoard();
computerBoard.initializeBoard();
let shipCount = 0;
const controller = () => {
  const players = player();
  const mainContainer = document.createElement("div");
  const attackButtonContainer = document.createElement("div");
  const playerContainer = document.createElement("div");
  playerContainer.id = "playerContainer";
  attackButtonContainer.id = "attackButtonContainer";
  const statusContainer = document.createElement("div");
  statusContainer.id = "statusContainer";
  const statusIndicator = document.createElement("div");
  statusIndicator.id = "statusIndicator";
  statusIndicator.textContent = "";
  statusContainer.appendChild(statusIndicator);
  const attackButton = document.createElement("button");
  attackButton.id = "attackButton";
  const buttonBackground = document.createElement("img");
  buttonBackground.src = attackButtonImage;
  attackButton.appendChild(buttonBackground);
  attackButtonContainer.appendChild(attackButton);
  let message = "";
  mainContainer.id = "gameBoardContainer";
  playerContainer.appendChild(statusContainer);
  playerContainer.appendChild(attackButtonContainer);
  players.forEach((player) => {
    const playerIndicator = document.createElement("div");
    const playerInterface = document.createElement("div");
    playerIndicator.id = "playerIndicator";
    playerInterface.id = player.type;
    if (player.type === "computer") {
      message = "Enemy Waters";
    } else {
      message = "Your waters";
    }
    playerIndicator.textContent = message;
    playerInterface.appendChild(playerIndicator);
    playerInterface.appendChild(board(player.type));
    playerInterface.appendChild(shipContainer(player.type));
    mainContainer.appendChild(playerInterface);
    if (player.type !== "computer") {
      mainContainer.appendChild(playerContainer);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    typeText(
      statusIndicator,
      "Place your ships and press attack button to start..",
      100,
    );
    let placedShips = [];
    const computerShips = document.querySelectorAll("#shipContainer .computer");
    const computerShipContainer = document.getElementById("computer").lastChild;
    let interval = setInterval(() => {
      if (shipCount === 4) {
        clearInterval(interval);
        typeText(statusIndicator, "Enemy placed the ships!", 100);
      }
      let coordinates = generateCoordinates();
      if (!placedShips.includes(coordinates.shipIndex)) {
        if (
          computerBoard.placeShip(
            coordinates.rowPosition + 1,
            coordinates.colPosition + 1,
            coordinates.shipIndex + 1,
            coordinates.axis,
          ) === true
        ) {
          placedShips.push(coordinates.shipIndex);
          computerShipContainer.removeChild(
            computerShips[coordinates.shipIndex],
          );

          shipCount++;
        }
      }
    }, 1000);
  });

  attackButton.addEventListener("click", attack);
  return mainContainer;
};

let timeOutID;

const attack = () => {
  {
    if (isGameOver === true) {
      window.location.reload();
    }
    const realPlayer = document.getElementById("real");
    if (realPlayer.lastChild.hasChildNodes()) {
      //
      typeText(statusIndicator, "", 0);
      typeText(
        statusIndicator,
        "You need to place all ships before attacking!",
        100,
      );
    } else {
      if (shipCount === 4) {
        typeText(
          statusIndicator,
          "Ready to attack! click on enemy cells to launch your missiles",
          100,
        );
      } else {
        typeText(
          statusIndicator,
          "Please wait until enemy finishes placing ships",
          100,
        );
      }
    }
  }
};

const typeText = (element, text, speed) => {
  if (timeOutID !== undefined) {
    clearTimeout(timeOutID);
  }

  element.textContent = "";
  let index = 0;
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      timeOutID = setTimeout(type, speed);
    }
  }
  type();
};

const generateCoordinates = () => {
  let axis = 1;
  let rowPosition = Math.floor(Math.random() * 10);
  let colPosition = Math.floor(Math.random() * 10);
  let shipIndex = Math.floor(Math.random() * 4);
  return { rowPosition, colPosition, shipIndex, axis };
};

export { controller, computerBoard, typeText, generateCoordinates };
