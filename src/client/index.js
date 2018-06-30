/**
 * Importing required modules
 */

// Importing third party libraries

import React  from 'react'; 
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux'; 
import App from './app';

// Import redux modal

// Importing our own libraries

import configureStore from './Store';
 
/**
 * Creating a store and passing it to provider
 */
const store=configureStore();

ReactDOM.render(
	<Provider store={store}>
<App/>
	</Provider>
,document.querySelector('#root'))

