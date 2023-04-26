import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");
const link = list.querySelectorAll("a");

console.log("list :>> ", list);
// console.log("link :>> ", link);
// link.forEach((el) => el.preventDefault());
list.addEventListener("click", imgModal);

function imgModal(evt) {
  evt.preventDefault();
  console.log("evt.turget :>> ", evt.target.nodeName);
  console.log("evt.currentTurget :>> ", evt.currentTarget.class);
  console.log(evt.target.class);
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  console.log("evt :>> ", evt);
}
