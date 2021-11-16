import axios from 'axios';

export const API_URL = "https://6190524df6bf450017484bc8.mockapi.io/superedings/"

const CustomAxios = axios.create({
    baseURL: API_URL,
  });

  CustomAxios.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  CustomAxios.interceptors.response.use(
    function (response) {
      if(response.status === 403) {
        alert("error 403");
      }
      if (response.data === "") {
        alert("error");
      }
      return response.data;
    },
    function (error) {
      
      return Promise.reject(error);
    }
  );

  export { CustomAxios };