/**
 * 布局
 */
import './layout.scss';
import React, { Component } from 'react';
import { Layout } from 'antd';
import MenuList from './Components/Menu';
import Logo from './Components/Logo';
import { IMenu } from './Components/Menu/Menu';
const { Header, Sider, Content } = Layout;
import Icon from '../../Components/Icon';

export default class MainLayout extends Component {
	state = {
		collapsed: false,
		url: '',
		isWebView: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	onMenuChange = (item: IMenu) => {
		this.setState({
			url: item.url,
			isWebView: item.isWebView,
		});
	};

	render() {
		return (
			<div className="app-content">
				<div className="app-left">
					<Logo />
					<MenuList onChange={this.onMenuChange} />
				</div>
				<div className="app-right">
					<div className="header-list">
						<div className="header-item"></div>
						<div className="header-item active">
							<Icon name="iconClose" />
							<h1></h1>
							<Icon name="iconClose" />
						</div>
					</div>
				</div>
				{/* <div className="app-right">{!!this.state.url && <iframe className="iframe" src={this.state.url} frameBorder="0"></iframe>}</div> */}
				{/* <webview id="foo" src="https://www.github.com/" style={{ width: '100%', height: '100%' }}></webview> */}
			</div>
		);
	}
}
