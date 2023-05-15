import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'api/api';
import CastMovieCard from '../CastMovieCard/CastMovieCard';

const CastMovie = () => {
  const [castMovie, setCastMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchGetMovieCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCastMovie(data.cast);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchGetMovieCast();
  }, [movieId]);

  return castMovie?.length === 0 ? (
    <p>We don't have any cast for this movie</p>
  ) : (
    <CastMovieCard castMovie={castMovie} />
  );
};

export default CastMovie;
