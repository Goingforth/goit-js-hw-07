import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

//  Подключение стилей и скрипта модальгого окна
const stylesModalWindow = document.createElement("link");
stylesModalWindow.href =
  "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.12.1/simple-lightbox.min.css";
stylesModalWindow.rel = "stylesheet";

const documentHead = document.querySelector("head");
documentHead.append(stylesModalWindow);

const scriptModalWindow = document.createElement("script");
scriptModalWindow.src =
  "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.12.1/simple-lightbox.min.js";

const documentBody = document.querySelector("body");
documentBody.append(scriptModalWindow);

// ----------------------------------------

const refGalleryImg = document.querySelector(".gallery");

const galleryMarkup = createGalleryImg(galleryItems);

refGalleryImg.insertAdjacentHTML("beforeend", galleryMarkup);

refGalleryImg.addEventListener("click", onGalleryImgClick);

function createGalleryImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
    })
    .join(" ");
}

function onGalleryImgClick(event) {
  event.preventDefault();

  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
