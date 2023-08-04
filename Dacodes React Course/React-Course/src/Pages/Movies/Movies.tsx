import { useEffect, useState } from 'react';
import { NewInstance } from '../../api/base.api';
import { Rate } from './Components/Stars';
import getGenreByID from './Components/getGenre';
import './Movies.css'

interface objectI {
  [key: string]: any
}
const Movies = () => {


  const [isLoading, setIsLoading] = useState(true);
  const [LoadingGenres, setLoadingGenres] = useState(true);
  const posterEP: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  const genresEP = "genre/movie/list?language=en";
  const [page, setPage] = useState(1);
  const [endpoint, setEndpoint] = useState<string>("movie/now_playing?language=en-US&page=");
  const [response, setResponse] = useState<objectI>({});
  const [genres, setGenres] = useState<objectI>({});
  const [totalPages, setTotalPages] = useState<number>(10)


  const getMovies = async () => {
    const response = await NewInstance.get(endpoint + page);
    return response;
  };


  const getGenres = async () => {
    const response = await NewInstance.get(genresEP);
    return response;
  };

  useEffect(() => {
    getMovies().then((r) => {
      setTotalPages(r.data.total_pages);
      console.log(totalPages);
    }).catch((e) => {
      console.log(e);
    });
  }, [totalPages, endpoint]
  
  )
  useEffect(() => {
    getMovies().then((r) => {
      setResponse(r.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }).catch((e) => {
      console.log(e);
    });
  }, [page, endpoint])

  useEffect(() => {
    getGenres().then((r) => {
      setGenres(r.data);
      setTimeout(() => {
        setLoadingGenres(false);
      }, 300);

    }).catch((e) => {
      console.log(e);
    });
  }, [])

   if (LoadingGenres && isLoading) {

    return <div className="App"></div>;
  }
  console.log({isLoading,LoadingGenres});

  const listMovies = () => {
    console.log(sessionStorage.getItem("guest_session_id"));
    const listingComponents = response.results.map((movie: objectI) => (
      <div className="movie_card">
        <img src={posterEP + movie.poster_path} />
        <div className="movie_cover">
          <p className="movie_title">{movie.title}</p>
          <p className="movie_data">{movie.release_date.substring(0, 4)} ‧ {getGenreByID(movie.genre_ids, genres.genres)}</p>
          <p className="movie_overview">{movie.overview}</p>
          <p className="movie_stars">{
            Rate(movie.vote_average)
          }</p>
        </div>
      </div>
    ))
    return listingComponents;
  }

  return (
    <div className='movies'>
      {listMovies()}
    </div>
  );
}

export default Movies;


