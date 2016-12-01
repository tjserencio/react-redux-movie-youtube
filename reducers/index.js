export default function movies(state = {isLoading: false, movie: null, moviedetails: null, youtubedetails: null}, action) {
  switch (action.type) {
    case 'LOAD_MOVIE' :
      return Object.assign({}, state, {isLoading: action.payload});
    case 'SET_MOVIE' :
      return Object.assign({}, state, {movie: action.payload});
    case 'MOVIE_DETAILS' :
      return Object.assign({}, state, {moviedetails: action.payload});
    case 'YOUTUBE_DETAILS':
      return Object.assign({}, state, {youtubedetails: action.payload});
    default:
      return state;
  }
}