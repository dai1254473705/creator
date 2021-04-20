/**
 * menu
 */
import './index.scss';
import React, { Component } from 'react';
import Icon from '../../../../components/Icon';
import MenuConfig from './config';

export default class MenuList extends Component<any, any> {
	onClick = (item: string) => {
		this.props.onChange(url);
	};

	render() {
		return (
			<div className="menu-list">
				{MenuConfig.map(item => {
					return (
						<div className="menu-item" key={item.title}>
							<span className="menu-icon">
								<Icon name={item.favicon} />
							</span>
							<span
								className="menu-text"
								onClick={e => {
									this.onClick(item.url);
								}}
							>
								{item.title}
							</span>
						</div>
					);
				})}
			</div>
		);
	}
}
