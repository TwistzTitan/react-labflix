import axios from 'axios';

// Get API URL and API Key from environment variables
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const getBaseURL = (path) => {
    return `${API_URL}${path}?api_key=${API_KEY}`;
}

export class MoviesService {
  static getMovies(path='/discover/movie') {
    return axios.get(getBaseURL(path));
  }
}