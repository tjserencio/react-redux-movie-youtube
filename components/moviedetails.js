import React from 'react';
import Youtube from './youtubedetails';

const MovieDetails = ({mov, youtube}) => {
	return (
    <div>
			<div className="container-fluid bg-1 text-center">
			  <h2 className="margin">{mov.Title}</h2>
        <img src={(mov.Poster.indexOf("N/A") === 0) ? 'public/logo-redux.png' : mov.Poster} className="img-responsive img-circle margin center-block" width="300" height="300" />
			  <blockquote className="text-justify"><h4>{mov.Plot}</h4></blockquote>
			</div>
      <div className="row bg-info">
        <div className="col-sm-3 movtitle">YEAR : </div>
        <div className="col-sm-9">{mov.Year}</div>
      </div>
      <div className="row bg-info">
        <div className="col-sm-3 movtitle">RATED : </div>
        <div className="col-sm-9">{mov.Rated}</div>
      </div>
      <div className="row bg-info">
        <div className="col-sm-3 movtitle">RELEASED : </div>
        <div className="col-sm-9">{mov.Released}</div>
      </div>
      <div className="row bg-info">
        <div className="col-sm-3 movtitle">GENRE : </div>
        <div className="col-sm-9">{mov.Genre}</div>
      </div>
      <div className="row bg-info">
        <div className="col-sm-3 movtitle">DIRECTOR : </div>
        <div className="col-sm-9">{mov.Director}</div>
      </div>
      <div className="row bg-info">
        <div className="col-sm-3 movtitle">WRITER : </div>
        <div className="col-sm-9">{mov.Writer}</div>
      </div>
      <div className="row bg-info">
        <div className="col-sm-3 movtitle">ACTORS : </div>
        <div className="col-sm-9">{mov.Actors}</div>
      </div>
      <div className="row bg-info">
        <div className="col-sm-3 movtitle">AWARDS : </div>
        <div className="col-sm-9">{mov.Awards}</div>
      </div>
      <div className="row bg-info">
        <div className="col-sm-3 movtitle">IMDB RATING : </div>
        <div className="col-sm-9">{mov.imdbRating}</div>
      </div>
      <div className="row bg-info">
        <div className="col-sm-3 movtitle">ROTTEN TOMATO RATING : </div>
        <div className="col-sm-9">{mov.tomatoRating}</div>
      </div>
      {(youtube === null) ? '' : youtube.map(function(data, key) {
        return <Youtube key={key} video={data} />
      })}
    </div>
	)
}

export default MovieDetails;