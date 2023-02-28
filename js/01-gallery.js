import { galleryItems } from "./gallery-items.js";

// Change code below this line
//console.log(galleryItems);

//  Подключение стилей и скрипта модальгого окна
const stylesModalWindow = document.createElement("link");
stylesModalWindow.href =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css";
stylesModalWindow.rel = "stylesheet";

const documentHead = document.querySelector("head");
documentHead.append(stylesModalWindow);

const scriptModalWindow = document.createElement("script");
scriptModalWindow.src =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";

const documentBody = document.querySelector("body");
documentBody.append(scriptModalWindow);

// ----------------------------------------

let instance = [];

const refGalleryImg = document.querySelector(".gallery");

const galleryMarkup = createGalleryImg(galleryItems);

refGalleryImg.insertAdjacentHTML("beforeend", galleryMarkup);

refGalleryImg.addEventListener("click", onGalleryImgClick);

function createGalleryImg(galleryItems) {
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
    .join(" ");
}

function onGalleryImgClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const refImage = event.target.dataset.source;

  instance = basicLightbox.create(`
    <img src="${refImage}" width="800" height="600">
`);

  instance.show();
  document.addEventListener("keydown", offModalWindow);
}

function offModalWindow(event) {
  if (event.key === "Escape") {
    document.removeEventListener("keydown", offModalWindow);
    instance.close();
  }
}
