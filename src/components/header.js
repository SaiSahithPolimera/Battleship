import battleshipImage from "../images/battleshipImage.png";
import heading from "../images/heading.png";
import gameTheme from "../audio/gameTheme.mp3";

const header = () => {
  const section = document.createElement("section");
  section.id = "header";
  const div = document.createElement("div");
  div.id = "mainContainer";
  const emptyContainer = document.createElement("div");
  const titleContainer = document.createElement("div");
  titleContainer.id = "titleContainer";
  const battleshipImg = document.createElement("img");
  battleshipImg.src = battleshipImage;
  battleshipImg.id = "battleShip";
  const headingImg = document.createElement("img");
  headingImg.src = heading;
  headingImg.draggable = false;
  headingImg.style.pointerEvents = "none";
  battleshipImg.style.pointerEvents = "none";
  headingImg.id = "headingImg";
  const soundButtonContainer = document.createElement("div");
  soundButtonContainer.id = "soundButtonContainer";
  const soundButton = document.createElement("img");
  const audio = document.createElement("audio");
  const source = document.createElement("source");
  source.src = gameTheme;
  source.type = "audio/mpeg";
  audio.appendChild(source);
  audio.id = "gameAudio";
  audio.autoplay = true;
  let toggle = true;
  soundButton.id = "soundButton";
  soundButton.src =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' fill-rule='evenodd' d='M18.97 6.97a.75.75 0 0 1 1.06 0l-.53.53l.53-.53h.001l.001.002l.003.002l.007.007l.02.02l.062.069c.05.057.12.138.201.241A6.87 6.87 0 0 1 21.75 11.5a6.87 6.87 0 0 1-1.425 4.189a5 5 0 0 1-.264.31l-.02.02l-.006.007l-.003.002v.001h-.001l-.51-.508l.51.51a.75.75 0 1 1-1.061-1.061l.53.53l-.53-.53h-.001v.001l-.002.001l.005-.005l.033-.036q.048-.052.139-.167a5.37 5.37 0 0 0 .448-5.843a5 5 0 0 0-.448-.685a3 3 0 0 0-.172-.203l-.005-.005a.75.75 0 0 1 .003-1.058m-5.933-3.574c1.163-.767 2.713.068 2.713 1.461v14.286c0 1.394-1.55 2.228-2.713 1.461l-6-3.955a.25.25 0 0 0-.137-.042H4a2.75 2.75 0 0 1-2.75-2.75v-3.714A2.75 2.75 0 0 1 4 7.393h2.9a.25.25 0 0 0 .138-.041z' clip-rule='evenodd'/%3E%3C/svg%3E";
  soundButtonContainer.appendChild(soundButton);
  soundButton.addEventListener("click", () => {
    if (!toggle) {
      soundButton.src =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' fill-rule='evenodd' d='M18.97 6.97a.75.75 0 0 1 1.06 0l-.53.53l.53-.53h.001l.001.002l.003.002l.007.007l.02.02l.062.069c.05.057.12.138.201.241A6.87 6.87 0 0 1 21.75 11.5a6.87 6.87 0 0 1-1.425 4.189a5 5 0 0 1-.264.31l-.02.02l-.006.007l-.003.002v.001h-.001l-.51-.508l.51.51a.75.75 0 1 1-1.061-1.061l.53.53l-.53-.53h-.001v.001l-.002.001l.005-.005l.033-.036q.048-.052.139-.167a5.37 5.37 0 0 0 .448-5.843a5 5 0 0 0-.448-.685a3 3 0 0 0-.172-.203l-.005-.005a.75.75 0 0 1 .003-1.058m-5.933-3.574c1.163-.767 2.713.068 2.713 1.461v14.286c0 1.394-1.55 2.228-2.713 1.461l-6-3.955a.25.25 0 0 0-.137-.042H4a2.75 2.75 0 0 1-2.75-2.75v-3.714A2.75 2.75 0 0 1 4 7.393h2.9a.25.25 0 0 0 .138-.041z' clip-rule='evenodd'/%3E%3C/svg%3E";

      audio.play();
      toggle = true;
    } else {
      soundButton.src =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' fill-rule='evenodd' d='M17.47 9.47a.75.75 0 0 1 1.06 0L20 10.94l1.47-1.47a.75.75 0 0 1 1.06 1.06L21.061 12l1.47 1.47a.75.75 0 0 1-1.061 1.06L20 13.06l-1.47 1.47a.75.75 0 0 1-1.06-1.06L18.94 12l-1.47-1.47a.75.75 0 0 1 0-1.06m-4.433-6.074c1.163-.767 2.713.068 2.713 1.461v14.286c0 1.394-1.55 2.228-2.713 1.461l-6-3.955a.25.25 0 0 0-.137-.042H4a2.75 2.75 0 0 1-2.75-2.75v-3.714A2.75 2.75 0 0 1 4 7.393h2.9a.25.25 0 0 0 .138-.041z' clip-rule='evenodd'/%3E%3C/svg%3E";
      audio.pause();
      toggle = false;
    }
  });
  div.appendChild(emptyContainer);
  titleContainer.appendChild(battleshipImg);
  titleContainer.appendChild(headingImg);
  div.appendChild(titleContainer);
  div.appendChild(soundButtonContainer);
  section.appendChild(div);
  section.appendChild(audio);
  document.addEventListener("DOMContentLoaded", () => {
    audio.play();
  });
  return section;
};

export { header };
