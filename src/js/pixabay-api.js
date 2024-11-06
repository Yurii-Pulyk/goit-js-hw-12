import axios from 'axios';

const API_KEY = '46829470-2665f0a199f61e35def0ecb3b';
const BASE_URL = 'https://pixabay.com/api/';
let page = 1;
const perPage = 15;

export async function getPictures(query, resetPage = false) {
  if (resetPage) page = 1; // Якщо новий запит, скидаємо номер сторінки

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  });

  try {
    const response = await axios.get(`${BASE_URL}?${params.toString()}`);
    page += 1; // Збільшуємо номер сторінки для наступного запиту
    return response.data;
  } catch (error) {
    throw error;
  }
}