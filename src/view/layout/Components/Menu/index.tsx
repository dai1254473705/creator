/**
 * menu
 */
import './index.scss';
import React, { Component } from 'react';
import Icon from '../../../../components/Icon';

export default class MenuList extends Component {
	render() {
		return (
			<div className="menu-list">
				<div className="menu-item">
					<span className="menu-icon">
						<Icon name="iconwechat" />
					</span>
					<span className="menu-text">推荐</span>
				</div>
				<div className="menu-item active">
					<span className="menu-icon">
						<Icon name="iconnavicon-wzgl" />
					</span>
					<span className="menu-text">推荐</span>
				</div>
			</div>
		);
	}
}
