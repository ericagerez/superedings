import axios from 'axios';

export const API_URL     = "https://superheroapi.com/api/4262740897171885"
export const HOME_URL = `${API_URL}home`
export const FAV_URL    = `${API_URL}fav`

export default axios.create({
    baseURL: API_URL,
    headers: {
      "Content-type": "application/json"
    }
  });