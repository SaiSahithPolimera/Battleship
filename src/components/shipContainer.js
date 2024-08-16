import Turnout from "../images/Turnout.jpg";
import Lier from "../images/Lier.jpg";
import Zinnia from "../images/Zinnia.jpg";
import Wielingen from "../images/Wielingen.jpg";

const shipContainer = () => {
  const shipContainer = document.createElement("div");
  shipContainer.id = "shipContainer";
  const ships = [
    { length: 3, path: Turnout },
    { length: 4, path: Lier },
    { length: 6, path: Zinnia },
    { length: 8, path: Wielingen },
  ];
  ships.forEach((ship) => {
    const shipImage = document.createElement("img");
    shipImage.src = ship.path;
    shipImage.id = ship.length;
    shipContainer.appendChild(shipImage);
  });
  return shipContainer;
};

export { shipContainer };
