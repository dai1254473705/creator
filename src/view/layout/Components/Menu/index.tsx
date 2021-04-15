/**
 * menu
 */
import './index.scss';
import React, { Component } from 'react';
import Icon from '../../../../components/Icon';
import Menu, { IMenu } from './Menu';

export default class MenuList extends Component<any, any> {
	onClick = (item: IMenu) => {
		this.props.onChange(item);
	};

	render() {
		return (
			<div className="menu-list">
				{Menu.map(item => {
					return (
						<div className="menu-item" key={item.name}>
							<span className="menu-icon">
								<Icon name={item.icon} />
							</span>
							<span
								className="menu-text"
								onClick={e => {
									this.onClick(item);
								}}
							>
								{item.name}
							</span>
						</div>
					);
				})}
			</div>
		);
	}
}
