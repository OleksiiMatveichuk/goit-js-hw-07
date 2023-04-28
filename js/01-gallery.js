import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const arrItems = galleryItems.map((el) => {
  const item = `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</li>`;
  return item;
});

const list = document.querySelector(".gallery");
list.innerHTML = arrItems.join("");

list.addEventListener("click", imgModal);
function imgModal(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const escClose = (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  };
  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}">`,
    {
      onShow: (instance) => document.addEventListener("keydown", escClose),
      onClose: (instance) => {
        document.removeEventListener("keydown", escClose);
      },
    }
  );
  instance.show();
}
