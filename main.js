import React from 'react';
import ReduxThunk from 'redux-thunk';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components';
import Reducer from './reducers';

//Middleware to support async actions
const store = applyMiddleware(ReduxThunk)(createStore)(Reducer);


render(<Provider store={store}>
		<App />
	   </Provider>
	   ,document.querySelector('#app'))