import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestMovieFromApi, fetchYoutube } from '../actions';
import Youtube from './youtubedetails';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let temp = this.props.routeParams.id;
    this.props.requestMovieFromApi.requestMovieFromApi(temp[1], true);
    this.props.fetchYoutube.fetchYoutube(temp[0] + " movie trailer");
  }

	render() {
    return (
      <div>
        {
          (() => {
            if (this.props.moviedetails) {
              let mov = JSON.parse(this.props.moviedetails);

              return (
                <div className="well container">
                  <div className="container-fluid bg-1 text-center">
                    <h2 className="margin">{mov.Title}</h2>
                    <img src={(mov.Poster.indexOf("N/A") === 0) ? 'public/logo-redux.png' : mov.Poster} className="img-responsive img-circle margin center-block" width="300" height="300" />
                    <blockquote className="text-justify"><h4>{mov.Plot}</h4></blockquote>
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
                  {(this.props.youtubedetails === null) ? '' : this.props.youtubedetails.map(function(data, key) {
                    return <Youtube key={key} video={data} />
                  })}
                </div>
              );
            }
          })()
        }
      </div>
	  )
  }
}

function mapStateToProps(state) {
  return {isLoading: state.isLoading, movie: state.movie, moviedetails: state.moviedetails, youtubedetails: state.youtubedetails}
}

function mapDispatchToProps(dispatch) {
  return {
    requestMovieFromApi: bindActionCreators({requestMovieFromApi}, dispatch),
    fetchYoutube: bindActionCreators({fetchYoutube}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)