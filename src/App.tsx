import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Router from './router';
import './App.css';
export default function App() {
	return (
		<Provider>
			<HashRouter>
				<Router />
			</HashRouter>
		</Provider>
	);
}
