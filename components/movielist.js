import React from 'react';
import { Link } from 'react-router';

const MovieList = ({listmovie, onMovieSelect}) => {
  return (
    <div className="col-md-3">
      <div className="thumbnail" style={{height:'300px'}}>
        <Link to={"moviedetails/" + listmovie.Title.replace(" ", "_") + listmovie.Year + "/" + listmovie.imdbID}>
          <img src={(listmovie.Poster.indexOf("N/A") === 0) ? 'public/logo-redux.png' : listmovie.Poster} style={{marginTop:'10px', height:'70%'}} />
          <div className="caption">
            <p className="text-center"><kbd>{listmovie.Title}</kbd></p>
            <p className="text-center">{listmovie.Year}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MovieList;