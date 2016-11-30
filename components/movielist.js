import React from 'react';

const MovieList = ({listmovie, onMovieSelect}) => {
  return (
    <div className="col-md-3">
      <div className="thumbnail" style={{height:'300px'}}>
        <a onClick={() => onMovieSelect(listmovie.imdbID, listmovie.Year)}>
          <img src={(listmovie.Poster.indexOf("N/A") === 0) ? 'public/logo-redux.png' : listmovie.Poster} style={{marginTop:'10px', height:'70%'}} />
          <div className="caption">
            <p className="text-center"><kbd>{listmovie.Title}</kbd></p>
            <p className="text-center">{listmovie.Year}</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default MovieList;