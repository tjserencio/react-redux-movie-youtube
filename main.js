import React from 'react';
import ReduxThunk from 'redux-thunk';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components';
import Reducer from './reducers';
import Listing from './components/listing';
import MovieDetails from './components/moviedetails';

//Middleware to support async actions
const store = applyMiddleware(ReduxThunk)(createStore)(Reducer);

render((<Provider store={store}>
		<Router history={browserHistory}>
		  <Route path="/" component={App}>
		    <IndexRoute component={Listing} />
		    <Route path="moviedetails/:id/:id" component={MovieDetails} />
		  </Route>
		</Router>
	   </Provider>)
	   ,document.querySelector('#app'))