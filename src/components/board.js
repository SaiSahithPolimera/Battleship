import attackImage from "../images/attack.jpg";
import water from "../images/water.png";
import { computerBoard, typeText, generateCoordinates } from "./controller";
import { userBoard } from "./shipContainer";
import blast from "../audio/blast.mp3";

let userGameBoard = null;
let isGameOver = false;
const board = (playerId) => {
  const gameBoard = document.createElement("div");
  const audio = document.createElement("audio");
  const source = document.createElement("source");
  source.src = blast;
  if (playerId === "real") {
    userGameBoard = gameBoard;
  }
  source.type = "audio/mpeg";
  audio.appendChild(source);
  gameBoard.appendChild(audio);
  gameBoard.id = "gameBoard";
  let rowCount = 10;
  let colCount = 10;
  const userAttack = (image, rowCounter, colCounter, cell) => {
    {
      const statusIndicator = document.getElementById("statusIndicator");
      if (cell.hasChildNodes() === true) {
        typeText(statusIndicator, "Cannot attack same position twice!", 100);
        return;
      }
      if (computerBoard.receiveAttack(rowCounter, colCounter) === true) {
        image.src = attackImage;
        cell.appendChild(image);
        typeText(statusIndicator, "💥 You attacked enemy ship!", 100);
        audio.play();
      } else {
        typeText(statusIndicator, "It's a miss!", 100);
        image.src = water;
        cell.appendChild(image);
      }
      image.draggable = false;
      if (playerId === "real") {
        typeText(statusIndicator, "Only enemy can attack your fleet", 100);
        return;
      }
    }
  };

  const launchComputerAttack = (rowCounter, colCounter) => {
    const attackedCell = document.getElementById(
      "cell" + rowCounter + colCounter,
    );
    const image = document.createElement("img");
    userGameBoard.querySelectorAll(".droppable").forEach((cell) => {
      if (cell.id === attackedCell.id) {
        if (cell.hasChildNodes() === true) {
          return;
        }
        if (userBoard.receiveAttack(rowCounter, colCounter) === true) {
          image.src = attackImage;
          cell.appendChild(image);
          typeText(statusIndicator, "💥 Enemy attacked your ship!", 100);
          audio.play();
        } else {
          typeText(statusIndicator, "Enemy missed!", 100);
          image.src = water;
          cell.appendChild(image);
        }
      }
      image.draggable = false;
    });
  };

  for (let rowCounter = 0; rowCounter < rowCount; rowCounter++) {
    const row = document.createElement("div");
    for (let colCounter = 0; colCounter < colCount; colCounter++) {
      const cell = document.createElement("div");
      cell.id = "cell" + rowCounter + colCounter;
      const image = document.createElement("img");
      cell.className = playerId;
      cell.addEventListener("click", () => {
        if (isGameOver === true) {
          alert("Game over! Restart to play new game");
        }
        const statusIndicator = document.getElementById("statusIndicator");
        const computerShipContainer =
          document.getElementById("computer").lastChild;
        const userShipContainer = document.getElementById("real").lastChild;
        if (
          computerShipContainer.hasChildNodes() ||
          userShipContainer.hasChildNodes()
        ) {
          typeText(
            statusIndicator,
            "Attacks can be launched only after placing all ships!",
            100,
          );
          return;
        }
        if (playerId === "computer") {
          const coordinates = generateCoordinates();
          userAttack(image, rowCounter, colCounter, cell);
          launchComputerAttack(
            coordinates.rowPosition,
            coordinates.colPosition,
          );
        }
        if (computerBoard.report() === true) {
          typeText(statusIndicator, "You won the game!", 100);
          isGameOver = true;
        }
        if (userBoard.report() === true) {
          typeText(statusIndicator, "Enemy won the game!", 100);
          isGameOver = true;
        }
      });
      if (playerId === "computer") {
        // pass
      } else {
        cell.classList.add("droppable");
      }
      cell.style.width = "55px";
      cell.style.height = "55px";
      row.appendChild(cell);
    }
    gameBoard.appendChild(row);
  }
  return gameBoard;
};

export { board, isGameOver };
