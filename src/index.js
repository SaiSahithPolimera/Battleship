import "./styles.css";
import { header } from "./components/header";
import { board } from "./components/board";
import { shipContainer } from "./components/shipContainer";
import { controller } from "./components/controller";

document.body.appendChild(header());
// const mainContainer = document.createElement("div");
// mainContainer.id = 'gameBoardContainer';
// mainContainer.appendChild(board())
// mainContainer.appendChild(shipContainer())
document.body.appendChild(controller());
