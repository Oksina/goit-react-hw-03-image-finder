const apiKey = '20073570-94be55d6c10f1ac23fcd8c784';

const fetchImages = ({ searchQuery = '', currentPage = 1 }) => {
    const url = `https://pixabay.com/api/?key=${apiKey}&q${searchQuery}&image_type=photo&orientation=horizontal&page=${currentPage}&per_page=12`;
    return fetch(url).then(response => {
        return response.data.gallery;
    });
};

export default fetchImages;
