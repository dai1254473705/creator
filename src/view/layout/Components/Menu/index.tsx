/**
 * menu
 */
import './index.scss';
import React, { Component } from 'react';
import Icon from '../../../../components/Icon';
import { observer } from 'mobx-react';
import { IMenu } from '../../../../../type.d';
import Store from '../../../../store';

@observer
export default class MenuList extends Component<unknown, never> {
	onClick = (item: IMenu) => {
		Store.route.pushRoute(item);
	};

	render() {
		const { MENULIST } = Store.route;
		return (
			<div className="menu-list">
				{MENULIST.map((item: IMenu) => {
					return (
						<div className="menu-item" key={item.title}>
							<span className="menu-icon">
								<Icon name={item.favicon} />
							</span>
							<span className="menu-text" onClick={() => this.onClick(item)}>
								{item.title}
							</span>
						</div>
					);
				})}
			</div>
		);
	}
}
