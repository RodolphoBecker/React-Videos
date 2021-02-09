import axios from 'axios';

const KEY = "";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 8,
        type: 'video', //Ignora playlists no retorno da busca e apresenta apenas videos
        key: KEY,
    }
});