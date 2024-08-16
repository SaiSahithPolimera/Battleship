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

const shipContainer = () => {
  const board = gameBoard();
  board.initializeBoard();
  const shipContainer = document.createElement("div");
  
  shipContainer.id = "shipContainer";
  const ships = [
    { length: 3, path: Turnout, name: "Turnout" },
    { length: 4, path: Lier, name: "Lier" },
    { length: 5, path: Zinnia, name: "Zinnia" },
    { length: 6, path: Wielingen, name: "Wielingen" },
  ];
  ships.forEach((ship, index) => {
    const shipImage = document.createElement("img");
    shipImage.src = ship.path;
    shipImage.id = ship.length;
    shipContainer.appendChild(shipImage);
    shipImage.addEventListener("dragstart", dragStart);
    function dragStart(e) {
      e.dataTransfer.setData("text/plain", e.target.id);
      setTimeout(() => {
        e.target.className += "hide";
      }, 0);
    }
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
          let rowPosition = Number(e.target.id.split("cell")[1].charAt(0));
          let columnPosition = Number(e.target.id.split("cell")[1].charAt(1));
          e.target.classList.remove("drag-over");
          const id = e.dataTransfer.getData("text/plain");
          const ship = document.getElementById(id);
          if (
            Number(e.target.id.split("cell")[1].charAt(1)) + Number(id) >
            10
          ) {
            let fixedID = fixID(e.target.id, id);
            const fixedPosition = document.getElementById(fixedID);
            fixedPosition.appendChild(ship);
          } else {
            e.target.appendChild(ship);
          }
          ship.classList.remove("hide");
        }
      });
    });
  });
  return shipContainer;
};

export { shipContainer };
