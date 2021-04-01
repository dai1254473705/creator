import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Router from './router';
import stores from './store';
import './static/css/theme-blue.scss';

export default function App() {
	return (
		<Provider {...stores}>
			<HashRouter>
				<Router />
			</HashRouter>
		</Provider>
	);
}
