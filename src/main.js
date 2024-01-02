import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const fetchBtn = document.querySelector('.btn');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.spinner');

const newGallery = new SimpleLightbox('.gallery a');

const API_KEY = '41458722-788aa599ff2a579d31eb49587';

const url = new URL('https://pixabay.com/api/');
url.searchParams.append('key', `${API_KEY}`);
url.searchParams.append('image_type', 'photo');
url.searchParams.append('orientation', 'horizontal');
url.searchParams.append('safesearch', 'true');

let tagPhoto;

input.addEventListener('input', event => {
  tagPhoto = event.target.value;
});

const fetchPhotos = () => {
  url.searchParams.delete('q');
  url.searchParams.append('q', `${tagPhoto}`);
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

form.addEventListener('submit', event => {
  event.preventDefault();
  loader.classList.add('loader');
  gallery.innerHTML = '';

  fetchPhotos()
    .then(photos => {
      if (photos.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      addPic(photos.hits);
      newGallery.refresh();
    })
    .catch(error => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    })
    .finally(() => {
      form.reset();
      loader.classList.remove('loader');
    });
});

// ---------------------------------------------------------

function addPic(arr) {
  gallery.insertAdjacentHTML(
    'afterbegin',
    arr.reduce(
      (
        html,
        { largeImageURL, webformatURL, likes, views, comments, downloads }
      ) =>
        html +
        `<li class="gallery-item">
          <a href="${largeImageURL}">
          
            <div class="pic-item">
              <img src="${webformatURL}" alt="photo">
            </div>
            <ul class="information-list">
              <li class="information-item">likes<br>${likes}</li>
              <li class="information-item">views<br>${views}</li>
              <li class="information-item">comments<br>${comments}</li>
              <li class="information-item">downloads<br>${downloads}</li>
            </ul>
          
          </a>
        </li>`,
      ''
    )
  );
}
