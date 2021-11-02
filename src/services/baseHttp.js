import axios from 'axios';

export const API_URL     = "https://superheroapi.com/api/4262740897171885/"
export const HOME_URL = `${API_URL}home`
export const FAV_URL    = `${API_URL}fav`

const CustomAxios = axios.create({
    baseURL: API_URL,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
  },
  });

  CustomAxios.interceptors.request.use(
    function (config) {
      //console.log("Antes de salir: ");
      //console.log(config);
      return config;
    },
    function (error) {
      //console.log("Error Antes de salir: ");
      //console.log(error);
      return Promise.reject(error);
    }
  );
  
  CustomAxios.interceptors.response.use(
    function (response) {
      if(response.status === 403) {
       alert("error 403");
      }
      if (response.data === "") {
        alert("otro error");
      }
      return response.data;
    },
    function (error) {
      
      return Promise.reject(error);
    }
  );

  export { CustomAxios };