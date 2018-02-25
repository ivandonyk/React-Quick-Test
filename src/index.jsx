import React from 'react';
import ReactDOM from 'react-dom';

import Root from './routes/root';
import { store } from './store/store';

import './style/index.pcss';


const element = document.getElementById('root');

ReactDOM.render(
	<Root store={store}/>,
	element,
);
