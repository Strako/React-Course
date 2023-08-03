import { useEffect, useState } from 'react';
import { NewInstance } from '../../api/base.api';
import './Movies.css'
interface objectI {
  [key: string]: any
}
const Movies = () => {


  const [isLoading, setIsLoading] = useState(true);
  const posterEP: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  const [page, setPage] = useState(1);
  const [endpoint, setEndpoint] = useState<string>("movie/now_playing?language=en-US&page=");
  const [response, setResponse] = useState<objectI>({});

  const getMovies = async () => {
    const response = await NewInstance.get(endpoint + page);
    return response;
  };

  useEffect(() => {
    getMovies().then((r) => {
      setResponse(r.data);
      console.log(r.data.results["1"].poster_path);
      setIsLoading(false);
    }).catch((e) => {
      console.log(e);
    });
  }, [page, endpoint])


  if (isLoading) {
    return <div className="App"></div>;
  }

  const listMovies = () => {
    const listingComponents = response.results.map((movie: objectI) => (

      <img className="movie_card" src={posterEP + movie.poster_path} />
    ))
    return listingComponents;
  }

  return (
    <div className="movies">
      {listMovies()}
    </div>

  );
}

export default Movies;


