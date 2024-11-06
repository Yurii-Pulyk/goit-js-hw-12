import { getPictures } from './js/pixabay-api';
import { renderPictures, gallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('form');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.createElement('button');  // Створюємо кнопку Load more
loadMoreBtn.textContent = 'Load more';
loadMoreBtn.style.display = 'none';
loadMoreBtn.classList.add('load-more');
document.body.appendChild(loadMoreBtn);  // Додаємо кнопку під галерею

let searchValue = '';

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  gallery.innerHTML = '';
  searchValue = event.target.elements.searchquery.value.trim();

  if (searchValue === '') {
    iziToast.error({ title: 'Error', message: 'Please enter a search query' });
    return;
  }

  loadMoreBtn.style.display = 'none'; // Ховаємо кнопку при новому запиті
  loader.style.display = 'block';  // Показуємо лоадер

  try {
    const data = await getPictures(searchValue, true);
    loader.style.display = 'none';  // Ховаємо лоадер

    if (data.hits.length === 0) {
      iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!' });
    } else {
      renderPictures(data.hits);  // Виводимо зображення
      loadMoreBtn.style.display = 'block';  // Показуємо кнопку, якщо є зображення
    }
  } catch (error) {
    loader.style.display = 'none';  // Ховаємо лоадер
    iziToast.error({ title: 'Error', message: error.message });
  }
});

loadMoreBtn.addEventListener('click', async () => {
  loader.style.display = 'block';

  try {
    const data = await getPictures(searchValue);
    loader.style.display = 'none';

    if (data.hits.length === 0) {
      iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
      loadMoreBtn.style.display = 'none'; // Ховаємо кнопку, якщо більше немає зображень
    } else {
      renderPictures(data.hits);
      smoothScroll();  // Плавне прокручування
    }
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({ title: 'Error', message: error.message });
  }
});

function smoothScroll() {
  const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}