import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const gallery = document.querySelector('.gallery');


export function renderPictures(pictures) {
  const markup = pictures.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `
      <a href="${largeImageURL}" class="gallery__item">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${likes}</p>
          <p class="info-item"><b>Views:</b> ${views}</p>
          <p class="info-item"><b>Comments:</b> ${comments}</p>
          <p class="info-item"><b>Downloads:</b> ${downloads}</p>
        </div>
      </a>`;
  }).join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
