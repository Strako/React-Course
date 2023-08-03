import { useEffect, useState } from 'react';
import {NewInstance} from '../../api/base.api';

const Movies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const posterEP: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
    const [page, setPage] = useState(1);
    const [endpoint, setEndpoint] = useState<string>("movie/now_playing?language=en-US&page=");
    const [response, setResponse] = useState<object>({});
    const [index, setIndex] = useState<number>(1)

    const getMovies = async () => {
        const response = await NewInstance.get(endpoint + page);
        return response;
    };

    useEffect(() => {
        getMovies().then((r)=>{
            setTimeout(() => {
                setResponse(r.data);
                console.log(r.data.results[index.toString()].poster_path);
                setIsLoading(false);
                setIndex(index + 1);
              }, 2000);

        }).catch((e)=>{
            console.log(e);
        });
    }, [page, endpoint, index])


    if (isLoading) {
        return <div className="App">Cargando...</div>;
      }
    
      return (
        <div className="App">
          <h1>{response.results[index].original_title}</h1>
          <img alt={response.results[index].original_title} src={posterEP+response.results[index].poster_path} />
        </div>
      );
    }

export default Movies;


