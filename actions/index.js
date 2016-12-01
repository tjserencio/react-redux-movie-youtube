import axios from 'axios';

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY     = "AIzaSyDXQ1H2iW0GC1wlN5X_U55Lhv2VX3QSjc4";

export function fetchMovie(type, payload) {
  return {
    type    : type,
    payload : payload
  }
}

export function fetchYoutube(searchtext) {
  return function(dispatch) {
    let params = {
      part       : 'snippet',
      key        : API_KEY,
      q          : searchtext,
      type       : 'video',
      maxResults : 1
    };

    axios.get(YOUTUBE_URL, {params: params})
         .then((result) => dispatch({type: "YOUTUBE_DETAILS", payload: result.data.items}));
  }
}

export function requestMovieFromApi(search, isdetailed = false) {
  return function(dispatch) {
    dispatch(fetchMovie('LOAD_MOVIE', true));
    dispatch(fetchMovie('MOVIE_DETAILS', null));

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if(xmlHttp.responseText.indexOf('Movie not found!') == -1) {
        dispatch(fetchMovie((isdetailed ? 'MOVIE_DETAILS' : 'SET_MOVIE'), xmlHttp.responseText));
        dispatch(fetchMovie('LOAD_MOVIE', false));
      }
    }

    xmlHttp.open("GET", 'http://www.omdbapi.com/?' + (isdetailed ? 'i' : 's') + '=' + search + '&plot=full&tomatoes=true', true);
    xmlHttp.send(null);
  }
}