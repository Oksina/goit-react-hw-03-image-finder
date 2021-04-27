import axios from 'axios';

const apiKey = '20073570-94be55d6c10f1ac23fcd8c784';
//const apiKey = process.env.REACT_APP_API_KEY;
const url = 'https://pixabay.com/api/';

function fetchImages({ searchQuery = '', currentPage = 1, perPage = 12 }) {
    return axios
        .get(
            `${url}?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
        )
        .then(response => response.data.hits);
}

export { fetchImages };

//return fetch(url).then(response => {
//    return response.data.gallery;
