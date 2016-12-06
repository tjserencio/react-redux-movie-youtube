import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestMovieFromApi } from '../actions';
import MovieList from './movielist';
import MovieDetails from './moviedetails';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {searchtext: this.props.searchtext};
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

	render() {
		return (
      <div>
        <div className="container">
          <div className="form-group">
            <input type="text" className="form-control input-lg" ref="searchtext" placeholder="Search Movie" value={this.state.searchtext} onChange={this.submittedText.bind(this)} />
          </div>
        </div>
        {
          (() => {
            if (this.props.movie) {
              let mov  = JSON.parse(this.props.movie);
              let self = this;

              return (
                <div className="well container">
                  <div className="row">
                    {(!mov.hasOwnProperty('Search')) ? 'Nothing Found!' : mov.Search.map(function(listmovie, id) {
                      return (listmovie.Poster.indexOf("N/A") === 0) ? null : <MovieList listmovie={listmovie} key={id} />
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
  return {isLoading: state.isLoading, movie: state.movie, moviedetails: state.moviedetails, youtubedetails: state.youtubedetails, searchtext: state.searchtext}
}

function mapDispatchToProps(dispatch) {
  return { requestMovieFromApi: bindActionCreators({requestMovieFromApi}, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)