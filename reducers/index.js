let initialState = {
  isLoading     : false,
  movie         : null,
  moviedetails  : null,
  youtubedetails: null,
  searchtext    : 'avatar'
}

export default function movies(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_MOVIE' :
      return Object.assign({}, state, {isLoading: action.payload});
    case 'SET_MOVIE' :
      return Object.assign({}, state, {movie: action.payload});
    case 'SET_SEARCHTEXT' :
      return Object.assign({}, state, {searchtext: action.payload});
    case 'MOVIE_DETAILS' :
      return Object.assign({}, state, {moviedetails: action.payload});
    case 'YOUTUBE_DETAILS':
      return Object.assign({}, state, {youtubedetails: action.payload});
    default:
      return state;
  }
}