import axios from 'axios';

export const API_URL = "https://6190524df6bf450017484bc8.mockapi.io/superedings/"
export const HOME_URL = `/home`
export const FAV_URL    = `/fav`

const CustomAxios = axios.create({
    baseURL: API_URL,
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