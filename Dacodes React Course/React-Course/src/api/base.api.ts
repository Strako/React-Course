import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
export const BASE_URL = "https://api.themoviedb.org/3/";


export const NewInstance = axios.create({
	// Configuration
	baseURL: BASE_URL,
	headers: {
		accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY3NDEyYjFjNTBlYmVmOTg4MjBlM2I4NzFiNDRhNSIsInN1YiI6IjY0Yzk5ODc2MGNiMzM1MDBjNTY4ODRmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ymgBK70hX-AoJNJuVT2fjTDG7YbiV5B_hLnvPoDUQxI'
      },
});

 