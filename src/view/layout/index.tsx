/**
 * 布局
 */
import './layout.scss';
import React, { Component } from 'react';
import MenuList from './Components/Menu';
import Logo from './Components/Logo';
import { IMenu } from '../../../type.d';
import Icon from '../../components/Icon';
import { observer } from 'mobx-react';
import Store from '../../store';

@observer
export default class MainLayout extends Component {
	render() {
		const { routeHistory } = Store.route;
		return (
			<div className="app-content">
				<div className="app-left">
					<Logo />
					<MenuList />
				</div>
				<div className="app-right">
					<div className="header-scroll">
						<div className="header-list">
							{Object.keys(routeHistory).map((index: string) => {
								const data: IMenu = routeHistory[parseInt(index)];
								return (
									<div
										className={`header-item ${data.active ? 'active' : ''}`}
										key={data.id}
										onClick={() => Store.route.pushRoute(data)}
									>
										<Icon className="favicon" name={data.favicon} />
										<h1>{data.title}</h1>
										<Icon
											className="closeicon"
											name="iconclose"
											onClick={e => {
												e.stopPropagation();
												Store.route.removeRoute(data);
											}}
										/>
									</div>
								);
							})}
						</div>
					</div>
					<div className="webview-content">
						{Object.keys(routeHistory).map((index: string) => {
							const data: IMenu = routeHistory[parseInt(index)];
							return data.isWebView ? (
								<webview
									key={`key_${data.id}`}
									id={`key_${data.id}`}
									src={data.url}
									style={{ width: '100%', height: '100%', display: data.active ? 'flex' : 'none' }}
								></webview>
							) : (
								<div
									key={`key_${data.id}`}
									className="route-content"
									style={{ width: '100%', height: '100%', display: data.active ? 'flex' : 'none' }}
								>
									{this.props.children}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
