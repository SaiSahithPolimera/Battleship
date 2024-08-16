import battleshipImage from "../images/battleshipImage.png";
import heading from "../images/heading.png";

const header = () => {
  const section = document.createElement("section");
  section.id = "header";
  const div = document.createElement("div");
  div.id = "mainContainer";
  const battleshipImg = document.createElement("img");
  battleshipImg.src = battleshipImage;
  battleshipImg.id = "battleShip";
  const headingImg = document.createElement("img");
  headingImg.src = heading;
  headingImg.id = "headingImg";
  div.appendChild(battleshipImg);
  div.appendChild(headingImg);
  section.appendChild(div);
  return section;
};

export { header };