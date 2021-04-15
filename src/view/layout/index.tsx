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
				{/* <div className="app-right">{!!this.state.url && <iframe className="iframe" src={this.state.url} frameBorder="0"></iframe>}</div> */}

				<div className="app-right">{this.props.children}</div>
			</div>
		);
	}
}
