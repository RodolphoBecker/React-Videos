import axios from 'axios';

const KEY = "AIzaSyD3WGnxF03FbuZupjLrVWAszm1Fo49MPS8";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video', //Ignora playlists no retorno da busca e apresenta apenas videos
        key: KEY,
    }
});