import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestMovieFromApi, fetchYoutube } from '../actions';
import MovieList from './movielist';
import MovieDetails from './moviedetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {searchtext: 'avatar', imdbID: null, year: null};
    this.onMovieSelect = this.onMovieSelect.bind(this);
  }

  componentDidMount() {
    this.props.requestMovieFromApi.requestMovieFromApi(this.state.searchtext);
  }

  submittedText(event) {
    let searchtext = this.refs.searchtext.value;
    this.props.requestMovieFromApi.requestMovieFromApi(searchtext);
    this.setState({searchtext});
    event.preventDefault();
  }

  onMovieSelect(imdbID, year) {
    this.setState({imdbID});
    this.props.requestMovieFromApi.requestMovieFromApi(imdbID, true);
    this.props.fetchYoutube.fetchYoutube(this.state.searchtext + " movie trailer " + year);
  }

	render() {
		return (
      <div className="well">
        <div className="container">
          <div className="form-group">
            <input type="text" className="form-control input-lg" ref="searchtext" placeholder="Search Movie" value={this.state.searchtext} onChange={this.submittedText.bind(this)} />
          </div>
        </div>
        {
          (() => {
            if (this.props.moviedetails) {
              return (
                <div className="well container">
                  <MovieDetails mov={JSON.parse(this.props.moviedetails)} youtube={this.props.youtubedetails} />
                </div>
              );
            } else if (this.props.movie) {
              let mov  = JSON.parse(this.props.movie);
              let self = this;

              return (
                <div className="well container">
                  <div className="row">
                    {(!mov.hasOwnProperty('Search')) ? 'Nothing Found!' : mov.Search.map(function(listmovie, id) {
                      return <MovieList listmovie={listmovie} key={id} onMovieSelect={(imdbID, year) => self.onMovieSelect(imdbID, year)} />
                    })}
                  </div>
                </div>
              );
            } else {
              return (
                <div className="well container">Nothing Found!</div>
              );
            }
          })()
        }
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {isLoading: state.isLoading, movie: state.movie, moviedetails: state.moviedetails, youtubedetails: state.youtubedetails}
}

function mapDispatchToProps(dispatch) {
  return { requestMovieFromApi: bindActionCreators({requestMovieFromApi}, dispatch),
           fetchYoutube: bindActionCreators({fetchYoutube}, dispatch)
         }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)