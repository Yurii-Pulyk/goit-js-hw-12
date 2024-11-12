


import { getPictures } from './js/pixabay-api';
import { renderPictures, gallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('form');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.createElement('button');
loadMoreBtn.textContent = 'Load more';
loadMoreBtn.style.display = 'none';
loadMoreBtn.classList.add('load-more');
document.body.appendChild(loadMoreBtn); 

let searchValue = '';
let totalHits = 0; 
let currentHits = 0; 

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  gallery.innerHTML = '';
  searchValue = event.target.elements.searchquery.value.trim();

  if (searchValue === '') {
    iziToast.error({ title: 'Error', message: 'Please enter a search query' });
    return;
  }

  loadMoreBtn.style.display = 'none';
  loader.style.display = 'block';  
  try {
    const data = await getPictures(searchValue, true);
    loader.style.display = 'none'; 

    totalHits = data.totalHits; 
    currentHits = data.hits.length; 

    if (data.hits.length === 0) {
      iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!' });
    } else {
      renderPictures(data.hits); 
      loadMoreBtn.style.display = currentHits < totalHits ? 'block' : 'none'; 
    }
  } catch (error) {
    loader.style.display = 'none'; 
    iziToast.error({ title: 'Error', message: error.message });
  }
});

loadMoreBtn.addEventListener('click', async () => {
  loader.style.display = 'block';

  try {
    const data = await getPictures(searchValue);
    loader.style.display = 'none';

    currentHits += data.hits.length; 

    renderPictures(data.hits);
    smoothScroll();  

    if (currentHits >= totalHits) {
      iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
      loadMoreBtn.style.display = 'none'; 
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