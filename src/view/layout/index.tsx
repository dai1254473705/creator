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
					<div className="header-list">
						{Object.keys(routeHistory).map((index: string) => {
							const data: IMenu = routeHistory[parseInt(index)];
							return (
								<div className="header-item active" key={data.id}>
									<span className="icon iconfont iconUser"></span>
									{/* <Icon className="favicon" name={data.favicon} /> */}
									<h1>{data.title}</h1>
									<Icon className="closeicon" name="iconClose" onClick={() => Store.route.removeRoute(data)} />
								</div>
							);
						})}
					</div>
				</div>
				{/* <div className="app-right">{!!this.state.url && <iframe className="iframe" src={this.state.url} frameBorder="0"></iframe>}</div> */}
				{/* <webview id="foo" src="https://www.github.com/" style={{ width: '100%', height: '100%' }}></webview> */}
			</div>
		);
	}
}
