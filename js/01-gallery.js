import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = createGalleryMarkup(galleryItems);
galleryEl.addEventListener("click", onGalerryElClick);

function createGalleryMarkup(params) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
}

function onGalerryElClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(
    `
    <img src='${event.target.dataset.source}'width="800" height="600">`,
    {
      onShow: () => document.addEventListener("keydown", onEscapeBtnPress),
      onClose: () => document.removeEventListener("keydown", onEscapeBtnPress),
    }
  );

  instance.show();
  function onEscapeBtnPress(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
