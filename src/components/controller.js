import player from "../utils/player";
import { board } from "./board";
import { shipContainer } from "./shipContainer";
import attackButtonImage from "../images/attackButton.jpg";

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

  attackButton.addEventListener("click", () => {
    const realPlayer = document.getElementById("real");
    if (realPlayer.lastChild.hasChildNodes()) {
      //
      typeText(statusIndicator, "", 0);
      typeText(
        statusIndicator,
        "You need to place all ships before attacking",
        100,
      );
    } else {
      typeText(
        statusIndicator,
        "Ready to attack! click on enemy cells to launch your missiles",
        100,
      );
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    typeText(
      statusIndicator,
      "Place your ships and press attack button to start..",
      100,
    );
  });
  return mainContainer;
};

let timeOutID;

function typeText(element, text, speed) {
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
}

export { controller };
