import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
export const BASE_URL = "https://api.themoviedb.org/3/";

export const NewInstance = axios.create({
	// Configuration
	baseURL: BASE_URL,
	headers: {
		accept: 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('api_token')
      },
});

