import { useEffect, useState } from 'react';
import { NewInstance } from '../../api/base.api';
import { Rate } from './Components/Stars';
import getGenreByID from './Components/getGenre';
import left from '../../Images/left.png'
import right from '../../Images/right.png'
import './Movies.css'
import '../../Components/Buttons/Navbar.css'

//interface

interface objectI {
  [key: string]: any
}
const Movies = () => {

  //Constants

  const categories = ["Now Playing","Popular","Top Rated","Upcoming"] as const;
  const posterEP: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  const genresEP = "genre/movie/list?language=en";
  const nowPlayingEP = "movie/now_playing?language=en-US&page="
  const popularEP = "movie/popular?language=en-US&page="
  const topRatedEP = "movie/top_rated?language=en-US&page="
  const upcomingEP = "movie/upcoming?language=en-US&page="

  //useState Hooks

  const [pageTitle, setPageTitle] = useState<string>(categories[0])
  const [isLoading, setIsLoading] = useState(true);
  const [LoadingGenres, setLoadingGenres] = useState(true);
  const [page, setPage] = useState(1);
  const [endpoint, setEndpoint] = useState<string>(nowPlayingEP);
  const [response, setResponse] = useState<objectI>({});
  const [genres, setGenres] = useState<objectI>({});
  const [totalPages, setTotalPages] = useState<number>(10)
  const [classLeft, setClassLeft] = useState("left_arrow_inactive");
  const [classRight, setClassRight] = useState("right_arrow_active");
  const [activeCategorie, setActiveCategorie] = useState([true,false,false,false]);

  //Functions
  const checkLeft = () => {
    if (page === 1) {
      setClassLeft("left_arrow_inactive");
    } else {
      setClassLeft("left_arrow_active");
    }
  }

  const checkRight = () => {
    if (page === totalPages) {
      setClassRight("right_arrow_inactive");
    } else {
      setClassRight("right_arrow_active");
    }
  }

  const setActive = (categorie: number) =>{
    categorie === 0 ? setActiveCategorie([true,false,false,false]) :
    categorie === 1 ? setActiveCategorie([false,true,false,false]) :
    categorie === 2 ? setActiveCategorie([false,false,true,false]) :
    categorie === 3 ? setActiveCategorie([false,false,false,true]) : [true,false,false,false]
  }

  //Get Functions

  const getMovies = async () => {
    const response = await NewInstance.get(endpoint + page);
    return response;
  };


  const getGenres = async () => {
    const response = await NewInstance.get(genresEP);
    return response;
  };

  //Handlers

  const handleLeft = () => {

    if (page > 1) {
      setTimeout(() => {
        setIsLoading(true);
        setPage(page - 1);
      }, 200);
    }
  }

  const handleRight = () => {

    if (page < totalPages) {
      setTimeout(() => {
        setIsLoading(true);
        setPage(page + 1);
      }, 200);
    }
  }

  const handleCategories = (categorie:number) =>{
    categorie === 0? (setEndpoint(nowPlayingEP), setPage(1), setPageTitle(categories[categorie]), setActive(categorie)):
    categorie === 1? (setEndpoint(popularEP), setPage(1), setPageTitle(categories[categorie]), setActive(categorie)):
    categorie === 2? (setEndpoint(topRatedEP), setPage(1), setPageTitle(categories[categorie]), setActive(categorie)):
    categorie === 3? (setEndpoint(upcomingEP), setPage(1), setPageTitle(categories[categorie]), setActive(categorie)): ""
  }
  //useEffect

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
      }, 200);
    }).catch((e) => {
      console.log(e);
    });
  }, [page, endpoint])

  useEffect(() => {
    getGenres().then((r) => {
      setGenres(r.data);
      setTimeout(() => {
        setLoadingGenres(false);
      }, 200);

    }).catch((e) => {
      console.log(e);
    });
  }, [])

  useEffect(() => {
    checkLeft();
    checkRight();
  }, [page, endpoint])

  //Loader

  if (LoadingGenres && isLoading) {

    return <div className="App"></div>;
  }
  console.log({ isLoading, LoadingGenres });

  //Render movies

  const listMovies = () => {
    console.log(sessionStorage.getItem("guest_session_id"));
    const listingComponents = response.results.map((movie: objectI) => (
      <div className="movie_card">
        <img src={posterEP + movie.poster_path} />
        <div className="movie_cover">
          <p className="movie_title">{movie.title}</p>
          <p className="movie_data">{movie.release_date !== undefined ? movie.release_date.substring(0, 4) : ""} ‧ {getGenreByID(movie.genre_ids, genres.genres)}</p>
          <p className="movie_overview">{movie.overview}</p>
          <p className="movie_stars">{
            Rate(movie.vote_average)
          }</p>
        </div>
      </div>
    ))
    return listingComponents;
  }

  //Return JSX

  return (
    <div>
      <div>
        <ul className="navbar">
          <li><button className="button-navbar" disabled={activeCategorie[0]}  onClick={() => handleCategories(0)}>{categories[0]}</button></li>
          <li><button className="button-navbar" disabled={activeCategorie[1]} onClick={() => handleCategories(1)}>{categories[1]}</button></li>
          <li><button className="button-navbar" disabled={activeCategorie[2]} onClick={() => handleCategories(2)}>{categories[2]}</button></li>
          <li><button className="button-navbar" disabled={activeCategorie[3]} onClick={() => handleCategories(3)}>{categories[3]}</button></li>
        </ul>
      </div>
      <div className="page_title">
        {pageTitle}
      </div>
      <br></br>
      <div className="movies_container">
        <div className='movies'>
          {listMovies()}
        </div>
        <div className="arrow_container">
          <img className={classLeft} src={left} onClick={handleLeft} />
          <div className="pages_container">{page} / {totalPages}</div>
          <img className={classRight} src={right} onClick={handleRight} />
        </div>
      </div>
    </div >
  );
}

export default Movies;


