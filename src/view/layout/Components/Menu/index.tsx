/**
 * menu
 */
import './index.scss';
import React, { Component } from 'react';
import Icon from '../../../../components/Icon';

export default class MenuList extends Component<any, any> {
	onClick = (url: string) => {
		this.props.onChange(url);
	};

	render() {
		return (
			<div className="menu-list">
				<div className="menu-item">
					<span className="menu-icon">
						<Icon name="iconwechat" />
					</span>
					<span
						className="menu-text"
						onClick={e => {
							this.onClick('/mdnice/index.html');
						}}
					>
						markdown
					</span>
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
