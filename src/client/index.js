/**
 * Importing required modules
 */
import React  from 'react'; 
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux'; 
import App from './app';
//import './main.scss';

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

