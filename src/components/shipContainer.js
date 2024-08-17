import Turnout from "../images/Turnout.jpg";
import Lier from "../images/Lier.jpg";
import Zinnia from "../images/Zinnia.jpg";
import Wielingen from "../images/Wielingen.jpg";
import gameBoard from "../utils/gameBoard";

const fixID = (id, length) => {
  const match = id.match(/cell(\d+)/);
  if (!match) {
    console.error("Invalid ID format:", id);
    return id;
  }
  const cellNumber = Number(match[1].charAt(1));
  const difference = cellNumber - length;

  return "cell" + match[1].charAt(0) + (cellNumber - (cellNumber - difference));
};

const appendShip = (ship) => {
  const shipContainer = document.getElementById("shipContainer");
  ship.classList.remove("hide");
  shipContainer.appendChild(ship);
};

const showMessage = (message) => {
  alert(message);
  return;
};

const shipContainer = (playerID) => {
  const shipContainer = document.createElement("div");
  const board = gameBoard();
  board.initializeBoard();
  board.getBoard();

  shipContainer.id = "shipContainer";
  const ships = [
    { length: 3, path: Turnout, name: "Turnout" },
    { length: 4, path: Lier, name: "Lier" },
    { length: 5, path: Zinnia, name: "Zinnia" },
    { length: 6, path: Wielingen, name: "Wielingen" },
  ];

  let currentShipIndex = null;

  ships.forEach((ship, index) => {
    const shipImage = document.createElement("img");
    shipImage.src = ship.path;
    shipImage.id = ship.length;
    shipImage.className = playerID;
    shipContainer.appendChild(shipImage);
    if (playerID !== "computer") {
      shipImage.addEventListener("dragstart", dragStart);

      function dragStart(e) {
        currentShipIndex = index;
        e.dataTransfer.setData("text/plain", e.target.id);
      }
    } else {
      shipImage.draggable = false;
    }
  });

  if (playerID !== "computer") {
    document.addEventListener("DOMContentLoaded", (e) => {
      const cells = document.querySelectorAll(".droppable");
      cells.forEach((cell) => {
        cell.addEventListener("dragover", dragOver);
        cell.addEventListener("dragenter", dragEnter);
        cell.addEventListener("dragleave", dragLeave);
        cell.addEventListener("drop", drop);

        function dragEnter(e) {
          e.preventDefault();
          e.target.classList.add("drag-over");
        }

        function dragOver(e) {
          e.preventDefault();
          e.target.classList.add("drag-over");
        }

        function dragLeave(e) {
          e.target.classList.remove("drag-over");
        }

        function drop(e) {
          e.preventDefault();
          const targetCell = e.target;
          let RowPos, columnPos;
          const id = e.dataTransfer.getData("text/plain");
          const ship = document.getElementById(id);
          try {
            RowPos = Number(targetCell.id.split("cell")[1].charAt(0));
            columnPos = Number(targetCell.id.split("cell")[1].charAt(1));
          } catch (err) {
            showMessage("Invalid Positioning ❌");
            shipContainer.appendChild(ship);
            console.error("Error extracting row and column positions:", err);
            appendShip(ship);
            return;
          }
          if (
            board.placeShip(
              RowPos + 1,
              columnPos + 1,
              currentShipIndex + 1,
              1,
            ) === true
          ) {
            console.log(board.getBoard());
            
            if (ship.parentNode) {
              ship.parentNode.removeChild(ship);
            }
            e.target.classList.remove("drag-over");

            const columnPosition = Number(
              targetCell.id.split("cell")[1].charAt(1),
            );
            if (columnPosition + Number(id) > 10) {
              const fixedID = fixID(targetCell.id, id);
              const fixedPosition = document.getElementById(fixedID);
              fixedPosition.appendChild(ship);
            } else {
              targetCell.appendChild(ship);
            }

            ship.classList.remove("hide");
          }
          if (
            board.placeShip(
              RowPos + 1,
              columnPos + 1,
              currentShipIndex + 1,
              1,
            ) === false
          ) {
            showMessage("Invalid Positioning ❌");
            const cell = document.getElementById(targetCell.id);
            cell.classList.remove("drag-over");
            appendShip(ship);
            return;
          }
        }
      });
    });
  }
  return shipContainer;
};

export { shipContainer };
