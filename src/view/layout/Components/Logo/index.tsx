/**
 * menu
 */
import './index.scss';
import React, { Component } from 'react';

export default class Logo extends Component<{},{}> {
	render() {
		return (
			<div className="menu-logo">
				<span className="logo"></span>
				<span className="logo-title">creator</span>
			</div>
		);
	}
}
