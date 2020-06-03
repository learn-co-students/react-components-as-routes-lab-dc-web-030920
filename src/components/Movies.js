import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>
          Movies Page
        </h1>

        {movies.map((movie, index) => (
          <div key={index}>
              <h3>Title: {movie.title}</h3>
              <h3>Time: {movie.time}</h3>
              <h3>MetaScore: {movie.metascore}</h3>
              <p>Genre(s):</p>
              <ul>
                  {movie.genres.map((genre, index) => (
                      <li key={index}>{genre}</li>
                  ))}
              </ul>
          </div>
      ))}
        
    </div>
  );
};

export default Movies;
