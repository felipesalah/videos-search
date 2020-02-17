import axios from 'axios';

const KEY = 'AIzaSyBZSeMw4tFe0mZcCZtRHPpj0meuB9n_hSc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});