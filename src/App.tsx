import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Router from './router';
import './static/css/theme-blue.scss';

export default function App() {
	return (
		<Provider>
			<HashRouter>
				<Router />
			</HashRouter>
		</Provider>
	);
}
